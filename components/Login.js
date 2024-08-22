import { Card, CardBody, CardFooter, Button, Input } from "@nextui-org/react";
import { useState, useEffect } from "react";
import MailIcon from "./Icons/EmailIcon";
import PasswordIcon from "./Icons/PasswordIcon";
import Link from "next/link";
import { doSignInWithEmailAndPassword } from "../utils/utils";
import { useAuth } from "../contexts/authcontext";
import { useRouter } from "next/router";

export default function Login() {
    const authData = useAuth();
    const userLoggedIn = authData?.userLoggedIn;
    const router = useRouter();
    const [shadow, setShadow] = useState("");
    const [input, setInput] = useState({
        email: "",
        password: "",
        error: false,
    });
    const [isSigningIn, setIsSigningIn] = useState(false);

    function updateInput(e) {
        let { name, value } = e.target;
        setInput({ ...input, [name]: value });
    }

    async function handleLogin(e) {
        e.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            await doSignInWithEmailAndPassword(input.email, input.password);
            router.push(`/profile/${input}`);
        }
    }
    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <Card className="w-96 rounded-md p-5">
                    <h1 className="text-2xl font-bold text-center">
                        Please Login
                    </h1>
                    <CardBody>
                        <Input
                            isInvalid={input.error}
                            errorMessage="Please enter a valid email"
                            value={input.email}
                            onChange={updateInput}
                            name="email"
                            type="email"
                            label="Email"
                            className="mb-5"
                            placeholder="Enter your email"
                            labelPlacement="outside"
                            startContent={<MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
                            isClearable
                        />
                        <Input
                            isInvalid={input.error}
                            errorMessage="Please enter a valid password"
                            value={input.password}
                            onChange={updateInput}
                            name="password"
                            type="password"
                            label="Password"
                            placeholder="Enter your password"
                            labelPlacement="outside"
                            startContent={<PasswordIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
                            isClearable
                        />
                    </CardBody>
                    <CardFooter className="flex justify-center">
                        <Button
                            className="bg-blue-600 text-white"
                            variant={shadow}
                            onClick={handleLogin}
                            onMouseEnter={() => setShadow("shadow")}
                            onMouseLeave={() => setShadow("")}
                        >
                            Login
                        </Button>
                    </CardFooter>
                    <div className="flex justify-center items-center text-center">
                        <p className="text-sm text-default-400">
                            No account? <Link href="/SignUp">Sign Up</Link>
                        </p>
                    </div>
                </Card>
            </div>
        </>
    );
}
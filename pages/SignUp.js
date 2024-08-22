import { Card, CardBody, CardFooter, Button, Input } from "@nextui-org/react";
import { useState } from "react";
import Link from "next/link";
import MailIcon from "@/components/Icons/EmailIcon";
import PasswordIcon from "@/components/Icons/PasswordIcon";
import NameIcon from "@/components/Icons/NameIcon";
import { doCreateUserWithEmailAndPassword } from "@/utils/utils";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/utils/firebase";
import { useRouter } from "next/router";
export default function SignUp() {
    const router = useRouter();
    const [shadow, setShadow] = useState("");
    const [input, setInput] = useState({
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        error: false,
    });
    const [isRegistering, setIsRegistering] = useState(false);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function updateInput(e) {
        let { name, value } = e.target;
        setInput({ ...input, [name]: value });
    }

    async function handleLogin(e) {
        if (!isRegistering) {
            setIsRegistering(true);
            await doCreateUserWithEmailAndPassword(input.email, input.password);
            try {
                // if all correct, add user to db
                if (emailRegex.test(input.email) || input.password.length > 8) {
                    await addDoc(collection(db, 'users'), {
                        username: input.username,
                        email: input.email,
                        firstName: input.firstName,
                        lastName: input.lastName,
                        password: input.password
                    });
                    router.push("/"); // push to login page for confirmation
                }
            } catch (e) {
                console.log(e);
            }
        }
    }

    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <Card className="w-96 rounded-md p-5">
                    <h1 className="text-2xl font-bold text-center">
                        Sign Up Below
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
                            errorMessage="Please enter a valid username"
                            value={input.username}
                            onChange={updateInput}
                            name="username"
                            type="text"
                            label="Username"
                            className="mb-5"
                            placeholder="Enter your username"
                            labelPlacement="outside"
                            startContent={<NameIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
                            isClearable
                        />
                        <Input
                            isInvalid={input.error}
                            errorMessage="Please enter a valid first name"
                            value={input.firstName}
                            onChange={updateInput}
                            name="firstName"
                            type="text"
                            label="First Name"
                            className="mb-5"
                            placeholder="Enter your first name"
                            labelPlacement="outside"
                            startContent={<NameIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
                            isClearable
                        />
                        <Input
                            isInvalid={input.error}
                            errorMessage="Please enter a valid last name"
                            value={input.lastName}
                            onChange={updateInput}
                            name="lastName"
                            type="text"
                            label="Last Name"
                            className="mb-5"
                            placeholder="Enter your last name"
                            labelPlacement="outside"
                            startContent={<NameIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
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
                            Sign Up
                        </Button>
                    </CardFooter>
                    <div className="flex justify-center items-center text-center">
                        <p className="text-sm text-default-400">
                            Already have an account? <Link href="/">Login</Link>
                        </p>
                    </div>
                </Card>
            </div>
        </>
    );
}
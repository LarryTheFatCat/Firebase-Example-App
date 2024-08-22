import { useRouter } from "next/router";

export default function Profile() {
    const router = useRouter();
    const { name } = router.query;
    return (
        <div>
            <h1>Profile: {name}</h1>
        </div>
    )
}
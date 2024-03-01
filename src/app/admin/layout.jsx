import { useAuthContext } from "@/contexts/authContext";
import { redirect } from "next/dist/server/api-utils";

export default function Layout ({ children }) {
    const { isAuthenticated } = useAuthContext;

    if(!isAuthenticated) {
        redirect("/auth/login");
        return;
    }

    return <div>{children}</div>
}
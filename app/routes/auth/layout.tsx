import { Outlet } from "react-router";

export default function AuthLayout() {
    return (
    <div className="h-dvh bg-zinc-950 text-white">
        <Outlet/>
    </div>
    )
}
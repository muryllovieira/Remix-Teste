import { Link } from "react-router";
import type { Route } from "./+types/sign-in";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Sign up" }];
}

export default function SignUp() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-4xl font-bold">Sign Up</h1>

      <Link to="/sign-in">Login instead</Link>
    </div>
  );
}

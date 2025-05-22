import { Link } from "react-router";
import type { Route } from "./+types/sign-in";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Sign In" }];
}

export default function SignIn() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-4xl font-bold">Sign In</h1>

      <Link to="/sign-up">Create an account</Link>
    </div>
  );
}

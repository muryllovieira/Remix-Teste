import { Form, Link } from "react-router";
import type { Route } from "./+types/sign-in";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Sign In" }];
}

export async function action({ request }: Route.ActionArgs) {
  const data = await request.formData();

  const email = data.get("email");
  const password = data.get("password");

  console.log({ email, password });
}

export default function SignIn() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-4xl font-bold">Sign In</h1>

      <Form method="post">
        <input type="email" name="email" id="email" placeholder="Email" />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Senha"
        />
        <button type="submit">Entrar</button>
      </Form>

      <Link to="/sign-up">Create an account</Link>
    </div>
  );
}

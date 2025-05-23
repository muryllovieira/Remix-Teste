import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import type { Repository } from "../http/types/github-repositories";

export async function loader({}: Route.LoaderArgs) {
  const response = await fetch(
    "https://api.github.com/users/muryllovieira/repos"
  );
  const data: Repository[] = await response.json();

  return { repositories: data };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const { repositories } = loaderData;

  return (
    <div className="h-dvh bg-zinc-950 text-white">
      <ul>
        {repositories.map((repo) => {
          return <li key={repo.id}>{repo.name}</li>;
        })}
      </ul>
    </div>
  );
}

import Login from "~/components/title-screen/Login";
import TitleMenu from "~/components/title-screen/TitleMenu";
import { getServerAuthSession } from "~/server/auth";

export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      {session ? <TitleMenu /> : <Login />}
    </main>
  );
}

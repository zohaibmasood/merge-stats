import { useSession, signIn, signOut } from "next-auth/react";
import Head from "next/head";

export default function Home() {
  const { data: session } = useSession();
  return (
    <div className="bg-black text-white min-h-screen p-4">
      <Head>
        <title>ScrobbleMerge</title>
      </Head>
      <h1 className="text-red-500 text-3xl font-bold">ScrobbleMerge</h1>
      {!session && <button onClick={() => signIn("spotify")} className="mt-4 p-2 bg-red-600">Log in with Spotify</button>}
      {session && <>
        <p className="mt-2">Welcome, {session.user?.name}</p>
        <button onClick={() => signOut()} className="mt-2 p-2 bg-red-800">Logout</button>
      </>}
    </div>
  );
}
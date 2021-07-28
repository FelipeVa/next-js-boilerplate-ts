import Head from "next/head";
export default function Home() {
  return (
    <div className="h-screen flex justify-center content-center bg-black">
      <Head>
        <title>NextJS Boilerplate</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="self-center">
        <h1 className="text-2xl font-bold text-gray-800">Hello World!</h1>
      </main>
    </div>
  );
}

import Head from "next/head";
import { Button } from "../components/Button";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Button></Button>
    </div>
  );
}

import Head from "next/head";
import { Accordion } from "../components/Accordion";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ width: "50%", margin: "10px auto" }}>
        <Accordion />
      </div>
    </div>
  );
}

import Head from "next/head";
import { Tab } from "../components/Tab";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ width: "50%", margin: "10px auto" }}>
        <Tab />
      </div>
    </div>
  );
}

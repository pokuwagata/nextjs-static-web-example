import Head from "next/head";
import NoticeDialog from "../components/NoticeDialog";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ width: "50%", margin: "10px auto" }}>
        <NoticeDialog />
        <div style={{ height: "1000px", backgroundColor: "#000" }}></div>
      </div>
    </div>
  );
}

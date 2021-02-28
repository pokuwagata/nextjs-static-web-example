import Head from "next/head";
import dynamic from "next/dynamic";

const NoticeDialog = dynamic(() => import("../components/NoticeDialog"), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ width: "50%", margin: "10px auto" }}>
        {/* {typeof window !== "undefined" && <NoticeDialog />} */}
        <NoticeDialog />
        <div style={{ height: "1000px", backgroundColor: "#000" }}></div>
      </div>
    </div>
  );
}

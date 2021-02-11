import Head from "next/head";
import { useEffect } from "react";

// https://stackoverflow.com/questions/45350360/react-16-warning-warning-js36-warning-did-not-expect-server-html-to-contain-a

function Test() {
  console.log("ssr or client");
  useEffect(() => {
    console.log("client");
    // this works
    // document.getElementById("test").remove();
  }, []);
  if (typeof window !== "undefined") {
    // warning
    document.getElementById("test").remove();
  }
  return (
    <div>
      <h1>
        Warning: Expected server HTML to contain a matching &lt;div&gt; in
        &lt;div&gt;{" "}
      </h1>
      <div id="test"></div>
    </div>
  );
}

export async function getServerSideProps() {
  console.log("ssr");
  return { props: {} };
}

export default Test;

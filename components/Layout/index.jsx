import Head from "next/head";
import Drawer from "../Drawer";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Layouts Example</title>
      </Head>
      <Drawer>{children}</Drawer>
    </>
  );
}

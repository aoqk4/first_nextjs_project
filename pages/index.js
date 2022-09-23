import Head from "next/head";
import Link from "next/link";
import Counter from "../components/Counter";
import Layout from "../components/Layout";

// import "../pages/globals.css";

export default function Page() {
  return (
    <>
      <Layout test="Hello">
        <div className="font-bold text-gray-600">Hello World</div>
      </Layout>
    </>
  );
}

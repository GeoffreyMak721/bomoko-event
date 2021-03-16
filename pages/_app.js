import React from "react";

import Head from "next/head";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta charSet="utf-8" />

        <title>Learn - Education & Online Course Website Template</title>

        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="shortcut icon" href="/images/favicon.png" type="image/png" />

        <link rel="stylesheet" href="/css/animate.css" />

        <link rel="stylesheet" href="/css/LineIcons.2.0.css" />

        <link rel="stylesheet" href="/css/bootstrap-5.0.5-alpha.min.css" />

        <link rel="stylesheet" href="/css/style.css" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

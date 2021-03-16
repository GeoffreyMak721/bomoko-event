import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <script src="/js/bootstrap.bundle-5.0.0.alpha-min.js"></script>
          <script src="/js/wow.min.js"></script>
          <script src="/js/main.js"></script>
          {/*  <script src="/js/scroll.js"></script> */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;

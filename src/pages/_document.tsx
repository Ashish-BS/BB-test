import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" >
        <Head>
        </Head>
        <body>
          {/* <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MLG9QB3"
            height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript> */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

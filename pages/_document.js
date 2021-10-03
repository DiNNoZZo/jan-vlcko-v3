import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyCocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <div id="alerts" className="alert__container"></div>
          <div id="modal-window"></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyCocument;

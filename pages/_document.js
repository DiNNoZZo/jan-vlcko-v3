import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyCocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="sk-SK">
        <Head />
        <body>
          <div id="alerts" className="alert__container"></div>
          <div id="modal-window"></div>
          <div id="nav-btn"></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyCocument;

import Alert from '../UI/Alert';
import Footer from '../UI/Footer';
import Meta from '../Meta';

const layout = ({ preview, children }) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default layout;

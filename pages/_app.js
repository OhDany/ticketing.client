import 'bootstrap/dist/css/bootstrap.css';

const Named = ({ Component, pageProps }) => {
  return (
    <div>
      <h1>Header!</h1>
      <Component {...pageProps} />;
    </div>
  );
};

export default Named;

import '@/styles/globals.css';
import Layout from '@/components/Layout';

export default function App({ Component, pageProps }) {
  // use layout
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

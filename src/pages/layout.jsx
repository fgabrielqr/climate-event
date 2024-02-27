
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
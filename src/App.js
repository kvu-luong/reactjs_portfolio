import { lazy, Suspense } from 'react';
// const { GlobalStyle } = require('./globalStyles');
import { GlobalStyle } from './globalStyles';

const Home = lazy(() => import('./Pages/Home'));
const Header = lazy(() => import('./components/Header'));
const Footer = lazy(() => import('./components/Footer'));
const ScrollToTop = lazy(() => import('./components/ScrollToTop'));


function App() {

  return (
  <>  
  <Suspense fallback={null}>
    <GlobalStyle />
    <Header />
    <Home />
    <ScrollToTop />
    <Footer />
  </Suspense>
  </>
  );
}

export default App;

//This is home page, It will contains all the sections require in this page.

import HeroSection from '../Sections/Hero';
import About from '../Sections/About';
import Services from '../Sections/Services';
import Testimonials from '../Sections/Testimonials';
import Contact from '../Sections/Contact';


const Home = () => {
  return <div>
    <HeroSection />
    <About />
    <Services />
    <Testimonials />
    <Contact />
  </div>;
};

export default Home;

import './App.css';
import Navbar from './components/html/navbar';
import Home from './components/html/home';
import Bio from './components/html/bio';
import Services from './components/html/services';
import Contacts from './components/html/contacts';
import Footer from './components/html/footer';
import HomeSvg from './components/html/home_svg';
import SmoothScrollComponent from './components/js/global';
import ParticlesHome from './components/js/particles';
import ContactsSvg from './components/html/contacts_svg';

function App() {
  return (
    <>
      <ParticlesHome />
      <Navbar />
      <Home />
      <HomeSvg />
      <Bio />
      <Services />
      <ContactsSvg />
      <Contacts />
      <Footer />
      <SmoothScrollComponent />
    </>
  );
}

export default App;


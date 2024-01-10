import './App.css';
import Navbar from './components/html/navbar';
import Home from './components/html/home';
import Bio from './components/html/bio';
import Services from './components/html/services';
import Contacts from './components/html/contacts';
import Footer from './components/html/footer';
import HomeSvg from './components/html/home_svg';
import ParticlesHome from './components/js/particles';
import ContactsSvg from './components/html/contacts_svg';
import ResponsiveNavbar from './components/html/responsive/responsive_navbar';


function App() {
  return (
    <>
      <ParticlesHome />
      <Navbar />
      <ResponsiveNavbar />
      <Home />
      <HomeSvg />
      <Bio />
      <Services />
      <ContactsSvg />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;


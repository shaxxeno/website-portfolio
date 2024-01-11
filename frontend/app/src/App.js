import './components/html/styles/global.css';
import Navbar from './components/html/main-components/navbar';
import Home from './components/html/main-components/home';
import Bio from './components/html/main-components/bio';
import Services from './components/html/main-components/services';
import Contacts from './components/html/main-components/contacts';
import Footer from './components/html/main-components/footer';
import HomeSvg from './components/html/svg-components/home_svg';
import ParticlesHome from './components/js/particles';
import ContactsSvg from './components/html/svg-components/contacts_svg';
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


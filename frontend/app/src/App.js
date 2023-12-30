import './App.css';
import Navbar from './components/html/navbar';
import Home from './components/html/home';
import Bio from './components/html/bio';
import Services from './components/html/services';
import Contacts from './components/html/contacts';
import Footer from './components/html/footer';
import SmoothScrollComponent from './components/js/global';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Bio />
      <Services />
      <Contacts />
      <Footer />
      <SmoothScrollComponent />
    </>
  );
}

export default App;


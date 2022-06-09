import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Intro from "./components/Intro/Intro";
import Projects from "./components/Projects/Projects";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="bg-no-repeat bg-cover bg-[url('/src/images/bg.png')]">
      <Intro></Intro>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;

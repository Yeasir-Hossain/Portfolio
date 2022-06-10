import Footer from "./components/Footer/Footer";
import { ToastContainer } from 'react-toastify';
import { Routes, Route } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import Project1 from "./components/Projects/Project1";
import Project2 from "./components/Projects/Project2";
import Project3 from "./components/Projects/Project3";
import Blog from "./components/Blog/Blog";
import Home from "./components/Home/Home";
import Navbar from "./components/Shared/Navbar";


function App() {
  return (
    <div className="bg-no-repeat bg-cover bg-[url('/src/images/bg.png')]">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/project1" element={<Project1 />} />
        <Route path="/project2" element={<Project2 />} />
        <Route path="/project3" element={<Project3 />} />
        <Route path="/blog" element={<Blog/>} />
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;


import { ToastContainer } from "react-toastify";
import { Banner, Contact, Footer, Navbar, Overview, Projects, Skills } from "./Components/index";
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
    <main className="main">
      <div className="parent min-h-[100vh]">
        
          <Navbar/>
          <Banner/>
          <Overview/>
          <Skills/>
          <Projects/>
          <Contact/>
          <Footer/>
          <ToastContainer theme="dark"/>
      </div>  
    </main>
  );
}

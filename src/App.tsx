import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import ScrollTopBtn from "./components/ScrollTopBtn";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollTopBtn />
    </>
  );
}

export default App;

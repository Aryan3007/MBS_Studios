import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import { NavbarWithMegaMenu } from "./components/NavbarWithMegaMenu";
// import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import BuyPage from "./pages/BuyPage";
import HomeSection from "./components/HomeSection";
import Contact from "./pages/Contact";
import Hero from "./pages/Hero";
import Purchase from "./pages/Purchase";

function App() {
  return (
    <>
      <div className="w-full relative z-50 ">
        <Navbar />
        {/* <NavbarWithMegaMenu /> */}
      </div>
      <div className="">
        {/* <HomeSection/> */}
        <Routes>
          <Route path="/" element={<HomeSection />} />
          <Route path="/all-games" element={<BuyPage />} />
          <Route path="/purchase" element={<Purchase />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<Hero />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;

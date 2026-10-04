import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/home/Home"; 
import Footer from "./components/Footer";
import Cake from "./pages/cake/Cake";
import Bakery from "./pages/bakery/Bakery";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Cookies from "./pages/cookies/Cookies";
import Cart from "./pages/cart/Cart";



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cakes" element={<Cake />} />
        <Route path="/bakery" element={<Bakery />} />
        <Route path="/about" element={<About />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
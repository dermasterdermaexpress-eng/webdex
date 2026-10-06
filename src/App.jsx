import Header from './components/Header';
import Footer from './components/Footer';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import ClinicLocation from './components/ClinicLocation';
import Promo from './components/Promo';
import Promodetail from './components/Promodetail';
import Blog from './components/Blog';
import Blogdetail from './components/Blogdetail';
import Product from "./components/Product";
import Productdetail from "./components/Productdetail";
import Galerry from "./components/Gallery";
import Treatment from "./components/Treatment";
import TreatmentDetail from "./components/TreatmentDetail"; // sesuaikan path
import ClinicDetail from "./components/ClinicDetail"; // sesuaikan path
   

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cliniclocation" element={<ClinicLocation />} />
        <Route path="/promo" element={<Promo />} />
        <Route path="/promo/:slug" element={<Promodetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogdetail/:slug" element={<Blogdetail />} />
        <Route path="/product" element={<Product />} />
        <Route path="/gallery" element={<Galerry />} />
        <Route path="/product/:slug" element={<Productdetail />} />
        <Route path="/treatment" element={<Treatment />} />
         <Route path="/treatment/:id" element={<TreatmentDetail />} />
        <Route path="/ClinicLocation/:id" element={<ClinicDetail />} /> 

      </Routes>

      <Footer />
    </>
  );
}

export default App;

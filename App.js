import './assets/visiteur/css/style2.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './pages/visiteur/home/Home.jsx';
import Footer from './component/Footer.jsx';
import Choose from './pages/visiteur/sign up/Choose.jsx';
import SignupDelivery from './pages/visiteur/sign up/SignupDelivery.jsx';
import SignupClient from './pages/visiteur/sign up/SignupClient.jsx';
import Product from './pages/visiteur/product/Product.jsx';
import Female from './pages/visiteur/product/Female.jsx';
import Male from './pages/visiteur/product/Male.jsx';
import Boy from './pages/visiteur/product/Boy.jsx';
import Girl from './pages/visiteur/product/Girl.jsx';
import Contact from './pages/visiteur/contact/Contact.jsx';
import Login from './pages/visiteur/login/Login.jsx';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/choose" element={<Choose />} />
          <Route path="/signupClient" element={<SignupClient />}/>
          <Route path="/products" element={<Product />} />
          <Route path="/women" element={<Female/>}/>
          <Route path="/men" element={<Male/>}/>
          <Route path="/kids-boy" element={<Boy/>}/>
          <Route path="/kids-girl" element={<Girl/>}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/logIn" element={<Login />} /> 
          {/* 
          
          
          
          {/* <Route path="/cart" element={<Cart />} /> 
          <Route path="/signupDelivery" element={<SignupDelivery />} />
          } />
          {/* 
          
           */}
        </Routes>
        <Footer/>
      </BrowserRouter>
       
     
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.scss';
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Login from './pages/login/Login';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Products from './pages/Products/Products';
import Product from './pages/Product/Product';

function App() {
  return (
    <div className="app">

    <BrowserRouter>
    <Navbar/>
    <Routes>
   
      <Route path = "/" element ={<Home/>}/>
      <Route path = "/login" element = {<Login/>}/>
      <Route path ="/products/:id" element={<Products/>}/>
      <Route path ="/product/:id" element={<Product/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;

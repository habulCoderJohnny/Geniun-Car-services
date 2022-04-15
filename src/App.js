import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import NotFound404 from './Pages/NotFound404/NotFound404';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Checkout from './Pages/Checkout/Checkout/Checkout';

function App() {
 
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetail/>}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/checkout' element={<RequireAuth><Checkout/></RequireAuth>}></Route>
        <Route path='*' element={<NotFound404/>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;









/* 
 url-1st variable declore :serviceId  hocca dynanmic data dekhabe 1st ServiceDetail name compo create korsi line no:17 (URL parameter) then go service.js


login Component
 rsc maro then App.js make Route and also check nav bar to  
 */
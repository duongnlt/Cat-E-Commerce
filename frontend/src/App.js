import './App.css';
import { Route, Router, Routes} from 'react-router-dom';
import { Home } from './pages/Home';
import { NavBar } from './components/NavBar';
import { BrowserRouter } from "react-router-dom";
import {ProductDetailPage} from './pages/ProductDetailPage'
import { LoginPage } from './pages/LoginPage';

function App() {
  return (
// <    <Router>
//       <Routes>
//         <Route path='/' element={Home}/>
//       </Routes>
//     </Router>>
      <div>

      <BrowserRouter>
      <NavBar/>
      <div className='container mt-4'>
        <Routes>
          <Route path='/' element={<Home/>} exact/>
          <Route path='/product' element={<ProductDetailPage/>} exact/>
          <Route path='/login' element={<LoginPage/>} exact/>
        </Routes>
      </div>
      {/* <Home/> */}
      </BrowserRouter>
      </div>
  );
}

export default App;

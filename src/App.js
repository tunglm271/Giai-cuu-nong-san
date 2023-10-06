// import logo from './logo.svg';
import { Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import './App.css';
import Navigation from './components/navigation.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home.js';
import Footer from './components/footer.js';
import News from './components/news.js';
import About from './components/about.js';
import Shop from './components/shop.js';
import Login from './components/login';


function App() {
  return (
    <>
       
      <Routes>
            <Route path="/" element={<Navigation />}>
                <Route path='' element={<Home/>}/>
                <Route path="shop" element={<Shop/>}/>
                <Route path="news" element={<News />} />
                <Route path="about" element={<About />} />
            </Route>
            <Route path='login' element={<Login />}></Route>
      </Routes>
    </>
  )
}

export default App;
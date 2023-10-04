// import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/navigation.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home.js';
import Footer from './components/footer.js';
import News from './components/news.js';
import About from './components/about.js';

function App() {
  return (
    <div className ="App">
            <Navigation />

            <Routes>

              <Route path="/" element={<Home />}></Route>
              <Route path="/Shop" ></Route>
              <Route path="/abc" ></Route>
              <Route path="/News" element={<News />}></Route>
              <Route path="/About_Us" element={<About />}></Route>
            </Routes>
            <Footer />
    </div>
  );
}

export default App;

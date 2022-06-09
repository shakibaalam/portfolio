
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <div>
      <NavBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact></Contact>} />
        </Routes>
      </NavBar>

    </div>
  );
}

export default App;

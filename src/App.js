import './App.css';
import { Routes, Route } from 'react-router-dom'
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Hobbies from './components/Hobbies';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/hobbies" element={<Hobbies/>} />
        <Route path="/" element={<Intro/>} />
      </Routes>
    </div>
  );
}

export default App;

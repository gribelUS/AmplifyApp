import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.js';
import Card from './Card.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>CS 230L</h1>
      <h2>Section - 02</h2>
      <p>WVU ID: 800394502</p>
      <p>Hi, I am Tiago.</p>
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default App;

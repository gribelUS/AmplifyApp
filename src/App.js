import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Card from './Card';

function App() {
  return (
    <div className="App">
      <div>
      <Navbar />
      <h1>CS 230L</h1>
      <h2>Section - 02</h2>
      <p>WVU ID: 800394502</p>
      <p>Hi, I am Tiago.</p>
      </div>
      <Card />
    </div>
  );
}

export default App;

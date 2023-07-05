
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    // <div className="App">
    // </div>
    <BrowserRouter>
    {/* <Navbar/> */}
    <Footer/>
    </BrowserRouter>
    
  );
}

export default App;

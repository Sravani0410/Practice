import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import ScreenSizeDisplay from './Components/withoutmediaquery/ScreenSizeDisplay.js.';
import ImageSlider from './Components/sliderimage/ImageSlider';
function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
    {/* <ScreenSizeDisplay/> */}
    <ImageSlider/>
    </div>
  );
}

export default App;

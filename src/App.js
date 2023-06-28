import React from 'react';
// import Home from './components/Home';
// import Navbar from './components/Navbar';
// import ReactDOM from 'react-dom/client';
import image1 from "./bg.jpg";
import image2 from "./about-bg.jpg";
import Header from './components/Header';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Values from "./components/Values"
import Form from "./components/Form";
import Footer from "./components/Footer";
import './App.css';

const images = [
  {
    id: 1,
    src: image1,
    alt: "THIS IS A PLACE WHERE TECHNOLOGY & CREATIVITY FUSED INTO DIGITAL CHEMISTRY"
  },
  {
    id: 2,
    src: image2,
    alt: "WE DON'T HAVE THE BEST BUT WE HAVE THE GREATES TEAM"
  }
];

function App() {
  return (
    <div>
      <Header /> 
      <div className="box">
        <Carousel useKeyboardArrows={true} autoPlay={true}>
          {images.map((image) => (
            <div className="slide">
              <img key={image.id} src={image.src} />
              <p className='legend'>{image.alt}</p>
            </div>
          ))}
        </Carousel>
    </div>
    <div className="box">
      <Values />
      <Form />
      <Footer />
    </div>
    </div>
  );
}

export default App;

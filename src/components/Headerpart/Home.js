import React from 'react';
import Ban1 from '../../Assets/banners/banner1.jpg';
import Ban2 from '../../Assets/banners/banner2.jpg';
import Ban3 from '../../Assets/banners/banner3.webp';

const Home = () => {
  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide sliders">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Ban1} className="d-block banners w-100 "  alt="slider1"/>
    </div>
    <div className="carousel-item">
      <img src={Ban2} className="d-block banners w-100 " alt="slider2"/>
    </div>
    <div className="carousel-item">
      <img src={Ban3} className="d-block banners w-100" alt="silder3"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </div>
  )
}

export default Home

import React from 'react';
import { Link } from 'react-router-dom';
import img_hero from '../../../assets/img/thumb/hero-section-illustration.svg';

const HeroSection = () => {
  return (
    <div className="row m-5">
      <div className="col-md-6 p-5">
        <div>
          <h1>Solusi terbaik untuk <br /><span className="text-danger">mengelola usaha</span><br /> kamu</h1>
        </div>
        <div className="mt-5">
          <div className="mb-2">
            <Link to="/Register" type="button" className="btn btn-danger rounded-pill w-50">Daftar Sekarang</Link>
          </div>
          <div>
            <button className="btn btn-default rounded-pill border-danger w-50">Pelajari Dulu!</button>
          </div>
        </div>
      </div>
      <div className="col-md-6 pt-4">
        <img src={img_hero} style={{width: "450px"}}></img>
      </div>
    </div>
  )
}

export default HeroSection;
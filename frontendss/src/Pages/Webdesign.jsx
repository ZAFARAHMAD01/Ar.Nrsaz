import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../Css/LogoDesign.css';
import { Link } from 'react-router-dom';

// Import images
import logo1 from '../Images/weblogo.png';
import logo2 from '../Images/weblogo2.png';
// import logo3 from '../Images/thumbnail3.png';
// import logo4 from '../Images/thumbnail4.png';
import logo5 from '../Images/posterdesign6.png';


function Webdesign() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

 const galleryImages = [
    {
      category: 'Online Examination System Using Blockchain and IPFS ',
      img: logo1,
      description: 'A online examination system most conducting exam online secure and safe Application with Database management.',
      link:'https://onine-exam.vercel.app/'
    },
    {
      category: 'eCommerce Websites',
      img: logo2,
      description: 'Create a unique brand product and sale online with responsive websites with most optimization and Free delivery and increase more bussiness products etc.',
      link:'https://medicalstore-eta.vercel.app/'

    },]
  return (
    <div className="logo-gallery-page">
      <h1 className="gallery-title" data-aos="fade-up">Gallery of WebDesign Templates</h1>

      <div className="container">
        <div className="row">
          {galleryImages.map((img, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={index} data-aos="zoom-in">
              <div className="service-card">
                <img src={img.img} alt={img.category} className="service-icon" />
              <h3>{img.category}</h3>
                <p>{img.description}</p>
                 <a href={img.link} target="_blank" rel="noopener noreferrer">
                        <button className='service-btn'>Visit Website</button>
                        </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Webdesign;

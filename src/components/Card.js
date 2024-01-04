import React from 'react';
import './Card.css'; // Include your CSS file if needed

function Card() {
  return (
    <div>
    <div className='main'>
    <div className="card">
      <div className="card-image"></div>
      <div className="category">EDUCATION</div>
      <div className="heading">
      Design remote and hybrid learning environments, empower teachers and students, and create more equitable educational opportunities.
        
      </div>
    </div>
    <div className="card">
      <div className="card-image2"></div>
      <div className="category">Healthcare</div>
      <div className="heading">
      Communicate across the continuum of care, meet patients where they are, and enable an agile, connected workforce.
        
      </div>
    </div>
    <div className="card">
      <div className="card-image1"></div>
      <div className="category">GOVERNMENT</div>
      <div className="heading">
      Improve access and information sharing, build stronger relationships, and better serve your constituents
        
      </div>
    </div>
    </div>
    <div className='main'>
    <div className="card">
      <div className="card-image4"></div>
      <div className="category">FINANCIAL SERVICES</div>
      <div className="heading">
      Secure communications and collaboration technology designed for a complex regulatory landscape.
        
      </div>
    </div>
    <div className="card">
      <div className="card-image3"></div>
      <div className="category">INDUSTRIAL SERVICES</div>
      <div className="heading">
      Reliably connect global staff, designers, factories, supply chains, and more to keep production moving.
        
      </div>
    </div>
    <div className="card">
      <div className="card-image5"></div>
      <div className="category">RETAIL</div>
      <div className="heading">
      Use video to reimagine e-commerce and unlock new revenue opportunities.
        
      </div>
    </div>
    </div>
    </div>
  );
}

export default Card;

import React from 'react';
import { Button } from 'react-bootstrap';
import './feeds2.css';
import { Link } from 'react-router-dom';

export default function Feed2() {
  return (
    <div className='wrapper'>
       <Card
        image="https://library.ucsd.edu/news-events/wp-content/uploads/2020/09/ae-logo.jpg"
        title="Access Engineering PLC"
        description="Access Engineering PLC is a Sri Lankan civil engineering company engaged in the construction industry and supply of construction-related services and materials."
      />
      <Card
        image="https://www.britishcouncil.lk/sites/default/files/5.jpg"
        title="Dialog Axiata PLC"
        description="Dialog Axiata PLC is a Sri Lankan telecommunications company providing mobile network and broadband services."
      />
      <Card
        image="https://bizenglish.adaderana.lk/wp-content/uploads/VirtusaLogo-Dec-11JPG6-1.jpg"
        title="Virtusa Corporation"
        description="Virtusa Corporation is an American information technology services company providing IT consulting, digital solutions, and outsourcing services."
      />
     
    </div>
  );
}

function Card({ image, title, description }) {
  return (
    <div className='card'>
      <div className='imagestyle'>
        <img src={image} alt="Card Image" />
      </div>
      <div className='content-section'>
        <h3 className={`card_title ${title.length > 25 ? 'card_title--small' : ''}`}>
          {title}
        </h3>
        <p
  className="card_description"
  style={{ fontSize: `${Math.max(18 - Math.floor(description.length / 50), 10)}px` }}
>
  {description}
</p>

      </div>
      <div className='button-section'>
        <Link to="/Company-details(application)">
          <Button className='card_btn'>View</Button>
        </Link>
      </div>
    </div>
  );
}

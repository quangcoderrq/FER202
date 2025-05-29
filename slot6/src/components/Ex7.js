import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CardItem = ({ backgroundColor, text, imageSrc }) => {
  return (
    <div className="col-md-4">
      <div className="card" style={{ backgroundColor }}>
        <div className="d-flex justify-content-center">
          <img 
            src={imageSrc} 
            className="card-img-top" 
            alt="Car" 
            style={{ 
              width: '80%',
              height: 'auto', 
              margin: '10px 20px 10px 10px',
            }} 
          />
        </div>
        <div className="card-body text-center">
          <p className="card-text">{text}</p>
        </div>
      </div>
    </div>
  );
};

const EX7 = () => {
  const cardData = [
    {
      backgroundColor: '#0d6efd',
      text: 'Some text inside the first card',
      imageSrc: 'https://image.plo.vn/w1000/Uploaded/2025/lcemdurlq/2023_08_22/chiem-nguong-10-chiec-xe-moi-ngoan-muc-duoc-tiet-lo-tai-tuan-le-xe-hoi-monterey-2023-mercedes-amg-gt-7877.jpg.webp',
    },
    {
      backgroundColor: '#ffc107',
      text: 'Some text inside the first card',
      imageSrc: 'https://image.plo.vn/w1000/Uploaded/2025/lcemdurlq/2023_08_22/chiem-nguong-10-chiec-xe-moi-ngoan-muc-duoc-tiet-lo-tai-tuan-le-xe-hoi-monterey-2023-mercedes-amg-gt-7877.jpg.webp',
    },
    {
      backgroundColor: '#dc3545', 
      text: 'Some text inside the first card',
      imageSrc: 'https://image.plo.vn/w1000/Uploaded/2025/lcemdurlq/2023_08_22/chiem-nguong-10-chiec-xe-moi-ngoan-muc-duoc-tiet-lo-tai-tuan-le-xe-hoi-monterey-2023-mercedes-amg-gt-7877.jpg.webp',
    },
  ];

  return (
    <div className="container my-4" >
      <h2 style={{ textAlign: 'left' }}>Cards Columns</h2>
      <div className="row">
        {cardData.map((card, index) => (
          <CardItem
            key={index}
            backgroundColor={card.backgroundColor}
            text={card.text}
            imageSrc={card.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default EX7;
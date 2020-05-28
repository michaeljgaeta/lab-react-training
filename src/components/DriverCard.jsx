import React from 'react';
import './CreditCard.css';

const DriverCard = (props) => {
  const { name, rating, img, car } = props;

  return (
    <div className="credit-card-container">
        <img src={img} alt="driver" />
        <div>
          <div>{name}</div>
          <div>{rating}</div>
          <div>{car.model}</div>
          <div>{car.licensePlate}</div>
        </div>
    </div>
  );
};

export default DriverCard;

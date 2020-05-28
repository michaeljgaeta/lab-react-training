import React from 'react';
import './CreditCard.css';

const CreditCard = (props) => {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;

  return (
    <div
      className="credit-card-container"
      style={{ BackgroundColor: `${bgColor}` }}
    >
      <div>{type}</div>
      <div>{number}</div>
      <div>
        Expires {expirationMonth}/{expirationYear} {bank}
      </div>
      <div>{owner}</div>
    </div>
  );
};

export default CreditCard;

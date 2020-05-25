import React from 'react';
import './IdCard.css';

const IdCard = (props) => {
  const { lastName, firstName, gender, height, birth, picture } = props;
  console.log(props.birth);

  return (
    <div className="id-card">
      <img src={picture} alt="person" />
      <div className="card-info">
        <p>
          <strong>First Name:</strong> {firstName}
        </p>
        <p>
          <strong>Last Name:</strong> {lastName}
        </p>
        <p>
          <strong>Gender:</strong> {gender}
        </p>
        <p>
          <strong>Height:</strong> {height}
        </p>
        <p>
          <strong>Birth:</strong> {birth.toLocaleString().slice(0, 9)}
        </p>
      </div>
    </div>
  );
};

export default IdCard;

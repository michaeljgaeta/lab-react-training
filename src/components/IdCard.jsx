import React from 'react';

const IdCard = (props) => {
  const { lastName, firstName, gender, height, birth, picture } = props;

  return (
    <div>
      <img src={picture} alt="person" />
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
        <strong>Birth:</strong> {birth.toString()}
      </p>
    </div>
  );
};

export default IdCard;

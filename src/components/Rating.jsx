import React from 'react';

const Rating = (props) => {
  const { children } = props;

  return (
    <div className="greetings-container">
      <p>Rating: {children}</p>
    </div>
  );
};

export default Rating;

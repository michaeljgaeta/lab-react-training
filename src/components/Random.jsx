import React from 'react';

const Random = (props) => {
  const { min, max } = props;

  return (
    <div className="greetings-container">
      <p>
        Random value between {min} and {max} =>
        {Math.floor(Math.random() * max)}
      </p>
    </div>
  );
};

export default Random;

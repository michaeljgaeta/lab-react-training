import React from 'react';
import './Greetings.css';

const Greetings = (props) => {
  const { lang, children } = props;
  let welcomeMessage;
  switch (lang) {
    case 'de':
      welcomeMessage = 'hallo';
      break;
    case 'fr':
      welcomeMessage = 'bonjour';
      break;
    case 'sp':
      welcomeMessage = 'hola';
      break;
    case 'en':
      welcomeMessage = 'hola';
      break;
    default:
      welcomeMessage = 'hello';
  }

  return (
    <div className="greetings-container">
      <p>
        {welcomeMessage}, {children}
      </p>
    </div>
  );
};

export default Greetings;

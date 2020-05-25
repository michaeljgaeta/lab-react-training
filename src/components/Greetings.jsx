import React from 'react';

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
    <div>
      <p>
        {welcomeMessage}, {children}
      </p>
    </div>
  );
};

export default Greetings;

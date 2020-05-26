import React from 'react';

class ClickablePicture extends React.Component {
  constructor() {
    super();

    this.state = {
      clicked: true,
    };
  }

  switchPicture = () => {
    this.setState({
      clicked: !this.state.clicked,
    });
  };

  render() {
    return (
      <div className="greetings-container">
        <button onClick={this.switchPicture}>
          <img
            src={
              (this.state.clicked && '/img/persons/maxence.png') ||
              '/img/persons/maxence-glasses.png'
            }
            alt="Maxence"
          />
        </button>
      </div>
    );
  }
}

export default ClickablePicture;

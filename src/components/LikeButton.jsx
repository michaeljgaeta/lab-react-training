import React from 'react';
import './LikeButton.css';

class LikeButton extends React.Component {
  constructor() {
    super();

    this.state = {
      liked: 0,
      color: 0,
    };
  }

  /*switch(color) {
    case: 'purple'
  }*/

  incrementLikes = () => {
    this.setState({
      liked: this.state.liked + 1,
      //color: this.state.color + 1
    });
  };

  render() {
    return (
      <div className="greetings-container">
        <button className="like-button" onClick={this.incrementLikes}>
          {this.state.liked} Likes
        </button>
      </div>
    );
  }
}

export default LikeButton;

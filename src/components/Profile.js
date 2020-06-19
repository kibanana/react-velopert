import React, { Component } from 'react';

class MyProfile extends Component {
  static defaultProps = {
    me: {
      name: 'KYW',
    },
  }

  render() {
    return (
      <div>
        안녕하세요. 제 이름은 <string>{this.props.me.name}</string> 입니다.
      </div>
    );
  }
}

export default MyProfile;

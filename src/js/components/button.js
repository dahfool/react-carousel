import React from 'react';

class Button extends React.Component {

    render () {
        return (
          <button onClick={this.props.setStatus.bind(null, this.props.direction)}>{this.props.direction}</button>
        );
    }

}

export default Button;
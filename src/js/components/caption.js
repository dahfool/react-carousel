import React from 'react';

class Caption extends React.Component {

    render () {
        if(!this.props.display) {
            return false;
        }

        return (
            <p>{this.props.text}</p>
        );
    }

}

export default Caption;
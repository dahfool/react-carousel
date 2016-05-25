import React from 'react';
import classNames from 'classnames';

class Image extends React.Component {
    
    render () {

        let imgClass = classNames({
            'hide': true,
            'show': this.props.status === this.props.data.id
        });

        return (
            <img alt={this.props.data.alt} className={imgClass} src={this.props.data.url} />
        );
    }
}

export default Image;
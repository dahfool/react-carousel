import React from 'react';
import classNames from 'classnames';

class Image extends React.Component {
    
    render () {

        let onClick, imgClass;

        imgClass = classNames({
            'hide': true,
            'show': this.props.status === this.props.data.id,
            'active': this.props.active === this.props.data.id
        });

        if(typeof this.props.click === "function") {
            onClick = this.props.click.bind(null, this.props.data.id)
        }

        return (
            <img alt={this.props.data.alt} 
                 className={imgClass} 
                 src={this.props.data.url}
                 onClick={onClick}
            />
        );
    }
}

export default Image;
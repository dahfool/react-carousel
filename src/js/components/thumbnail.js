import React from 'react';
import Image from './image';

class Thumbnails extends React.Component {
    render () {
        let that = this;

        if(!this.props.display) {
            return false;
        }
        return (
            <ul>
                {this.props.images.map(function (result) {
                    return (
                        <li key={result.id}>
                            <Image
                                data={result}
                                status={result.id}
                                click={that.props.show}
                                active={that.props.active}
                            >
                            </Image>
                        </li>
                    )
                })}
            </ul>
        );
    }
}

export default Thumbnails;
import React from 'react';
import Image from './image';

class CarouselImages extends React.Component {

    render () {
        let that = this;
        return (
            <ul>
                {this.props.images.map(function (result) {
                    return (
                        <li key={result.id}>
                            <Image
                                data={result}
                                status={that.props.status}
                                >
                            </Image>
                        </li>
                    )
                })}
            </ul>
        );
    }

}

export default CarouselImages;
import React from 'react';
import Image from './image';

class CarouselImages extends React.Component {

    render () {
        let that = this;
        return (
            <div>
                {this.props.images.map(function (result) {
                    return (
                        <Image
                            key={result.id}
                            data={result}
                            status={that.props.status}
                        />
                    )
                })}
            </div>
        );
    }

}

export default CarouselImages;
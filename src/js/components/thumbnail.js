import React from 'react';
import Image from './image';

class Thumbnails extends React.Component {
    render () {
        let that = this;
        return (
            <div>
                {this.props.images.map(function (result) {
                    return (
                        <Image
                            key={result.id}
                            data={result}
                            status={result.id}
                            click={that.props.show}
                        />
                    )
                })}
            </div>
        );
    }
}

export default Thumbnails;
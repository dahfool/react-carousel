import React from 'react';
import CarouselImages from './carouselImages';
import Button from './button';
import Data from '../data/data';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {active : 1};
        this._nextImage = this._nextImage.bind(this);
    }


    _nextImage (item) {

        if((item === "right") && (this.state.active !== Data.images.length) ) {
            this.setState({active: this.state.active + 1});
        } else if((this.state.active !== 1) && (item === "left")) {
            this.setState({active: this.state.active - 1});
        }
    }


    render () {
        return (
            <div>
                <CarouselImages images={Data.images} status={this.state.active}/>
                <Button direction="left" setStatus={this._nextImage}/>
                <Button direction="right" setStatus={this._nextImage}/>
            </div>
        );
    }
}

export default Carousel;
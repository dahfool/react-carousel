import React from 'react';
import CarouselImages from './carouselImages';
import Button from './button';
import Data from '../data/data';
import Caption from './caption';
import Thumbnails from './thumbnail';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {active : 1};
        this._nextImage = this._nextImage.bind(this);
        this._getCurrentCaption = this._getCurrentCaption.bind(this);
        this._showImage = this._showImage.bind(this);
    }


    _nextImage (item) {

        if((item === "right") && (this.state.active !== Data.images.length) ) {
            this.setState({active: this.state.active + 1});
        } else if((this.state.active !== 1) && (item === "left")) {
            this.setState({active: this.state.active - 1});
        }
    }

    _getCurrentCaption (active) {
        return Data.images[active-1].caption;
    }

    _showImage(id) {
        this.setState({active: id});
    }


    render () {

        return (
            <div>
                <CarouselImages images={Data.images} status={this.state.active} show={this._showImage}/>
                <Thumbnails images={Data.thumbnails} show={this._showImage} />
                <Caption text={this._getCurrentCaption (this.state.active)} display={this.props.caption} />
                <Button direction="left" setStatus={this._nextImage}/>
                <Button direction="right" setStatus={this._nextImage}/>
            </div>
        );
    }
}

export default Carousel;
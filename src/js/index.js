import React from 'react';
import {render} from 'react-dom';
import Carousel from './components/carousel';

render(
    <Carousel caption={true} />,
    document.getElementById('carousel')
);

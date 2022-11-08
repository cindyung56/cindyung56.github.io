import React from 'react';
import { Parallax } from 'react-parallax';
import blossomImg from '../../images/blossom-from-unsplash.jpg'
import './style.css';

export default function Home() {
    return(
    <Parallax blur={10} bgImage={blossomImg} bgImageAlt={'blossoming flowers'} id="home">
        
    </Parallax>)
}
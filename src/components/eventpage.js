import React from 'react';
import '../event/Tjejfika.css';

import tjejfika1 from '../images/Tjejpub.jpg';

import ImageFeed from './ImageFeed';
import {useLocation} from "react-router-dom";

// send props to function 
export default function EventPage() {
    let data = useLocation();
    return (
        <div>
            <img className="tjejfikaImg" src={data.state.img} />
        </div>
    )
}

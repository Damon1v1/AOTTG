import {React} from "react";
import './Banner.css';
import banner from './Cover.jpg';

function Banner() {
    return (
        <div id="bannerSpace">
            <img id="banner" src={banner} alt="Attack on Titan Tribute Game 2" />
        </div>
    );
};

export default Banner;
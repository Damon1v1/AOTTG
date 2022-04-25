import { React } from 'react';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import './Home.css';

function Home() {
    return (
        <div>
            <div>
                <Header />
            </div>

            <div>
                <Banner />
            </div>

            <div>
                <h1 className='mission'>STRIVING TO CONTINUE AN INDIE GAME KNOWN AS THE ATTACK ON TITAN TRIBUTE GAME</h1>
            </div>
        </div>
            
    );
};


export default Home;
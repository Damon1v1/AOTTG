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
        </div>
            
    );
};


export default Home;
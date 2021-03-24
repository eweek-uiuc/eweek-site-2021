import React, {Component} from 'react';

import About from './components/About.jsx';
import Sponsors from './components/Sponsors.jsx';
import Logo from '../../assets/logo_white.png';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="start">
                    <img className="start__logo" src={Logo} alt="logo"/>
                    <div className="start__dates">{"April 19th - 23rd, 2021"}</div>
                </div>
                <About/>
                <Sponsors/>
            </div>
        );
    }
}

export default Home;
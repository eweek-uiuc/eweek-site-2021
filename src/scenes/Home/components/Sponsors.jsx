import React, {Component} from 'react';

import Motorola from '../../../assets/sponsors/motorola.jpeg';


class Sponsors extends Component {
    render() {
        return (
            <div className="sponsors">
                <span className="sponsors__title">OUR SPONSOR</span>
                <p>
                    E-Week 2021 is proudly sponsored by Motorola.
                    Their support is integral to the success of this event and our committee's goals.
                </p>
                <p>
                    If you company is interested in sponsoring E-Week at Illinois,
                    please contact EC Corporate Committee at <u>corporate@ec.illinois.edu</u>
                </p>
                <ul className="sponsors__list">
                    <a className="sponsors__logo" href="https://www.harting.com/" target="_blank" rel="noopener noreferrer"><img src={Motorola} alt="a"/></a>
                </ul>
            </div>
        );
    }
}

export default Sponsors;
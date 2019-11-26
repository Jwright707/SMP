import React, {Component} from 'react';
import logo from '../../assets/images/logo.svg'

export default class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <div className="logo-container">
                        <img className="smp-logo" src={logo} alt='smp-logo'></img>
                        <div className="logo-name-container">
                            <span className="color-red">SMP</span>
                            <span className="color-grey">-</span>
                            <span className="color-blue">IITR</span>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}
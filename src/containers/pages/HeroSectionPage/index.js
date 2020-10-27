import React, { Component } from 'react';
import HeroSection from '../../../components/molecules/HeroSection';

class HeroSectionPage extends Component {
    render(){
        return (
            <div className="container-fluid px-5">
                <HeroSection />
            </div>
        )
    }
}

export default HeroSectionPage;
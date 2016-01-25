import React from 'react';

// components
import Header from '../app/Header.jsx';
import Landing from './Landing.jsx';
import About from './About.jsx';
import Portfolio from './Portfolio.jsx';
import Team from './Team.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';

var styles = {
    image: {
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -100,
        maxWidth: '100%',
        height: 'auto'
    }
};

const Home = React.createClass({

    render () {
        return (
            <div>
                {/* background image */}
                <img style={styles.image} src="assets/images/beaver_creek2.jpg" alt="" />

                <Header/>
                <Landing/>
                <About/>
                <Portfolio/>
                <Team/>
                <Contact/>
                <Footer/>
            </div>
        );
    }
});

export default Home;

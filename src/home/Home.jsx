import React from "react";

// components
import Header from "../app/Header.jsx";
import Landing from "./Landing.jsx";
import About from "./About.jsx";
import Portfolio from "./Portfolio.jsx";
import Team from "./Team.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";

var styles = {
    image: {
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -100,
        maxWidth: "100%",
        height: "auto"
    }
};

const Home = React.createClass({

    render () {
        var headerItems = [
            { label: "About", key: "about" },
            { label: "Portfolio", key: "portfolio" },
            { label: "Team", key: "team" },
            { label: "Contact", key: "contact" }
        ];
        return (
            <div>
                {/* background image */}
                <img style={styles.image} src="images/beaver_creek3.png" alt="" />

                <Header items={headerItems}/>
                <Landing/>
                <About id="about"/>
                <Portfolio id="portfolio"/>
                <Team id="team"/>
                <Contact id="contact"/>
                <Footer/>
            </div>
        );
    }
});

export default Home;

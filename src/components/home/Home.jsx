import React from "react";

// components
import Header from "./header/Header.jsx";
import Landing from "./landing/Landing.jsx";
import Process from "./process/Process.jsx";
import Portfolio from "./portfolio/Portfolio.jsx";
import About from "./about/About.jsx";
import Contact from "./contact/Contact.jsx";
import Footer from "./footer/Footer.jsx";

const Home = React.createClass({

    render () {
        var headerItems = [
            { label: "Home", key: "home" },
            { label: "Process", key: "process" },
            { label: "Portfolio", key: "portfolio" },
            { label: "About", key: "about" },
            { label: "Contact", key: "contact" }
        ];
        return (
            <div>
                <Header items={headerItems}/>
                <Landing id="home"/>
                <Process id="process"/>
                <Portfolio id="portfolio"/>
                <About id="about"/>
                <Contact id="contact"/>
                <Footer/>
            </div>
        );
    }
});

export default Home;

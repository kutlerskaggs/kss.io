import React from "react";

// components
import Header from "../app/Header.jsx";
import Landing from "./Landing.jsx";
import Process from "./Process.jsx";
import Portfolio from "./Portfolio.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";

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

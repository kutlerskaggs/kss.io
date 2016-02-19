/* global describe, it */

import React from "react";
import expect from "expect";
import {createRenderer} from "react-addons-test-utils";
import expectJSX from "expect-jsx";
expect.extend(expectJSX);


import Home from "./Home.jsx";
//import Header from "./header/Header.jsx";
import Landing from "./landing/Landing.jsx";
/*import Process from "./process/Process.jsx";
import Portfolio from "./portfolio/Portfolio.jsx";
import About from "./about/About.jsx";
import Contact from "./contact/Contact.jsx";
import Footer from "./footer/Footer.jsx";*/

describe("Home", () => {
    it("renders correctly", () => {
        let renderer = createRenderer();
        renderer.render(<Home/>);
        let actualElement = renderer.getRenderOutput();
        /*let expectedElement = <div>
            <Header items={[]}/>
            <Landing id="home"/>
            <Process id="process"/>
            <Portfolio id="portfolio"/>
            <About id="about"/>
            <Contact id="contact"/>
            <Footer/>
        </div>;*/
        expect(actualElement.props.children[1]).toEqualJSX(<Landing id="home"/>);
    });
});

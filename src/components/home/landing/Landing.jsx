/* global cssInJS, palette */

import React from "react";
import theaterJS from "theaterjs";
import "./landing.css";

// static styling
let classes = cssInJS({
    main: {
        color: palette.accent1Color
    },
    greeting: {
        minHeight: 500,
        maxWidth: 600,
        display: "inline-block",
        fontSize: "6rem",
        textAlign: "top !important",
        "@media (max-width: 991px)": {
            fontSize: "5rem",
            minHeight: 400
        },
        "@media (max-width: 500px)": {
            fontSize: "4rem",
            minHeight: 300
        },
        "@media (max-width: 400px)": {
            fontSize: "3rem",
            minHeight: 200
        }
    }
});

// dynamic styling
let styles = { main: {} };


let Portfolio = React.createClass({

    componentWillMount() {
        // fill 90% of page height
        styles.main.height = Math.round(window.innerHeight * .9);
    },

    componentDidMount() {
        // setup theater.js
        theaterJS()
            .addActor("landing", { speed: 1, accuracy: 0.8 })
            .addScene("landing:", 1000, "PROBLEM<br/>SOLVING<br/>WITH<br/>LOGIC", 1000, -5, "INNOVATION", 1300, -10, "TENACITY", 1500, -8, "SOFTWARE");
    },

    render() {
        return (
            <div className="container-fluid">
                <div id={this.props.id} style={styles.main} className={`${classes.main} row middle-xs`}>
                    <div className="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
                        <h2 className={classes.greeting}><span id="landing" className="landing-theater-cursor"></span></h2>
                    </div>
                </div>
            </div>
        );
    }
});

export default Portfolio;

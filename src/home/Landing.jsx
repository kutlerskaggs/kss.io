import React from "react";
import Radium from "radium";
import theaterJS from "theaterjs";

let styles = {
    main: {

    },
    greeting: {
        minHeight: 240,
        display: "inline-block"
    }
};

let Portfolio = React.createClass({

    contextTypes: {
        muiTheme: React.PropTypes.object
    },

    componentWillMount() {
        var muiTheme = this.context.muiTheme.rawTheme;
        styles.main.color = muiTheme.palette.accent1Color;
        styles.main.minHeight = window.innerHeight * .9;
    },

    componentDidMount() {
        // setup typed.js
        var theater = theaterJS(),
            greeting = window.innerWidth <= 414 ? "PROBLEM<br/>SOLVING<br/>WITH<br/>LOGIC" : "PROBLEM SOLVING WITH LOGIC";
        theater
            .addActor("landing", { speed: 1, accuracy: 0.8 })
            .addScene("landing:", 1000, greeting, 1000, -5, "INNOVATION", 1300, -10, "TENACITY", 1500, -8, "SOFTWARE");
    },

    render() {
        return (
            <div className="container-fluid">
                <div className="row middle-xs" style={styles.main}>
                    <div className="col-xs-12 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2">
                        <h2 style={styles.greeting}><span id="landing" className="theater-cursor"></span></h2>
                    </div>
                </div>
            </div>
        );
    }

});

export default Radium(Portfolio);

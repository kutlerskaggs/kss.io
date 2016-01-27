import React from "react";
import Radium from "radium";
import theaterJS from "theaterjs";

let styles = {
    main: {
        paddingBottom: 64
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
        var theater = theaterJS();
        theater
            .addActor("landing", { speed: 1, accuracy: 0.8 })
            .addScene("landing:", 1000, "PROBLEM SOLVING WITH LOGIC", 1000, -5, "INNOVATION", 1300, -10, "TENACITY", 1500, -8, "SOFTWARE");
    },

    render() {
        return (
            <div className="row middle-xs" style={styles.main}>
                <div className="col-xs-12 col-sm-8 col-sm-offset-2">
                    <h3>$&nbsp;<span id="landing" className="theater-cursor"></span></h3>
                </div>
            </div>
        );
    }

});

export default Radium(Portfolio);

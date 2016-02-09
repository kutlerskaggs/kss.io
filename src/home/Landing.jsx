import React from "react";
import Radium from "radium";
import theaterJS from "theaterjs";

let styles = {
    main: {

    },
    greeting: {
        minHeight: 500,
        maxWidth: 600,
        display: "inline-block",
        fontSize: "6rem",
        textAlign: "top",
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
            .addScene("landing:", 1000, "PROBLEM<br/>SOLVING<br/>WITH<br/>LOGIC", 1000, -5, "INNOVATION", 1300, -10, "TENACITY", 1500, -8, "SOFTWARE");
    },

    render() {
        return (
            <div className="container-fluid">
                <div id={this.props.id} className="row middle-xs" style={styles.main}>
                    <div className="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
                        <h2 style={styles.greeting}><span id="landing" className="theater-cursor"></span></h2>
                    </div>
                </div>
            </div>
        );
    }

});

export default Radium(Portfolio);

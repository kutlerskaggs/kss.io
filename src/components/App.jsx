/* global cssInJS */

import React from "react";
import WindowMixin from "../mixins/window.jsx";

// root component and global styles
import Home from "./home/Home.jsx";
import "../styles/styles.jsx";

// Material-UI
import ThemeManager from "material-ui/lib/styles/theme-manager";
import RawMuiTheme from "../styles/theme"; // material ui theme
import injectTapEventPlugin from "react-tap-event-plugin"; // temporary material-ui dependency
injectTapEventPlugin();

/* TODO this isn't being picked up when a change is made to component in /home */
/* TODO figure out the issue and submit a PR to fix it */
let classes = cssInJS({
    background: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: -100,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "cover"
    }
});// comments

export default React.createClass({

    mixins: [WindowMixin],

    childContextTypes : {
        muiTheme: React.PropTypes.object
    },

    componentDidMount() {
        let suffix = this.state.window.isMobile ? "_mobile" : this.state.window.isTablet ? "_tablet" : "";
        this.setState({
            styles: {
                background: {
                    backgroundImage: `url('../../images/beaver_creek${suffix}.jpg')`,
                    height: `${window.innerHeight + 60}px`
                }
            }
        });
    },

    getChildContext() {
        return {
            muiTheme: ThemeManager.getMuiTheme(RawMuiTheme)
        };
    },

    getInitialState() {
        return {
            styles: {
                background: {}
            }
        };
    },

    render () {
        return (
            <div>
                <div className={classes.background} style={this.state.styles.background}></div>
                <Home/>
            </div>
        );
    }
});

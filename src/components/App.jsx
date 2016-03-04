/* global cssInJS */

import React from "react";
import WindowMixin from "../mixins/window";

// root component and global styles
import Home from "./home/Home.jsx";
import "../styles/styles.jsx";

// Material-UI
import ThemeManager from "material-ui/lib/styles/theme-manager";
import RawMuiTheme from "../styles/theme"; // material ui theme
import injectTapEventPlugin from "react-tap-event-plugin"; // temporary material-ui dependency
injectTapEventPlugin();


let classes = cssInJS({
    background: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        //zIndex: -100,
        transform: "translateZ(0)",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "cover"
    }
});

export default React.createClass({

    mixins: [WindowMixin],

    childContextTypes : {
        muiTheme: React.PropTypes.object
    },

    componentDidMount() {
        let windowState = this.state.window,
            suffix = windowState.isMobile ? "_mobile" : windowState.isTablet ? "_tablet" : windowState.isHighRes ? "_big" : "";
        this.setState({
            styles: {
                background: {
                    backgroundImage: `url('../../images/beaver_creek${suffix}.jpg')`,
                    height: `${window.innerHeight + 120}px`
                }
            }
        });

        // fix issue on IE11 with jittery background image scrolling
        if(navigator.userAgent.match(/Trident\/7\./)) {
            document.addEventListener("mousewheel", this.scrollIE);
        }
    },

    componentWillUnmount() {
        if(navigator.userAgent.match(/Trident\/7\./)) {
            document.removeEventListener("mousewheel", this.scrollIE);
        }
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
                <Home />
            </div>
        );
    },

    scrollIE(e) {
        e.preventDefault();

        let wheelDelta = e.wheelDelta,
            currentScrollPosition = window.pageYOffset;
        window.scrollTo(0, currentScrollPosition - wheelDelta);
    }
});

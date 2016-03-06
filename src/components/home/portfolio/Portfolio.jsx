/* global cssInJS, palette */

import React from "react";
import WindowMixin from "../../../mixins/window";


// static classes
let classes = cssInJS({
    company: {
        margin: "1rem 0px 2rem 0px"
    },
    businessIntelligence: {
        display: "flex",
        textAlign: "left"
    },
    contentWrapper: {
        position: "relative",
        zIndex: 100
    },
    database: {
        width: "80%",
        height: "auto",
        "@media(max-width: 991px)": {
            display: "none"
        }
    },
    databaseWrapper: {
        display: "flex"
    },
    iphone: {
        width: "60%",
        height: "auto",
        transform: "translateY(250px)",
        "@media(max-width: 991px)": {
            display: "none"
        }
    },
    iphoneWrapper: {
        display: "flex",
        textAlign: "center"
    },
    main: {
        color: palette.textColor,
        paddingTop: 50,
        paddingBottom: 50
    },
    macbook: {
        width: "100%",
        height: "auto",
        transform: "translateY(250px)",
        "@media(max-width: 991px)": {
            transform: "translateY(0px)"
        }
    },
    macbookWrapper: {
        display: "flex"
    },
    text: {
        lineHeight: "30px"
    },
    webApp: {
        textAlign: "left",
        paddingLeft: "3rem !important",
        "@media(max-width: 991px)": {
            paddingLeft: "1rem !important"
        }
    }
});

let Portfolio = React.createClass({

    mixins: [WindowMixin],

    componentDidMount() {

        let _window = this.state.window,
            iphoneWrapperEl = document.getElementById("iphoneWrapper"),
            macbookWrapperEl = document.getElementById("macbookWrapper"),
            iphoneEl = document.getElementById("iphone"),
            macbookEl = document.getElementById("macbook");

        if(!_window.isMobile && !_window.isTablet) {

            // slide macbook and iphone up
            window.addEventListener("scroll", () => {

                let iphoneTop = iphoneWrapperEl.getBoundingClientRect().top,
                    macbookTop = macbookWrapperEl.getBoundingClientRect().top,
                    height = window.innerHeight,
                    iphoneDiff = 449 + (iphoneTop - height)/1.5,
                    macbookDiff = 449 + (macbookTop - height)/1.5;

                iphoneDiff = Math.min(Math.max(iphoneDiff, 0), 250);
                macbookDiff = Math.min(Math.max(macbookDiff, 0), 250);
                iphoneEl.style.transform = "translateY(" + iphoneDiff + "px)";
                macbookEl.style.transform = "translateY(" + macbookDiff + "px)";
            });
        } else {
            if(iphoneEl) {
                iphoneEl.style.transform = "translateY(0px)";
            }
            macbookEl.style.transform = "translateY(0px)";
        }
    },

    render() {

        let iphone,
            cubes,
            _window = this.state.window;

        if(!_window.isMobile && !_window.isTablet) {
            iphone = (
                <div id="iphoneWrapper" className={`col-xs-12 col-md-4 middle-xs ${classes.iphoneWrapper}`}>
                    <div>
                        <img id="iphone" src="images/iphone.png" className={classes.iphone}></img>
                    </div>
                </div>
            );
            cubes = (
                <div className={`middle-md center-md col-xs-12 col-md-4 ${classes.databaseWrapper}`}>
                    <img src="images/cubes.png" className={classes.database}></img>
                </div>
            );
        }

        return (
            <div id={this.props.id} className={`${classes.main} container-fluid`}>

                <div className="row center-xs">
                    <h1>PORTFOLIO</h1>
                </div>

                <div className={`row start-xs center-sm start-md ${classes.contentWrapper}`}>

                    <div className={`col-xs-12 col-sm-8 col-md-4 ${classes.webApp}`}>
                        <h3 className={classes.company}>Westmoreland Coal Co.</h3>
                        <h3 className="amatic">Web Application</h3>
                        <h6 className={classes.text}>
                            <p>We had the opportunity to build an enterprise web app for Westmoreland that has enabled management to keep a closer eye on their Key Performance Indicators.</p>
                            Features:
                            <ul>
                                <li>Fully Responsive</li>
                                <li>Real Time ERP Data</li>
                                <li>Two Factor Auth</li>
                                <li>End to End JavaScript</li>
                                <li>SMS</li>
                                <li>Email</li>
                                <li>Amazon Web Services</li>
                            </ul>
                        </h6>
                    </div>

                    <div id="macbookWrapper" className={`col-xs-12 col-md-8 middle-xs ${classes.macbookWrapper}`}>
                        <div>
                            <img id="macbook" src={`images/macbook${_window.isMobile ? "_mobile" : ""}.png`} className={classes.macbook}></img>
                        </div>
                    </div>

                    {iphone}

                    <div className={`middle-xs col-xs-12 col-sm-8 col-md-4 ${classes.businessIntelligence}`}>
                        <div>
                            <h3 className="amatic">Business Intelligence</h3>
                            <h6 className={classes.text}>
                                <p>Additionally, we were given the chance to build a complete business intelligence platform which aggregates data from three disparate ERP systems located throughout North America.</p>
                                <p>This setup allows for wide visibility and deep analysis of the company's operations which would otherwise be very cumbersome.</p>
                            </h6>
                        </div>
                    </div>

                    {cubes}

                </div>
            </div>
        );
    }

});

export default Portfolio;

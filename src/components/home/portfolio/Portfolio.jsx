/* global cssInJS, palette */

import React from "react";

/* TODO iphone/cube showing on iPhone 4....? */

// static classes
let classes = cssInJS({
    company: {
        margin: "1rem 0px 2rem 0px"
    },
    businessIntelligence: {
        display: "flex",
        textAlign: "start"
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
        textAlign: "start",
        paddingLeft: "3rem !important",
        "@media(max-width: 991px)": {
            paddingLeft: "1rem !important"
        }
    }
});

let Portfolio = React.createClass({

    componentDidMount() {

        let iphoneWrapperEl = document.getElementById("iphoneWrapper"),
            macbookWrapperEl = document.getElementById("macbookWrapper"),
            iphoneEl = document.getElementById("iphone"),
            macbookEl = document.getElementById("macbook");

        if(window.innerWidth > 991) {

            // slide macbook and iphone up
            window.addEventListener("scroll", () => {

                let iphoneTop = iphoneWrapperEl.getBoundingClientRect().top,
                    macbookTop = macbookWrapperEl.getBoundingClientRect().top,
                    height = window.innerHeight,
                    iphoneDiff = 449 + iphoneTop - height,
                    macbookDiff = 449 + macbookTop - height;

                iphoneDiff = Math.min(Math.max(iphoneDiff, 0), 250);
                macbookDiff = Math.min(Math.max(macbookDiff, 0), 250);
                iphoneEl.style.transform = "translateY(" + iphoneDiff + "px)";
                macbookEl.style.transform = "translateY(" + macbookDiff + "px)";
            });
        } else {
            iphoneEl.style.transform = "translateY(0px)";
            macbookEl.style.transform = "translateY(0px)";
        }
    },

    render() {
        return (
            <div id={this.props.id} className={classes.main + " container-fluid"}>
                <div className="row center-xs">
                    <h1>PORTFOLIO</h1>
                </div>

                <div className="row start-xs center-sm start-md">
                    <div className={"col-xs-12 col-sm-8 col-md-4 " + classes.webApp}>
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
                                <li>Amazon Web Services Hosting</li>
                            </ul>
                        </h6>
                    </div>

                    <div id="macbookWrapper" className={["col-xs-12 col-md-8 middle-xs", classes.macbookWrapper].join(" ")}>
                        <div>
                            <img id="macbook" src="images/macbook.png" className={classes.macbook}></img>
                        </div>
                    </div>
                    <div id="iphoneWrapper" className={["col-xs-12 col-md-4 middle-xs", classes.iphoneWrapper].join(" ")}>
                        <div>
                            <img id="iphone" src="images/iphone.png" className={classes.iphone}></img>
                        </div>
                    </div>
                    <div className={["middle-xs col-xs-12 col-sm-8 col-md-4", classes.businessIntelligence].join(" ")}>
                        <div>
                            <h3 className="amatic">Business Intelligence</h3>
                            <h6 className={classes.text}>
                                <p>Additionally, we were given the chance to build a complete business intelligence platform which aggregates data from three disparate ERP systems located throughout North America.</p>
                                <p>This setup allows for wide visibility and deep analysis of the company's operations which would otherwise be very cumbersome.</p>
                            </h6>
                        </div>
                    </div>
                    <div className={["middle-md center-md col-xs-12 col-md-4", classes.databaseWrapper].join(" ")}>
                        <img src="images/cubes.png" className={classes.database}></img>
                    </div>
                </div>
            </div>
        );
    }

});

export default Portfolio;

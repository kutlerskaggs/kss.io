import React from "react";
import Radium from "radium";

let styles = {
    amatic: {
        fontFamily: "Amatic SC"
    },
    company: {
        margin: "1rem 0px 2rem 0px"
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
        textAlign: "center"
    },
    main: {
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
    text: {
        lineHeight: "30px"
    },
    webApp: {
        paddingLeft: "3rem",
        "@media(max-width: 991px)": {
            paddingLeft: "1rem"
        }
    }
};

let Portfolio = React.createClass({

    contextTypes: {
        muiTheme: React.PropTypes.object
    },

    componentWillMount() {
        var muiTheme = this.context.muiTheme.rawTheme;
        styles.main.color = muiTheme.palette.textColor;
    },

    componentDidMount() {

        if(window.innerWidth > 991) {
            var iphoneWrapperEl = document.getElementById("iphoneWrapper"),
                macbookWrapperEl = document.getElementById("macbookWrapper"),
                iphoneEl = document.getElementById("iphone"),
                macbookEl = document.getElementById("macbook");

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
        }
    },

    render() {
        return (
            <div id={this.props.id} style={styles.main} className="container-fluid">
                <div className="row center-xs">
                    <h1>PORTFOLIO</h1>
                </div>

                <div className="row">
                    {/* Add col-sm-offset-2 col-sm-8 col-md-offset-0 after hearing back on flexboxgrid issue opened */}
                    <div style={styles.webApp} className="col-lg-offset-0 col-xs-12 col-md-4">
                        <h3 style={styles.company}>Westmoreland Coal Co.</h3>
                        <h3 style={styles.amatic}>Web Application</h3>
                        <h6 style={styles.text}>
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

                    <div id="macbookWrapper" className="col-xs-12 col-md-8">
                        <img id="macbook" src="images/macbook.png" style={styles.macbook}></img>
                    </div>
                    <div id="iphoneWrapper" style={styles.iphoneWrapper} className="col-xs-12 col-md-4">
                        <img id="iphone" src="images/iphone.png" style={styles.iphone}></img>
                    </div>
                    {/* Add col-sm-offset-2 col-sm-8 col-md-offset-0 after hearing back on flexboxgrid issue opened */}
                    <div className="flex middle-xs col-xs-12 col-md-4">
                        <div>
                            <h3 style={styles.amatic}>Business Intelligence</h3>
                            <h6 style={styles.text}>
                                <p>Additionally, we were given the chance to build a complete business intelligence platform which aggregates data from three disparate ERP systems located throughout North America.</p>
                                <p>This setup allows for wide visibility and deep analysis of the company's operations which would otherwise be very cumbersome.</p>
                            </h6>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-4">

                    </div>
                </div>
            </div>
        );
    }

});

export default Radium(Portfolio);

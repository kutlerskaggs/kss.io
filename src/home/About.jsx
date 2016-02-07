import React from "react";
import Radium from "radium";
import AtvImg from "react-atv-img";

let styles = {
    amatic: {
        fontFamily: "Amatic SC"
    },
    image: {
        width: "300px",
        height: "300px",
        borderRadius: 5,
        margin: "1.68rem 0 2.1rem 0"
    },
    main: {
        padding: "50px 0px"
    },
    offScreen: {
        body: {
            textAlign: "initial",
            maxWidth: 600
        },
        wrapper: {
            transform: "translate(100%)",
            backgroundColor: "#fff",
            transition: "transform 500ms",
            WebkitTransition: "transform 500ms",
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }
    },
    wrapper: {

    },
    outerWrapper: {
        position: "relative",
        overflow: "hidden"
    }
};

function toggleUser(member) {
    let el = document.getElementById("offScreen"),
        members = {
            B: {
                name: "Ben Schnelle",
                image: "images/B.png",
                body1: "Originally a CPA, I ended up in tech by combining 1 part curiosity with 1 part necessity.",
                body2: "Having been born with an extreme distaste for inefficiency and finding it everywhere in the business world I began exploring ways to address this internal conflict.",
                body3: "Ultimately I discovered software and have been intoxicated by the endless possibilities ever since.",
                body4: "I don't actually talk like this; more along the lines of a crude monkey."
            },
            T: {
                name: "Tasha Moreno",
                image: "images/T.png",
                body1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                body2: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                body3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                body4: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            C: {
                name: "Chris Ludden",
                image: "images/C.png",
                body1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                body2: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                body3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                body4: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
        };

    if(el.style.transform) {
        this.setState({ currentMember: members[member] });
        el.style.transform = "";
    } else {
        el.style.transform = "translate(100%)";
    }
}

let Team = React.createClass ({

    contextTypes: {
        muiTheme: React.PropTypes.object
    },

    componentWillMount() {
        var muiTheme = this.context.muiTheme.rawTheme;
        styles.wrapper.backgroundColor = muiTheme.palette.accent2Color;
        styles.main.color = muiTheme.palette.textColor;
        styles.offScreen.body.color = muiTheme.palette.alternateTextColor;
    },

    getInitialState() {
        return {
            currentMember: {}
        };
    },

    render() {
        return (
            <div style={styles.outerWrapper}>
                <div className="container-fluid" style={styles.wrapper}>
                    <div id={this.props.id} className="row center-xs" style={styles.main}>

                        <div className="col-xs-12 col-sm-10">
                            <h1>WHO?</h1>
                            <h3 style={styles.amatic} className="thin">We're an unusual group of cool cats.</h3>
                        </div>

                        <div className="flex center-xs end-md col-xs-12 col-md-4">
                            <a className="pointer" onClick={toggleUser.bind(this, "B")}>
                                <AtvImg
                                    layers={[
                                        "images/Bcloseup.png"
                                    ]}
                                    isStatic={false}
                                    style={styles.image}
                                />
                            </a>
                        </div>

                        <div className="flex center-xs col-xs-12 col-md-4">
                            <a className="pointer" onClick={toggleUser.bind(this, "T")}>
                                <AtvImg
                                    layers={[
                                        "images/Tcloseup.png"
                                    ]}
                                    isStatic={false}
                                    style={styles.image}
                                />
                            </a>
                        </div>

                        <div className="flex center-xs start-md col-xs-12 col-md-4">
                            <a className="pointer" onClick={toggleUser.bind(this, "C")}>
                                <AtvImg
                                    layers={[
                                        "images/Ccloseup.png"
                                    ]}
                                    isStatic={false}
                                    style={styles.image}
                                />
                            </a>
                        </div>
                    </div>
                </div>

                <div id="offScreen" className="container-fluid" style={styles.offScreen.wrapper} onClick={toggleUser.bind(this)}>
                    <div className="row center-xs" style={styles.main}>
                        <div className="col-xs-12 col-md-6">
                            <img style={styles.imageLarge} src={this.state.currentMember.image} />
                        </div>
                        <div className="col-xs-12 col-md-6">
                            <div style={styles.offScreen.body}>
                                <h1 style={styles.amatic} className="thin">{this.state.currentMember.name}</h1>
                                <h6>
                                    <p>{this.state.currentMember.body1}</p>
                                    <p>{this.state.currentMember.body2}</p>
                                    <p>{this.state.currentMember.body3}</p>
                                    <p>{this.state.currentMember.body4}</p>
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

export default Radium(Team);

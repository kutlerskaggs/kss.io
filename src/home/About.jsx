import React from "react";
import Radium from "radium";
import WindowMixin from "../mixins/window.jsx";
import AtvImg from "react-atv-img";
import Velocity from "velocity-animate";

let styles = {
    amatic: {
        fontFamily: "Amatic SC"
    },
    image: {
        width: 300,
        height: 300,
        borderRadius: 5,
        margin: "1.68rem 0 2.1rem 0",
        cursor: "pointer"
    },
    flip: {
        container: {
            margin: "1.68rem 0 2.1rem 0",
            width: 200,
            height: 200,
            position: "relative",
            perspective: "800px"
        },
        card: {
            width: "100%",
            height: "100%",
            position: "absolute",
            transformStyle: "preserve-3d",
            transition: "transform 1s"
        },
        face: {
            borderRadius: 5,
            margin: 0,
            display: "block",
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden"
        },
        back: {
            backgroundColor: "#fff",
            transform: "rotateY(180deg)"
        },
        flipped: {
            transform: "rotateY(180deg)"
        }
    },
    main: {
        padding: "50px 0px"
    },
    offScreen: {
        body: {
            textAlign: "initial",
            maxWidth: 600
        },
        close: {
            position: "absolute",
            padding: "1rem",
            top: 0,
            right: 0,
            transition: "color 500ms",
            ":hover": {

            }
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

let members = {
    B: {
        class: "end-md",
        name: "Ben Schnelle",
        title: "Founder/Developer",
        images: {
            small: "images/Bcloseup.png",
            large: "images/B.png"
        },
        short: "Founder/Developer",
        body1: "Originally a CPA, I ended up in tech by combining 1 part curiosity with 1 part necessity.",
        body2: "Having been born with an extreme distaste for inefficiency and finding it everywhere in the business world I began exploring ways to address this internal conflict.",
        body3: "Ultimately I discovered software and have been intoxicated by the endless possibilities ever since.",
        body4: "I don't actually talk like this; more along the lines of a crude monkey."
    },
    C: {
        name: "Chris Ludden",
        title: "Founder/Developer",
        images: {
            small: "images/Ccloseup.png",
            large: "images/C.png"
        },
        short: "Founder/Developer",
        body1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        body2: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        body3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        body4: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    T: {
        class: "start-md",
        name: "Tasha Moreno",
        title: "Designer",
        images: {
            small: "images/Tcloseup.png",
            large: "images/T.png"
        },
        short: "Designer",
        body1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        body2: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        body3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        body4: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
};

function memberClicked(member) {

    if(this.state.window.isTablet || this.state.window.isMobile) {
        this.setState({memberFlipped: this.state.memberFlipped === member ? undefined : member });
    } else {
        let el = document.getElementById("offScreen");
        if(el.style.transform) {
            el.style.transform = "";
            Velocity(el, "scroll", { duration: 1000, offset: -63, easing: "easeInOutCubic" });
            this.setState({ currentMember: members[member] });
        } else {
            el.style.transform = "translate(100%)";
        }
    }
}

let Team = React.createClass ({

    mixins: [WindowMixin],

    contextTypes: {
        muiTheme: React.PropTypes.object
    },

    componentWillMount() {
        var muiTheme = this.context.muiTheme.rawTheme;
        styles.wrapper.backgroundColor = muiTheme.palette.accent2Color;
        styles.main.color = muiTheme.palette.textColor;
        styles.offScreen.body.color = muiTheme.palette.alternateTextColor;
        styles.offScreen.close[":hover"].color = muiTheme.palette.alternateTextColor;
        styles.flip.back.color = muiTheme.palette.alternateTextColor;
    },

    getInitialState() {
        return {
            currentMember: { images: {} }
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

                        {["B", "C", "T"].map((memberId) => {
                            let member = members[memberId];
                            return (
                                <div key={memberId} className={"flex center-xs col-xs-12 col-md-4 " + member.class}>
                                    <a onTouchTap={memberClicked.bind(this, memberId)}>
                                        {this.state.window.isTablet || this.state.window.isMobile ?
                                            <div style={styles.flip.container}>
                                                <div style={[styles.flip.card, this.state.memberFlipped === memberId ? styles.flip.flipped : {}]}>
                                                    <img src={member.images.small} style={styles.flip.face} />
                                                    <div style={[styles.flip.face, styles.flip.back]}>
                                                        <h1 style={styles.amatic} className="thin">{member.name}</h1>
                                                        <h6>
                                                            <p>{member.title}</p>
                                                        </h6>
                                                    </div>
                                                </div>
                                            </div>
                                            :
                                            <AtvImg
                                                layers={[member.images.small]}
                                                isStatic={false}
                                                style={styles.image}
                                            />
                                        }
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div id="offScreen" className="container-fluid" style={styles.offScreen.wrapper}>
                    <i className="fa fa-close fa-fw fa-3x pointer" style={styles.offScreen.close} onTouchTap={memberClicked.bind(this)}></i>
                    <div className="row center-xs" style={styles.main}>
                        <div className="col-xs-12 col-md-6">
                            <img style={styles.imageLarge} src={this.state.currentMember.images.large} />
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

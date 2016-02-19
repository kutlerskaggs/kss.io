/* global cssInJS, palette */

import React from "react";
import WindowMixin from "../../../mixins/window.jsx";
import AtvImg from "react-atv-img";
import Velocity from "velocity-animate";


let classes = cssInJS({
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
    cardBody: {
        padding: "15px"
    },
    cardContainer: {
        margin: "1.68rem 0 2.1rem 0",
        width: 225,
        height: 285,
        boxShadow: "0 1px 6px rgba(0,0,0,0.12), 0 1px 4px rgba(0,0,0,0.12)",
        borderRadius: 2,
        overflow: "hidden",
        position: "relative"
    },
    cardContent: {
        display: "flex",
        alignItems: "center"
    },
    cardTitle: {
        flex: 1,
        marginLeft: 15,
        fontSize: "2.25rem"
    },
    cardImage: {
        width: "100%",
        height: "auto",
        verticalAlign: "bottom"
    },
    cardReveal: {
        height: "100%",
        backgroundColor: "#fff",
        padding: "10px 5px",
        textAlign: "left",
        transition: "transform 300ms",
        color: palette.alternateTextColor
    },
    main: {
        color: palette.textColor,
        padding: "50px 0px"
    },
    memberWrapper: {
        display: "flex"
    },
    offScreenBody: {
        color: palette.alternateTextColor,
        textAlign: "initial",
        maxWidth: 600
    },
    offScreenClose: {
        position: "absolute",
        padding: "1rem",
        top: 0,
        right: 0,
        transition: "color 500ms",
        color: "#C7C7C7",
        ":hover": {
            color: palette.alternateTextColor
        }
    },
    offScreenWrapper: {
        backgroundColor: "#fff",
        transition: "transform 500ms",
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    },
    wrapper: {
        backgroundColor: palette.accent2Color
    },
    outerWrapper: {
        position: "relative",
        overflow: "hidden"
    }
});

let members = {
    B: {
        class: "end-md",
        name: "Ben Schnelle",
        title: "Founder/Developer",
        images: {
            small: "images/Bcloseup.png",
            large: "images/B.png"
        },
        short: "Born in the city, moved to suburbia, moved to the country, became a CPA, moved across the country, became a developer, cofounded a rad company.",
        body1: "Originally a CPA, I ended up in tech by combining 1 part curiosity with 1 part necessity.",
        body2: "Having been born with an extreme distaste for inefficiency and finding it everywhere in the business world I began exploring ways to address this internal conflict.",
        body3: "Ultimately I discovered software and have been intoxicated by the endless possibilities ever since."
    },
    C: {
        name: "Chris Ludden",
        title: "Founder/Developer",
        images: {
            small: "images/Ccloseup.png",
            large: "images/C.png"
        },
        short: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        body1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        body2: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        body3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    T: {
        class: "start-md",
        name: "Tasha Moreno",
        title: "Designer",
        images: {
            small: "images/Tcloseup.png",
            large: "images/T.png"
        },
        short: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        body1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        body2: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        body3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
};

function memberClicked(member) {
    let state = this.state,
        _state = {};

    if(state.offScreen.transform) {
        _state.offScreen = { transform: "" };
        _state.currentMember = members[member];
        Velocity(document.getElementById("offScreen"), "scroll", { duration: 1000, offset: -63, easing: "easeInOutCubic" });
    } else {
        _state.offScreen = { transform: "translate(100%)" };
    }
    this.setState(_state);
}

let Team = React.createClass ({

    mixins: [WindowMixin],

    getInitialState() {
        return {
            revealB: false,
            revealC: false,
            revealT: false,
            currentMember: { images: {} },
            offScreen: { transform: "translate(100%)" }
        };
    },

    reveal(member) {
        member = `reveal${member}`;
        let state = {};
        state[member] = !this.state[member];
        this.setState(state);
    },

    render() {
        return (
            <div className={classes.outerWrapper}>
                <div className={`container-fluid ${classes.wrapper}`}>
                    <div id={this.props.id} className={`row center-xs ${classes.main}`}>

                        <div className="col-xs-12 col-sm-10">
                            <h1>WHO?</h1>
                            <h3 className={classes.amatic}>Meet the gang.</h3>
                        </div>

                        {["B", "C", "T"].map((memberId) => {
                            let member = members[memberId];
                            return (
                                <div key={memberId} className={["center-xs col-xs-12 col-md-4", member.class, classes.memberWrapper].join(" ")}>
                                    {this.state.window.isTablet || this.state.window.isMobile ?
                                        <div className={classes.cardContainer}>
                                            <img src={member.images.small} className={classes.cardImage} />
                                            <div className={classes.cardReveal} style={this.state[`reveal${memberId}`] ? { transform: "translateY(-225px)" } : {}}>
                                                <div className={[classes.cardContent, classes.amatic].join(" ")}>
                                                    <span className={classes.cardTitle}>{member.name}</span>
                                                    <i className={this.state[`reveal${memberId}`] ? "fa fa-fw fa-2x fa-angle-down" : "fa fa-fw fa-2x fa-angle-up"} onTouchTap={this.reveal.bind(this, memberId)}></i>
                                                </div>
                                                <div className={classes.cardBody}>
                                                    <h6>{member.title}</h6>
                                                    <p>{member.short}</p>
                                                </div>
                                            </div>
                                        </div>
                                        :
                                        <a onTouchTap={memberClicked.bind(this, memberId)}>
                                            <AtvImg
                                                layers={[member.images.small]}
                                                isStatic={false}
                                                className={classes.image}
                                            />
                                        </a>
                                    }
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div id="offScreen" className={`container-fluid ${classes.offScreenWrapper}`} style={this.state.offScreen}>
                    <i className={`fa fa-close fa-fw fa-3x pointer ${classes.offScreenClose}`} onTouchTap={memberClicked.bind(this)}></i>
                    <div className={`row center-xs ${classes.main}`}>
                        <div className="col-xs-12 col-md-6">
                            <img className={classes.imageLarge} src={this.state.currentMember.images.large} />
                        </div>
                        <div className="col-xs-12 col-md-6">
                            <div className={classes.offScreenBody}>
                                <h1 className={classes.amatic}>{this.state.currentMember.name}</h1>
                                <h6>
                                    <p>{this.state.currentMember.body1}</p>
                                    <p>{this.state.currentMember.body2}</p>
                                    <p>{this.state.currentMember.body3}</p>
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

export default Team;

/* global cssInJS, palette */

import React from "react";
import WindowMixin from "../../../mixins/window.jsx";
import AtvImg from "react-atv-img";
import Velocity from "velocity-animate";

/* TODO pictures off center on iPhone 4 */

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
    flipContainer: {
        margin: "1.68rem 0 2.1rem 0",
        width: 200,
        height: 200,
        position: "relative",
        perspective: "800px"
    },
    flipCard: {
        width: "100%",
        height: "100%",
        position: "absolute",
        transformStyle: "preserve-3d",
        transition: "transform 1s"
    },
    flipFace: {
        borderRadius: 5,
        margin: 0,
        display: "block",
        position: "absolute",
        width: "100%",
        height: "100%",
        backfaceVisibility: "hidden"
    },
    flipBack: {
        color: palette.alternateTextColor,
        backgroundColor: "#fff",
        transform: "rotateY(180deg)"
    },
    flipped: {
        transform: "rotateY(180deg)"
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
        short: "Founder/Developer",
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
        short: "Founder/Developer",
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
        short: "Designer",
        body1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        body2: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        body3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
};

function memberClicked(member) {
    let state = this.state,
        _state = {};

    if(state.window.isTablet || state.window.isMobile) {
        this.setState({memberFlipped: state.memberFlipped === member ? undefined : member });
    } else {
        if(state.offScreen.transform) {
            _state.offScreen = { transform: "" };
            _state.currentMember = members[member];
            Velocity(document.getElementById("offScreen"), "scroll", { duration: 1000, offset: -63, easing: "easeInOutCubic" });
        } else {
            _state.offScreen = { transform: "translate(100%)" };
        }
        this.setState(_state);
    }
}

let Team = React.createClass ({

    mixins: [WindowMixin],

    getInitialState() {
        return {
            currentMember: { images: {} },
            offScreen: { transform: "translate(100%)" }
        };
    },

    render() {
        return (
            <div className={classes.outerWrapper}>
                <div className={"container-fluid " + classes.wrapper}>
                    <div id={this.props.id} className={"row center-xs " + classes.main}>

                        <div className="col-xs-12 col-sm-10">
                            <h1>WHO?</h1>
                            <h3 className={classes.amatic}>Meet the gang.</h3>
                        </div>

                        {["B", "C", "T"].map((memberId) => {
                            let member = members[memberId];
                            return (
                                <div key={memberId} className={["center-xs col-xs-12 col-md-4", member.class, classes.memberWrapper].join(" ")}>
                                    <a onTouchTap={memberClicked.bind(this, memberId)}>
                                        {this.state.window.isTablet || this.state.window.isMobile ?
                                            <div className={classes.flipContainer}>
                                                <div className={[classes.flipCard, this.state.memberFlipped === memberId ? classes.flipped : ""].join(" ")}>
                                                    <img src={member.images.small} className={classes.flipFace} />
                                                    <div className={[classes.flipFace, classes.flipBack].join(" ")}>
                                                        <h1 className={classes.amatic}>{member.name}</h1>
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
                                                className={classes.image}
                                            />
                                        }
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div id="offScreen" className={"container-fluid " + classes.offScreenWrapper} style={this.state.offScreen}>
                    <i className={"fa fa-close fa-fw fa-3x pointer " + classes.offScreenClose} onTouchTap={memberClicked.bind(this)}></i>
                    <div className={"row center-xs " + classes.main}>
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

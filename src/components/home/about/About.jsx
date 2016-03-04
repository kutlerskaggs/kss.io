/* global cssInJS, palette */

import React from "react";
import AtvImg from "react-atv-img";
import WindowMixin from "../../../mixins/window";

let classes = cssInJS({
    amatic: {
        fontFamily: "Amatic SC"
    },
    image: {
        width: 300,
        height: 300,
        borderRadius: 5,
        margin: "1.68rem 0 2.1rem 0"
    },
    cardBody: {
        padding: 15
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
            small: "images/Bcloseup.png"
        },
        short: "Born in the city, moved to suburbia, moved to the country, became a CPA, moved across the country, became a developer, cofounded a rad company."
    },
    C: {
        name: "Chris Ludden",
        title: "Founder/Developer",
        images: {
            small: "images/Ccloseup.png"
        },
        short: "Founding member of N.W.A. who more commonly goes by his stage name, Ice Cube. Lately he's been really into making terrible movies."
    },
    T: {
        class: "start-md",
        name: "Tasha Moreno",
        title: "Designer",
        images: {
            small: "images/Tcloseup.png"
        },
        short: "Moonlight designer who spends the majority of her time working with children, singing songs, and being really happy."
    }
};

let About = React.createClass ({

    mixins: [WindowMixin],

    getInitialState() {
        return {
            revealB: false,
            revealC: false,
            revealT: false
        };
    },

    isInternetExplorer() {
        let userAgent = window.navigator.userAgent;
        return userAgent.indexOf("MSIE ") !== -1 || userAgent.indexOf("Trident/") !== -1 || userAgent.indexOf("Edge/") !== -1;
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
                                                    <i className={this.state[`reveal${memberId}`] ? "fa fa-fw fa-2x fa-angle-down" : "fa fa-fw fa-2x fa-angle-up"} onTouchTap={this.reveal.bind(null, memberId)}></i>
                                                </div>
                                                <div className={classes.cardBody}>
                                                    <h6>{member.title}</h6>
                                                    <p>{member.short}</p>
                                                </div>
                                            </div>
                                        </div>
                                        :
                                        <AtvImg
                                            layers={[member.images.small]}
                                            staticFallback={member.images.small}
                                            isStatic={this.isInternetExplorer()}
                                            className={classes.image}
                                        />
                                    }
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
});

export default About;

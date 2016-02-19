/* global cssInJS, palette */

import React from "react";

let classes = cssInJS({
    wrapper: {
        backgroundColor: palette.accent3Color
    },
    main: {
        color: palette.alternateTextColor,
        height: 400,
        "@media (max-width: 991px)": {
            height: 200
        }
    },
    social: {
        color: palette.alternateTextColor,
        padding: 30,
        transition: "color 200ms",
        "@media (max-width: 991px)": {
            padding: 15
        },
        ":hover": {
            color: palette.textColor
        }
    }
});

let About = React.createClass ({

    render() {
        return (
            <div className={"container-fluid " + classes.wrapper}>
                <div className={"row middle-xs center-xs " + classes.main}>
                    <div className="col-xs-12">
                        <a key="github" className={classes.social} href="https://github.com/kutlerskaggs" tabIndex="-1">
                            <i className="fa fa-github fa-fw fa-3x"></i>
                        </a>

                        <a key="medium" className={classes.social} href="https://medium.com/@kutlerskaggs" tabIndex="-1">
                            <i className="fa fa-medium fa-fw fa-3x"></i>
                        </a>

                        <a key="twitter" className={classes.social} href="https://twitter.com/kutlerskaggs" tabIndex="-1">
                            <i className="fa fa-twitter fa-fw fa-3x"></i>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
});

export default About;

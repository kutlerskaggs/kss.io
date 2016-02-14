/* global cssInJS, palette */

import React from "react";
import Vivus from "vivus";

// static classes
let classes = cssInJS({
    header: {
        marginBottom: 20
    },
    icon: {
        height: 120,
        width: "auto",
        "@media (max-width: 991px)": {
            height: 90
        }
    },
    itemWrapper: {
        maxWidth: 400,
        margin: "20px 0px"
    },
    itemBody: {
        padding: "0px 15px",
        lineHeight: "30px",
        "@media (max-width: 991px)": {
            padding: 0
        }
    },
    main: {
        padding: "50px 0px",
        color: palette.textColor
    },
    wrapper: {
        backgroundColor: palette.accent1Color
    }
});

let steps = [{
    id: "chat",
    title: "Chat",
    body: "Understand your needs and provide the best options for your unique problem or idea.",
    image: "images/chat.svg"
}, {
    id: "design",
    title: "Design",
    body: "Together we create the perfect prototype of your app before a line of code is written.",
    image: "images/design.svg"
}, {
    id: "build",
    title: "Build",
    body: "We create your masterpiece based on the prototype specifications and deploy your app to reliable, secure servers.",
    image: "images/build.svg"
}, {
    id: "maintain",
    title: "Maintain",
    body: "Let us keep your app happy and healthy so you can stress about other things.",
    image: "images/maintain.svg"
}];

let About = React.createClass ({

    animateSvg(step) {
        this[step].reset().play();
    },

    componentDidMount() {
        steps.forEach(step => this[step.id] = new Vivus(step.id, {duration: 50, type: "async", delay: 0}));
    },

    render() {
        return (
            <div className={classes.wrapper + " container-fluid"}>
                <div className={classes.main + " row center-xs"} id={this.props.id}>

                    <div className={classes.header + " col-xs-12 col-sm-10"}>
                        <h1>OUR PROCESS</h1>
                        <h3 className="amatic">Simple. Straightforward.</h3>
                    </div>

                    {steps.map(step => {
                        return (
                            <div key={step.id} className="col-xs-12 col-md-3 row center-xs">
                                <div className={classes.itemWrapper}>
                                    <div>
                                        <object className={classes.icon} id={step.id} type="image/svg+xml" data={step.image} onMouseOver={this.animateSvg.bind(this, step.id)}></object>
                                    </div>
                                    <h3 className="amatic">{step.title}</h3>
                                    <h6 className={classes.itemBody}>{step.body}</h6>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
});

export default About;

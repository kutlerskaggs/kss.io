/* global cssInJS, palette */

import React from "react";
import TextField from "material-ui/lib/text-field";
import RaisedButton from "material-ui/lib/raised-button";
import LinearProgress from "material-ui/lib/linear-progress";
import theme from "../../../styles/theme";
import request from "superagent";


let classes = cssInJS({
    amatic: {
        fontFamily: "Amatic SC"
    },
    button: {
        marginTop: 20,
        width: 100
    },
    content: {
        marginTop: "1.68rem",
        marginBottom: "2.1rem",
        maxWidth: 414,
        "@media (max-width: 991px)": {
            marginTop: 0,
            marginLeft: "auto",
            marginRight: "auto"
        }
    },
    contentWrapper: {
        display: "flex"
    },
    main: {
        color: palette.textColor,
        paddingTop: 50,
        paddingBottom: 50
    },
    notification: {
        padding: 15,
        fontSize: "1.2rem",
        color: palette.alternateTextColor,
        borderRadius: "5px",
        backgroundColor: "#fff"
    },
    notificationWrapper: {
        position: "fixed",
        left: 0,
        bottom: 0,
        padding: 20,
        transform: "translate(-100%)",
        transition: "transform 500ms"
    },
    form: {
        textAlign: "inherit",
        marginBottom: 20
    },
    formOuterWrapper: {
        position: "relative",
        "@media(max-width: 991px)": {
            minHeight: 320,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }
    },
    send: {
        textAlign: "right"
    },
    text: {
        textAlign: "initial",
        lineHeight: "30px"
    },
    thanksWrapper: {
        color: "#fff",
        transition: "opacity 1s linear",
        maxWidth: 414
    },
    thanks: {
        height: "100%",
        width: "100%",
        zIndex: 100
    }
});

let spreadStyles = {
    textField: {
        underlineStyle: {
            borderColor: theme.palette.textColor
        },
        underlineFocusStyle: {
            borderColor: theme.palette.accent3Color
        },
        floatingLabelStyle: {
            color: theme.palette.textColor
        },
        style: {
            width: "100%"
        }
    },
    raisedButton: {
        backgroundColor: theme.palette.accent3Color,
        labelColor: theme.palette.alternateTextColor,
        style: {
            marginTop: 20,
            width: 100
        }
    }
};

let Contact = React.createClass ({

    getInitialState() {
        return {
            formSubmitted: false,
            styles: {
                formWrapper: {
                    display: "block"
                },
                progress: {
                    opacity: 0,
                    marginTop: 10
                },
                thanksWrapper: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    opacity: 0,
                    zIndex: -1
                }
            }
        };
    },

    handleChange(field, event) {
        let state = {};
        state[field] = event.target.value;
        this.setState(state);
    },

    handleSnackbarClose(flag) {
        var state = {};
        state[flag] = false;
        this.setState(state);
    },

    sendMessage(e) {
        e.preventDefault();
        let styles = this.state.styles;
        styles.progress.opacity = 1;
        this.setState({
            formSubmitted: true,
            styles: styles
        });

        request
            .post("https://d43una9r64.execute-api.us-west-2.amazonaws.com/prod/kutlerskaggs-com_contact")
            .set("Content-Type", "application/json")
            .accept("application/json")
            .send(this.state)
            .end((err) => {
                if(err) {
                    // reset form
                    this.setState({ formSubmitted: false });
                    // display notification
                    let el = document.getElementById("error-notification");
                    el.style.transform = "translate(0%)";
                    setTimeout(() => el.style.transform = "", 4000);
                } else {
                    // clear form and show thank you
                    this.setState({
                        name: "",
                        email: "",
                        message: "",
                        styles: {
                            formWrapper: {
                                display: "none"
                            },
                            thanksWrapper: {
                                opacity: 1
                            }
                        }
                    });
                }
            });
    },

    render() {

        return (
            <div id={this.props.id} className={"container-fluid " + classes.main}>

                <div className="row center-xs">
                    <div className="col-xs-12 col-sm-10">
                        <h1>CONTACT</h1>
                        <h3 className={classes.amatic}>Let's Get Coffee</h3>
                    </div>
                </div>

                <div className="row middle-xs">
                    <div className={`end-md col-xs-12 col-md-6 ${classes.contentWrapper}`}>
                        <h6 className={[classes.content, classes.text].join(" ")}>
                            <p className="thin">If you like what you've seen so far and care to chat about your problems or ideas shoot us a quick message.</p>
                            <p className="thin">Maybe we can help you, maybe we can't. Either way the coffee is on us and you won't get a bullshit sales pitch.</p>
                            <p className="thin">Not in Denver? Let's hangout on Google.</p>
                        </h6>
                    </div>

                    <div className={`col-xs-12 col-md-6 ${classes.formOuterWrapper}`}>
                        <form className={classes.content} style={this.state.styles.formWrapper} onSubmit={this.sendMessage}>
                            <TextField {...spreadStyles.textField} disabled={this.state.formSubmitted} floatingLabelText="Name" maxLength="255" required value={this.state.name} onChange={this.handleChange.bind(null, "name")} />
                            <TextField {...spreadStyles.textField} disabled={this.state.formSubmitted} floatingLabelText="Email" maxLength="255" type="email" required value={this.state.email} onChange={this.handleChange.bind(null, "email")} />
                            <TextField {...spreadStyles.textField} disabled={this.state.formSubmitted} floatingLabelText="Message" maxLength="500" multiLine={true} required value={this.state.message} onChange={this.handleChange.bind(null, "message")} />
                            <div className={`flex end-xs ${classes.send}`}>
                                <RaisedButton {...spreadStyles.raisedButton} disabled={this.state.formSubmitted} type="submit" label="Send" />
                            </div>
                            <LinearProgress mode="indeterminate" style={this.state.styles.progress}/>
                        </form>

                        <div className={classes.thanksWrapper} style={this.state.styles.thanksWrapper}>
                            <object id="thanks" className={classes.thanks} type="image/svg+xml" data="images/thanks.svg"></object>
                        </div>
                    </div>
                </div>
                <div id="error-notification" className={classes.notificationWrapper}>
                    <div className={classes.notification}>
                        Ugh...we ran into a little trouble sending your message.
                    </div>
                </div>
            </div>
        );
    }
});

export default Contact;

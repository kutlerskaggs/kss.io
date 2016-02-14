/* global cssInJS, palette */

import React from "react";
import TextField from "material-ui/lib/text-field";
import RaisedButton from "material-ui/lib/raised-button";
import Snackbar from "material-ui/lib/snackbar";
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
    form: {
        textAlign: "inherit",
        marginBottom: 20
    },
    text: {
        textAlign: "initial",
        lineHeight: "30px"
    }
});

let styles = {
    snackbarError: {
        fontSize: "1.2rem"
    },
    snackbarSuccess: {
        fontSize: "1.2rem",
        backgroundColor: "#333",
        color: "white"
    }
};

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
            openSuccess: false,
            openError: false
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

        request
            .post("https://ym6uexi6tc.execute-api.us-west-2.amazonaws.com/prod/kss-io_contact_dynamo")
            .set("Content-Type", "application/json")
            .set("Authorization", "NONE")
            .accept("application/json")
            .send(this.state)
            .end((err) => {
                if(err) {
                    /* TODO decide what to do here ... replace form with message? */
                    this.setState({ openError: true });
                } else {
                    this.setState({ openSuccess: true });
                }
            });
    },

    render() {

        return (
            <div className={"container-fluid " + classes.main}>

                <div id={this.props.id} className="row center-xs">
                    <div className="col-xs-12 col-sm-10">
                        <h1>CONTACT</h1>
                        <h3 className={classes.amatic}>Let's Get Coffee</h3>
                    </div>
                </div>

                <div id={this.props.id} className="row middle-xs">
                    <div className={["end-md col-xs-12 col-md-6", classes.contentWrapper].join(" ")}>
                        <h6 className={[classes.content, classes.text].join(" ")}>
                            <p className="thin">If you like what you've seen so far and care to chat about your problems or ideas shoot us a quick message.</p>
                            <p className="thin">Maybe we can help you, maybe we can't. Either way the coffee is on us and you won't get a bullshit sales pitch.</p>
                            <p className="thin">Not in Denver? Let's hangout on Google.</p>
                        </h6>
                    </div>

                    <div className="col-xs-12 col-md-6">
                        <form className={classes.content} onSubmit={this.sendMessage}>
                            <TextField {...spreadStyles.textField} floatingLabelText="Name" required value={this.state.name} onChange={this.handleChange.bind(this, "name")} />
                            <TextField {...spreadStyles.textField} floatingLabelText="Email" required value={this.state.email} onChange={this.handleChange.bind(this, "email")} />
                            <TextField {...spreadStyles.textField} floatingLabelText="Message" multiLine={true} required value={this.state.message} onChange={this.handleChange.bind(this, "message")} />
                            <br/>
                            <div className="flex end-xs">
                                <RaisedButton {...spreadStyles.raisedButton} type="submit" label="Send" />
                            </div>
                        </form>
                    </div>
                </div>

                <Snackbar
                    open={this.state.openSuccess}
                    message="We'll be in touch shortly!"
                    autoHideDuration={4000}
                    onRequestClose={this.handleSnackbarClose.bind(this, "openSuccess")}
                    bodyStyle={styles.snackbarSuccess}
                />

                <Snackbar
                    open={this.state.openError}
                    message="Ugh...we ran into a little trouble sending your message."
                    autoHideDuration={4000}
                    onRequestClose={this.handleSnackbarClose.bind(this, "openError")}
                    bodyStyle={styles.snackbarError}
                />
            </div>
        );
    }
});

export default Contact;

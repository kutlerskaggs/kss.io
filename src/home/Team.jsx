import React from "react";
import Radium from "radium";

let styles = {
    main: {
        padding: "6rem 0 6rem 0"
    },
    image: {
        circle: {
            image: {
                borderRadius: "50%",
                maxWidth: "100%",
                height: "auto"
            }
        },
        full: {
            image: {
                maxWidth: "100%",
                height: "auto"
            }
        }
    }
};

let defaultState = {
    b: {
        full: "Bwhite.png"
    },
    t: {
        full: "Twhite.png"
    },
    c: {
        full: "Cwhite.png"
    }
};

function toggleUser(user) {
    var state = {
        b: {
            full: "Bwhite.png"
        },
        t: {
            full: "Twhite.png"
        },
        c: {
            full: "Cwhite.png"
        }
    };
    state[user.toLowerCase()].full = user + ".png";
    this.setState(state);
}

let Team = React.createClass ({

    contextTypes: {
        muiTheme: React.PropTypes.object
    },

    getInitialState() {
        return defaultState;
    },

    componentWillMount() {
        var muiTheme = this.context.muiTheme.rawTheme;
        styles.main.backgroundColor = muiTheme.palette.accent2Color;
        styles.main.color = muiTheme.palette.textColor;
    },

    render() {
        return (

            <div id={this.props.id} className="row" style={styles.main}>
                <div className="row col-xs-12 col-sm-5 col-sm-offset-1">
                    <div className="col-xs-4">
                        <img style={styles.image.full.image} src={"images/" + this.state.b.full} alt="" />
                    </div>
                    <div className="col-xs-4">
                        <img style={styles.image.full.image} src={"images/" + this.state.t.full} alt="" />
                    </div>
                    <div className="col-xs-4">
                        <img style={styles.image.full.image} src={"images/" + this.state.c.full} alt="" />
                    </div>
                </div>

                <div className="col-xs-12 col-sm-5">
                    <div className="row">
                        <a className="col-xs-4 pointer" onClick={toggleUser.bind(this, "B")}>
                            <img style={styles.image.circle.image} src="images/Bcloseup.png" alt="" />
                        </a>
                        <a className="col-xs-4 pointer" onClick={toggleUser.bind(this, "T")}>
                            <img style={styles.image.circle.image} src="images/Tcloseup.png" alt="" />
                        </a>
                        <a className="col-xs-4 pointer" onClick={toggleUser.bind(this, "C")}>
                            <img style={styles.image.circle.image} src="images/Ccloseup.png" alt="" />
                        </a>
                    </div>

                    <div className="row">
                        <p>Lorem ipsum dolor sit amet, mei id ludus corrumpit ullamcorper, ius cu accusamus prodesset. Ne vocibus commune prodesset nam. Quas dicta scribentur qui no, no democritum argumentum contentiones eam, usu an aeque harum malorum. Eam an atomorum deseruisse.</p>
                        <p>Vis vidisse delenit in, ius ea movet ullamcorper. His ad atqui virtute sensibus. Ius ex utinam facilisi concludaturque, no vim unum urbanitas. Libris inermis vituperatoribus ex vim. Summo copiosae urbanitas an per.</p>
                    </div>
                </div>
            </div>
        );
    }
});

export default Radium(Team);

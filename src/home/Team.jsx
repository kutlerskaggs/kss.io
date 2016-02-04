import React from "react";
import Radium from "radium";
import AtvImg from "react-atv-img";

let styles = {
    wrapper: {

    },
    main: {
        padding: "6rem 0 6rem 0"
    },
    image: {
        width: "300px",
        height: "300px",
        borderRadius: 5
    }
};

function toggleUser() {

}

let Team = React.createClass ({

    contextTypes: {
        muiTheme: React.PropTypes.object
    },

    componentWillMount() {
        var muiTheme = this.context.muiTheme.rawTheme;
        styles.wrapper.backgroundColor = muiTheme.palette.accent2Color;
        styles.main.color = muiTheme.palette.textColor;
    },

    render() {
        return (
            <div className="container-fluid" style={styles.wrapper}>
                <div id={this.props.id} className="row" style={styles.main}>

                    <div className="flex center-xs col-xs-12 col-md-4">
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
                        <a className="pointer" onClick={toggleUser.bind(this, "B")}>
                            <AtvImg
                                layers={[
                                    "images/Tcloseup.png"
                                ]}
                                isStatic={false}
                                style={styles.image}
                            />
                        </a>
                    </div>

                    <div className="flex center-xs col-xs-12 col-md-4">
                        <a className="pointer" onClick={toggleUser.bind(this, "B")}>
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
        );
    }
});

export default Radium(Team);

import React from 'react';
import Radium from 'radium';
import FontIcon from 'material-ui/lib/font-icon';
import globalStyles from '../styles/global';

let styles = {
    main: {
        padding: '7%'
    },
    left: {
        flex: 1,
        alignItems: 'flex-end'
    },
    right: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    image: {
        circle: {
            wrapper: {
                flex: 1,
                margin: '0 10px 20px 10px'
            },
            image: {
                borderRadius: '50%',
                maxWidth: '100%',
                height: 'auto'
            }
        },
        full: {
            wrapper: {
                flex: 1
            },
            image: {
                maxWidth: '100%',
                height: 'auto'
            }
        }
    }
};

let Team = React.createClass ({

    contextTypes: {
        muiTheme: React.PropTypes.object
    },

    componentWillMount() {
        var muiTheme = this.context.muiTheme.rawTheme;
        styles.main.backgroundColor = muiTheme.palette.accent2Color;
        styles.main.color = muiTheme.palette.textColor;
    },

    render() {
        return (
            <div style={[globalStyles.flex, styles.main]}>

                <div style={[globalStyles.flex, styles.left]}>
                    <div style={styles.image.full.wrapper}>
                        <img style={styles.image.full.image} src="assets/images/B.png" alt="" />
                    </div>
                    <div style={styles.image.full.wrapper}>
                        <img style={styles.image.full.image} src="assets/images/Twhite.png" alt="" />
                    </div>
                    <div style={styles.image.full.wrapper}>
                        <img style={styles.image.full.image} src="assets/images/Bwhite.png" alt="" />
                    </div>
                </div>

                <div style={[styles.right, globalStyles.flex]}>
                    <div style={globalStyles.flex}>
                        <div style={styles.image.circle.wrapper}>
                            <img style={styles.image.circle.image} src="assets/images/Bcloseup.png" alt="" />
                        </div>
                        <div style={styles.image.circle.wrapper}>
                            <img style={styles.image.circle.image} src="assets/images/Tcloseup.png" alt="" />
                        </div>
                        <div style={styles.image.circle.wrapper}>
                            <img style={styles.image.circle.image} src="assets/images/Bcloseup.png" alt="" />
                        </div>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, mei id ludus corrumpit ullamcorper, ius cu accusamus prodesset. Ne vocibus commune prodesset nam. Quas dicta scribentur qui no, no democritum argumentum contentiones eam, usu an aeque harum malorum. Eam an atomorum deseruisse.
                    </p>
                    <p>
                        Vis vidisse delenit in, ius ea movet ullamcorper. His ad atqui virtute sensibus. Ius ex utinam facilisi concludaturque, no vim unum urbanitas. Libris inermis vituperatoribus ex vim. Summo copiosae urbanitas an per.
                    </p>
                </div>
            </div>
        );
    }
});

export default Radium(Team);

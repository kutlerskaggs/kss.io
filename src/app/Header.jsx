import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import FlatButton from 'material-ui/lib/flat-button';


let styles = {
    header: {}
};

function navigate(arg) {
    console.log('navigate!!!', arg);
};

let Header = React.createClass({

    contextTypes: {
        muiTheme: React.PropTypes.object
    },

    componentWillMount() {
        styles.header.color = this.context.muiTheme.rawTheme.palette.textColor;
    },

    render() {
        return (
            <AppBar
                title={<span style={styles.header}>KutlerSkaggs</span>}
                className="kss-header"
                showMenuIconButton={false}
                iconElementRight={
                    <div>
                        <FlatButton label="About" onClick={navigate.bind(this, 'about')}/>
                        <FlatButton label="Portfolio" onClick={navigate.bind(this, 'portfolio')}/>
                        <FlatButton label="Team" onClick={navigate.bind(this, 'team')}/>
                        <FlatButton label="Contact" onClick={navigate.bind(this, 'contact')}/>
                    </div>
                }
                style={{
                    backgroundColor: 'rgba(0,0,0,0)',
                    boxShadow: 'none'
                }}
            />
        );
    }

});

export default Header;

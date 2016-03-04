/* global cssInJS, palette */

import React from "react";
import Velocity from "velocity-animate";
import theme from "../../../styles/theme";

// Material-UI components
import AppBar from "material-ui/lib/app-bar";
import FlatButton from "material-ui/lib/flat-button";
import LeftNav from "material-ui/lib/left-nav";
import MenuItem from "material-ui/lib/menus/menu-item";
import FloatingActionButton from "material-ui/lib/floating-action-button";
import MenuIcon from "material-ui/lib/svg-icons/navigation/menu";


// dynamic palette items
let localPalette = {
    transparentAppBar: "rgba(0, 0, 0, 0)",
    opaqueAppBar: "rgba(20, 20, 20, 1)"
};

// static classes
let classes = cssInJS({
    appBar: {
        position: "fixed !important",
        boxShadow: "none !important",
        transition: "background-color .5s linear !important"
    },
    brand: {
        color: palette.textColor,
        position: "absolute",
        top: 15,
        left: 15,
        height: 40,
        lineHeight: "40px",
        fontSize: "1.7rem"
    },
    title: {
        color: palette.textColor
    },
    rightElement: {
        marginTop: 0
    },
    headerItems: {
        display: "flex",
        alignItems: "center",
        height: 64
    },
    mobileMenu: {
        backgroundColor: "#151515 !important"
    },
    mobileMenuHeader: {
        height: 75,
        padding: 20,
        fontSize: "1.2rem",
        color: palette.alternateTextColor,
        backgroundColor: palette.accent3Color
    },
    mobileMenuItem: {
        display: "inline-block !important",
        fontFamily: "Amatic SC !important",
        fontSize: "32px !important",
        padding: "5px 0px",
        color: palette.textColor + " !important"
    },
    mobileMenuItemIcon: {
        padding: "14px 0px 14px 16px",
        height: 30,
        float: "left"
    },
    mobileMenuOverlay: {
        backgroundColor: "rgba(200, 200, 200, .54) !important"
    },
    mobileNavBar: {
        height: 0
    },
    mobileNavBarButton: {
        position: "fixed !important",
        top: "15px !important",
        right: "15px !important",
        zIndex: "999 !important"
    }
});


let styles = {
    // remove default Material-UI AppBar styling
    appBarRight: {
        margin: 0
    },
    desktopItem: {
        color: theme.palette.textColor
    }
};


let Header = React.createClass({

    // which navbar should we show?
    handleResize() {
        var state = this.state;
        state.showDesktopNav = window.innerWidth > 991;
        this.setState(state);
    },

    // fade app bar in on scroll
    handleScroll() {
        var state = this.state;
        state.styles.appBar.backgroundColor = window.pageYOffset > 50 ? localPalette.opaqueAppBar : localPalette.transparentAppBar;
        this.setState(state);
    },

    // open/close mobile side nav
    handleToggle() {
        this.setState({ mobileNavOpen: !this.state.mobileNavOpen });
    },


    getInitialState() {
        var state = {
            mobileNavOpen: false,
            showDesktopNav: window.innerWidth > 991,
            styles: {
                appBar: {
                    backgroundColor: localPalette.transparentAppBar
                }
            }
        };
        return state;
    },


    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
        window.addEventListener("scroll", this.handleScroll);
    },


    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
        window.removeEventListener("scroll", this.handleScroll);
    },

    /**
     * scrollToId - scroll to top of element
     *
     * @param  {string} id              element id to scroll to top
     * @param  {boolean} closeMobileNav whether or not to close mobile side nav
     */
    scrollToId(id, closeMobileNav) {
        let el = document.getElementById(id);
        // offset header if full nav is shown
        let options = { duration: 750, offset: this.state.showDesktopNav ? -63 : 0, easing: "easeInOutCubic" };
        Velocity(el, "scroll", options);
        // close mobileNav
        if(closeMobileNav) {
            this.setState({mobileNavOpen: false});
        }
    },

    render() {

        /* create items for both desktop and mobile navs */

        let desktopItems = this.props.items.map((item) => {
            return (
                <FlatButton label={item.label} key={item.key} labelStyle={styles.desktopItem} hoverColor="rgba(0,0,0,0)" onTouchTap={this.scrollToId.bind(null, item.key)}/>
            );
        });

        let mobileItems = this.props.items.map((item) => {
            return (
                <div key={item.key}>
                    <img className={classes.mobileMenuItemIcon} src={["images/menu_", item.key, ".png"].join("")} />
                    <MenuItem className={classes.mobileMenuItem} onTouchTap={this.scrollToId.bind(null, item.key, true)}>{item.label}</MenuItem>
                </div>
            );
        });
        // add header to mobile side nav
        mobileItems.unshift(<div key="brand" className={classes.mobileMenuHeader}>KutlerSkaggs</div>);

        return (
            <div>
                {this.state.showDesktopNav ?

                    <AppBar
                        title={<span className={classes.title}>KutlerSkaggs</span>}
                        className={classes.appBar}
                        showMenuIconButton={false}
                        iconElementRight={<div className={classes.headerItems}>{desktopItems}</div>}
                        iconStyleRight={styles.appBarRight}
                        style={this.state.styles.appBar}
                    />

                    :

                    <div className={classes.mobileNavBar}>
                        <div className={classes.brand}>{!this.state.mobileNavOpen ? "KutlerSkaggs" : ""}</div>
                        <FloatingActionButton mini={true} className={classes.mobileNavBarButton} backgroundColor="white" onTouchTap={this.handleToggle}>
                          <MenuIcon />
                        </FloatingActionButton>

                        <LeftNav
                            docked={false}
                            width={200}
                            openRight={true}
                            open={this.state.mobileNavOpen}
                            onRequestChange={open => this.setState({ mobileNavOpen: open})}
                            className={classes.mobileMenu}
                            overlayClassName={classes.mobileMenuOverlay}
                        >
                            {mobileItems}
                        </LeftNav>
                    </div>

                }
            </div>
        );
    }

});

export default Header;

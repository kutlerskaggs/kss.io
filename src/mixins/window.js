/* TODO isn't this adding multiple event listeners for each location it is used in a component? */

export default {

    componentWillMount() {
        window.addEventListener("resize", this._onResize);
    },

    componentWillUnmount() {
        window.removeEventListener("resize", this._onResize);
    },

    getInitialState() {
        return this._getWindowState();
    },

    _getWindowState() {
        let height = window.innerHeight,
            width = window.innerWidth;

        return {
            window: {
                height: height,
                width: width,
                isTablet: width > 414 && width <= 991,
                isMobile: width <= 414,
                isHighRes: width > 1920
            }
        };
    },

    _onResize() {
        this.setState(this._getWindowState());
    }
};

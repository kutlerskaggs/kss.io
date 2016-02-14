
export default {

    onResize() {
        let height = window.innerHeight,
            width = window.innerWidth;

        this.setState({
            window: {
                height: height,
                width: width,
                isTablet: width > 414 && width <= 991,
                isMobile: width <= 414
            }
        });
    },

    componentWillMount() {
        window.addEventListener("resize", this.onResize);
    },

    componentWillUnmount() {
        window.removeEventListener("resize", this.onResize);
    },

    getInitialState() {
        let height = window.innerHeight,
            width = window.innerWidth;

        return {
            window: {
                height: height,
                width: width,
                isTablet: width > 414 && width <= 991,
                isMobile: width <= 414
            }
        };
    }
};

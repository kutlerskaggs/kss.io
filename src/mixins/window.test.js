/* global describe, it, beforeEach */

import expect from "expect";
import _WindowMixin from "../mixins/window";

describe("Mixin:Window", () => {
    let WindowMixin;

    beforeEach(() => {
        WindowMixin = Object.assign({}, _WindowMixin);
    });


    describe("componentWillMount()", () => {

        it("adds a resize event listener that calls WindowMixin._onResize()", () => {
            window.addEventListener = expect.createSpy();
            WindowMixin.componentWillMount();
            expect(window.addEventListener).toHaveBeenCalledWith("resize", WindowMixin._onResize);
        });
    });


    describe("componentWillUnmount()", () => {

        it("removes resize event listener that calls WindowMixin._onResize()", () => {
            window.removeEventListener = expect.createSpy();
            WindowMixin.componentWillUnmount();
            expect(window.removeEventListener).toHaveBeenCalledWith("resize", WindowMixin._onResize);
        });
    });


    describe("getInitialState()", () => {
        it("calls setState() with return value of _getWindowState()", () => {
            WindowMixin._getWindowState = () => { return "state"; };
            expect(WindowMixin.getInitialState()).toEqual("state");
        });
    });


    describe("_getWindowState()", () => {

        describe("sets state.window appropriately", () => {

            beforeEach(() => {
                WindowMixin.setState = expect.createSpy();
            });

            it("on desktop", () => {
                window.innerWidth = 992;
                WindowMixin._onResize();
                expect(WindowMixin.setState).toHaveBeenCalledWith({
                    window: {
                        height: window.innerHeight,
                        width: window.innerWidth,
                        isTablet: false,
                        isMobile: false
                    }
                });
            });

            it("on tablet", () => {
                window.innerWidth = 991;
                WindowMixin._onResize();
                expect(WindowMixin.setState).toHaveBeenCalledWith({
                    window: {
                        height: window.innerHeight,
                        width: window.innerWidth,
                        isTablet: true,
                        isMobile: false
                    }
                });
            });

            it("on mobile", () => {
                window.innerWidth = 414;
                WindowMixin._onResize();
                expect(WindowMixin.setState).toHaveBeenCalledWith({
                    window: {
                        height: window.innerHeight,
                        width: window.innerWidth,
                        isTablet: false,
                        isMobile: true
                    }
                });
            });
        });
    });


    describe("_onResize()", () => {
        it("calls setState() with return value of _getWindowState()", () => {
            WindowMixin.setState = expect.createSpy();
            WindowMixin._onResize();
            expect(WindowMixin.setState).toHaveBeenCalledWith(WindowMixin._getWindowState());
        });
    });
});

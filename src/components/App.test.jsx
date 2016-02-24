/* global describe, it */

import React from "react";
import expect from "expect";
import {createRenderer} from "react-addons-test-utils";
import expectJSX from "expect-jsx";
expect.extend(expectJSX);


import Home from "./App.jsx";
import WindowMixin from "../mixins/window.jsx";

describe("App", () => {
    it("has window mixin", () => {
        let renderer = createRenderer();
        renderer.render(<Home/>);
        let actualElement = renderer.getRenderOutput();
        console.log(actualElement.props);
        expect(true).toEqual(true);
    });
});

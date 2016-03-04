/* global describe, it, beforeEach */

import React from "react";
import expect from "expect";
import { shallow } from "enzyme";
import Landing from "./Landing.jsx";


describe("Component:Landing", () => {

    beforeEach(function() {
        this.component = shallow(<Landing />);
    });

    it("contains div with class of 'src_components_App_jsx-classes-background'", function() {
        var background = this.component.find("div.src_components_App_jsx-classes-background");
        expect(background.length).toEqual(1);
    });

    it("renders <Home />", function() {
        expect(this.component.find("Home").length).toEqual(1);
    });
});

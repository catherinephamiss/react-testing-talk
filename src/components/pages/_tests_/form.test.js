import React from "react";
import Form from "../form";
import renderer from "react-test-renderer";
import expectExport from "expect";

/*
 * Test are just chunks of code that are used to test code that manages our business logic.
 * Testing can be integrated into your deployment pipeline to make sure you don't ship any breaking bugs
 */

//Let's start by taking a snapshot of the form component. A snapshot is a look at how the component renders and looks for unexpected changes.
//snap shot are an test a component's implementation, which, can change. They are easily updated and truthfully, not that useful.
it("renders correctly", () => {
  const tree = renderer.create(<Form />).toJSON;
  expectExport(tree).toMatchSnapshot();
});

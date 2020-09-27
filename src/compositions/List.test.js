import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom";
import List from "./List";

it("renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<List />, div);
    ReactDOM.unmountComponentAtNode(div);
})


import React from "react";
import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import HomePage from "../Containers/HomePage";

Enzyme.configure({ adapter: new Adapter() });

describe("HomePage", () => {
  it("should render a instruction ", () => {
    const component = shallow(<HomePage />);
    expect(component.exists("Instruction")).toEqual(true);
  });
});

import React from "react";
import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "../App";
import QuestionPage from "../Containers/QuestionPage";
import 'regenerator-runtime/runtime';

Enzyme.configure({ adapter: new Adapter() });

describe("App", () => {
  it("Checks App div loads", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(".App").length).toEqual(1);
  });

  it("should render a nav bar ", () => {
    const component = shallow(<App />);
    expect(component.exists("Navigation")).toEqual(true);
  });

  it("should render three Routes", () => {
    const component = shallow(<App />);
    expect(component.find("Route").length).toEqual(3);
  });

  it("should not load Questionpage", () => {
    const component = mount(<App />);
    expect(component.find("#QuestionPage").length).toEqual(0);
  });

  it("should load Homepage", () => {
    const component = mount(<App />);
    expect(component.find("#HomePage").length).toEqual(1);
  });

});

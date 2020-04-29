import React from "react";
import App from "../App";
import HomePage from "../Containers/HomePage";
import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("HomePage", () => {
  it("check the user input", () => {
    const wrapper = mount(<HomePage />);
    const input = wrapper.find("input");
    expect(input).toHaveLength(4);
    // expect(input.prop("type")).toEqual("text");
    // expect(input.prop("name")).toEqual("playerName");
  });

  it("checks player name input", () => {
    const wrapper = mount(<HomePage />);
    const input = wrapper.find("#playerName");
    expect(input).toHaveLength(1);
    expect(input.prop("type")).toEqual("text");
    expect(input.prop("name")).toEqual("Player1");
  });

  it("renders submit button with custom text", () => {
    const wrapper = mount(<HomePage />);
    const button = wrapper.find("button");
    expect(button).toHaveLength(3);
    const buttonChoose = wrapper.find("button").at(2);
    expect(buttonChoose.prop("type")).toEqual("submit");
    expect(buttonChoose.text()).toEqual("Submit");
  });

  it("renders category dropdown box", () => {
    const wrapper = mount(<HomePage />);
    const select = wrapper.find("select");
    const options = wrapper.find("option");
    expect(select).toHaveLength(1);
    expect(options).toHaveLength(24);
  });

  it("Tests the first dropdown option is the correct value", () => {
    const wrapper = mount(<HomePage />);
    const select = wrapper.find("select");
    const optionOne = wrapper.find("option").at(0);
    expect(optionOne.prop("value")).toEqual("9");
  });

  it("Tests the radio button option is the correct value", () => {
    const wrapper = mount(<HomePage />);
    const input = wrapper.find('input[type="radio"]').at(1);
    expect(input.prop("value")).toEqual("medium");
  });

  it("calls onSubmit function when addPlayerButton is submitted", () => {
    const wrapper = mount(<HomePage />);
    wrapper.find("#addPlayerButton").simulate("change", {
      target: { redirect: "true" },
    });
  });
});

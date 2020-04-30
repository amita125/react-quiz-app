import React from "react";
import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "../App";
import QuestionPage from "../Containers/QuestionPage";
import "regenerator-runtime/runtime";
var fetch = require("node-fetch");


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

  it("should not load QuestionPage", () => {
    const component = mount(<App />);
    expect(component.find("#QuestionPage").length).toEqual(0);
  });

  it("should load Homepage", () => {
    const component = mount(<App />);
    expect(component.find("#HomePage").length).toEqual(1);
  });

  it("should set round state to 0 when resetting round", () => {
    const component = mount(<App />);
    const instance = component.instance();
    instance.setState({round:3});
    expect(component.state("round")).toBe(3);
    instance.resetRound();
    expect(component.state("round")).toBe(0);
  })

  it("should reset redirect", () => {
    const component = mount(<App />);
    const instance = component.instance();
    instance.resetRedirect();
    expect(component.state("redirect")).toBe(false);
  })

  it("should increment round when called", async () => {
    const component = mount(<App />);
    const instance = component.instance();
    await instance.incrementRound();
    expect(component.state("round")).toBe(1);
  })

  it("should increment score", async () => {
    const component = mount(<App />);
    const instance = component.instance();
    instance.setState({players: [{ name: "testPlayer", score: "0" }],})
    await instance.incrementScore("testPlayer");
    expect(component.state("round")).toBe(0); //////Broken test
  })

  //Real api test
  it("should test successful API call", async () => {
    const mockData = {
      category: "15",
      level: "easy",
      players: [{ name: "hello123", score: "0" }],
      redirect: false,
    };
    
    const component = mount(<App />);
    const instance = component.instance();
    await instance.getFormData(mockData);
    expect(component.state("data")[0].category).toBe("Entertainment: Video Games");
    expect(component.state("data")[0].difficulty).toBe("easy");
  })

  // it("should test failed API call", async () => {
  //   const mockData = {
  //     category: "invalid",
  //     level: "wrong",
  //     players: [{ name: "hello123", score: "0" }],
  //     redirect: false,
  //   };
    
  //   const component = mount(<App />);
  //   const instance = component.instance();
  //   await instance.getFormData(mockData);
  //   expect(component.state("data")[0].category).toBe("Entertainment: Video Games");
  //   expect(component.state("data")[0].difficulty).toBe("easy");
  // })



  //Fake test

  // it("should test API call", async () => {
  //   const component = mount(<App />);
  //   const instance = component.instance();
  //   const mockData = {
  //     category: "15",
  //     level: "hard",
  //     players: [{ name: "hello123", score: "0" }],
  //     redirect: false,
  //   };
  
  //   instance.getFormData(mockData);
  //   const url = `https://opentdb.com/api.php?amount=5&type=multiple&category=${mockData.category}&difficulty=${mockData.level}`;
  //   const questions = await (await fetch(url)).json();

  //   instance.setState(
  //     {
  //       data: questions.results,
  //     }
  //   )

    // expect(component.state("data")[0].category).toBe("Entertainment: Video Games");
    // expect(component.state("data")[0].difficulty).toBe("hard");
  // })



});

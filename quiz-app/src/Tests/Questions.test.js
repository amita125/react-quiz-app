import QuestionPage from "../Containers/QuestionPage";
import Question from "../Components/Questions";
import AnswerForm from "../Components/AnswerForm";

import React from "react";
//import { render } from "@testing-library/react";
import renderer from "react-test-renderer"; //for snapshot testing
import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
describe("Question component", () => {
  let component;
  beforeEach(() => {
    component = shallow(<Question />);
  });

  // test('Does <Question> get rendered?', () => {
  //   expect(wrapper.find("div");
  // });

  it("Renders div.question-container in Question comp", () => {
    expect(component.exists(".question-container1")).toEqual(true);
  });

  it("Renders <h3> in Question comp", () => {
    expect(component.exists("h3")).toEqual(true);
  });

  it("Renders <p> in Question comp", () => {
    expect(component.exists("p")).toEqual(true);
  });
});

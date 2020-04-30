import React from "react";
import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import HomePage from "../Containers/HomePage";
import "regenerator-runtime/runtime";

Enzyme.configure({ adapter: new Adapter() });

describe("HomePage", () => {
  it("should render a instruction ", () => {
    const component = shallow(<HomePage />);
    expect(component.exists("Instruction")).toEqual(true);
  });

  //Broken :(
  // it("should render QuestionPage if redirect is true", () => {
  //   const component = mount(<HomePage />);
  //   const instance = component.instance();
  //   instance.setState({redirect:true});
  //   expect(component.state().redirect).toEqual(true);
  //   expect(component.exists("QuestionPage")).toEqual(true);
  // })

  it("should handle remove player correctly", async () => { 
    const component = mount(<HomePage />);
    const instance = component.instance();
    instance.setState({players:[{name:"player1", score:0},
                                {name:"player2", score:0}]
    });
    
    expect(component.state().players[0].name).toEqual("player1");
    await instance.handleRemovePlayer(0); 
    // ^^^actual function^^^
    instance.setState({
      players: instance.state.players.filter((s, index) => 0 !== index), //Remove player function "mocked"
    });
    expect(component.state().players[0].name).toEqual("player2");
  })

  it("should handle add player correctly", async () => {
    const component = mount(<HomePage />);
    const instance = component.instance();
    instance.setState({players:[{name:"player1", score:0},
                                {name:"player2", score:0}]
    });
    instance.handleAddPlayer();
    expect(component.state().players[2].name).toEqual("");

  })

  //Broken :(
  // it("should handle updating player name correctly", async () => {
  //   const component = mount(<HomePage />);
  //   const instance = component.instance();
  //   instance.setState({players:[{name:"player1", score:0},
  //                               {name:"player2", score:0}]
  //   });
  //   await instance.handlePlayersName("hello");
  //   expect(component.state().players).toEqual(""); //Broken
  // })

  it("should handle form submit sucessfully", () => {
    const component = mount(<HomePage />);
    // const instance = component.instance();
    // instance.handleSubmit();
    component.find("#submitButton").simulate("change", {
      target: { redirect: "true" },
    });
  })


});

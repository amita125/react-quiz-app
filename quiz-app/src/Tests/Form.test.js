import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Form from "../Components/Form"

Enzyme.configure({ adapter: new Adapter() })

describe("Form", () => {
    it("check the user input", () => {
        const wrapper = mount(<Form />);
        const input = wrapper.find("input");
        expect(input).toHaveLength(4);
        // expect(input.prop("type")).toEqual("text");
        // expect(input.prop("name")).toEqual("playerName");
    });

    it("checks player name input", () => {
        const wrapper = mount(<Form />);
        const input = wrapper.find("#playerName");
        expect(input).toHaveLength(1);
        expect(input.prop("type")).toEqual("text");
        expect(input.prop("name")).toEqual("playerName");
    });

    it("renders submit button with custom text", () => {
        const wrapper = mount(<Form />);    
        const button = wrapper.find("button");    
        expect(button).toHaveLength(1);    
        expect(button.prop("type")).toEqual("submit");    
        expect(button.text()).toEqual("Submit");  
    });

    it("renders category dropdown box", () => {
        const wrapper = mount(<Form />);    
        const select = wrapper.find("select");   
        const options = wrapper.find("option") 
        expect(select).toHaveLength(1);
        expect(options).toHaveLength(5);

        // expect(options.get(0).props("value")).toEqual("general");

        // expect(wrapper.find('select').props().value).toBe('easy')
    });

    it("Tests the first dropdown option is the correct value", () => {
        const wrapper = mount(<Form />);
        const select = wrapper.find('select');
        const optionOne = wrapper.find('option').at(0);
        expect(optionOne.prop("value")).toEqual("general");
    });

});

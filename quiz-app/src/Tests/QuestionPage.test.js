import QuestionPage from '../Containers/QuestionPage';
import Question from '../Components/Questions';
import AnswerForm from '../Components/AnswerForm';

import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer'; //for snapshot testing
import { shallow, mount } from 'enzyme';


describe('Question page', () => {
    let component;
    beforeEach(() => {
        component = shallow(<QuestionPage />)
    });

    // test('Does <Question> get rendered?', () => {
    //   expect(wrapper.find("div");
    // });

    it('Renders <Question> in QuestionPage', () => {
        expect(component.exists(Question)).toEqual(true);
    });

    it('Renders <Answer> in QuestionPage', () => {
        expect(component.exists(AnswerForm)).toEqual(true);
    })

});
import QuestionPage from '../Containers/QuestionPage';
import Question from '../Components/Questions';
import AnswerForm from '../Components/AnswerForm';

import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer'; //for snapshot testing
import { shallow, mount } from 'enzyme';


describe('AnswerForm component', () => {
    let incorrect_answers = ["Fagin","Bull's eye","Mr. Fang"];
    let correct_answer = ["The Artful Dodger"];
    let component;

    beforeEach((data) => {
        component = shallow(<AnswerForm correct_answer={correct_answer} incorrect_answers={incorrect_answers} />)
    });

    // test('Does <Question> get rendered?', () => {
    //   expect(wrapper.find("div");
    // });

    it('Renders div.question-container in Question comp', () => {
        expect(component.exists('form')).toEqual(true);
    });

    // it('number of answers', () => {
    //     expect(expectsomething).toEqual(true);
    // });

});
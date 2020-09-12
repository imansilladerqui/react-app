import React from 'react';
import { shallow } from 'enzyme';
import CardsLayout from './cards-layout';

const setUp = (props={}) => {
    const setUpComponent = shallow(<CardsLayout {...props}/>);
    return setUpComponent;
}

//TEST FOR CSS CHANGES

describe('CardsLayout', () => {

    let component;

    beforeEach(()=>{
        component = setUp();
    })

    test('should has container class', () => {
        const wrapper = component.find('.container');

        expect(wrapper.length).toBe(1);
    });

});
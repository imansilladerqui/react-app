import React from 'react';
import { shallow } from 'enzyme';
import HeaderLayout from './header-layout';

const setUp = (props={}) => {
    const setUpComponent = shallow(<HeaderLayout {...props}/>);
    return setUpComponent;
}

// TEST FOR HTML CHANGES

describe('HeaderLayout', () => {

    let component;

    beforeEach(()=>{
        component = setUp();
    })

    test('should has container class', () => {
        const wrapper = component.find('.container');

        expect(wrapper.length).toBe(1);
    });

    test('should render a title', () => {
        const wrapper = component.find('h3');

        expect(wrapper.length).toBe(1);
    });

    test('should render a subtitle', () => {
        const wrapper = component.find('small');

        expect(wrapper.length).toBe(1);
    });

});
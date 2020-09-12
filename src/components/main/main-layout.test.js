import React from 'react';
import { shallow } from 'enzyme';
import MainLayout from './main-layout';

const setUp = (props={}) => {
    const setUpComponent = shallow(<MainLayout {...props}/>);
    return setUpComponent;
}

//TEST FOR PROPS.CHILDREN MISTAKES

describe('MainLayout', () => {
    describe('With Props', () => {
        
        let component;

        beforeEach(()=>{
            const props = {
                children: 'Beautiful Child'
            }
            component = setUp(props);
        });

        test('should has container class', () => {
            const wrapper = component.find('.container');

            expect(wrapper.length).toBe(1);
        });


        test('should render the props', () => {
            const wrapper = component.text();

            expect(wrapper).toEqual('Beautiful Child');
        });

    });

    describe('Without Props', () => {
        
        let component;

        beforeEach(()=>{
            const props = {}
            component = setUp(props);
        });

        test('should render empty props', () => {
            const wrapper = component.text();

            expect(wrapper).toEqual('');
        });

    });
});
import React from 'react';
import {shallow} from 'enzyme';
import configureStore from 'redux-mock-store';
import Paginator from "../paginator/paginator";
import Cards from "../cards/cards";

import * as redux from 'react-redux'
import Home from './home';


describe('Home', () => {

    let component;
    let useEffect;
    let store;

    const mockUseEffect = () => {
        useEffect.mockReturnValue(() => f => f());
    };

    beforeEach(() => {

        store = configureStore()({
          habitants: [],
          totalItems: 0,
          page:1,
          offset:20
        });

        useEffect = jest.spyOn(React, "useEffect");
        mockUseEffect();
        mockUseEffect();
    
        jest
          .spyOn(redux, "useSelector")
          .mockImplementation(() => store.getState());
    
        jest
          .spyOn(redux, "useDispatch")
          .mockImplementation(() => async(dispatch) => store.dispatch(dispatch));

        component = shallow(
            <Home store={store} />
        );
    });


    describe("on start", () => {
        test("it renders", () => {
          expect(component).not.toBeNull();
          expect(useEffect).toBeCalled();
        });

        test("Paginator renders", () => {
          expect(Paginator.length).toBe(1);
          expect(component.find(Paginator).first().props().totalItems).toBe(store.getState().totalItems)
          expect(component.find(Paginator).first().props().page).toBe(store.getState().page)
          expect(component.find(Paginator).first().props().offset).toBe(store.getState().offset)          
        });

        test("Cards renders", () => {
          expect(Cards.length).not.toBeNull();
        });

    });
});
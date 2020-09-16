import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getHabitants, setFilteredHabitants, setPage} from "../../store/actions/general-actions";
import HeaderLayout from '../../components/header/header-layout';
import MainLayout from "../../components/main/main-layout";
import CardsLayout from "../../components/cards/cards-layout";
import Cards from "../cards/cards";
import PaginatorLayout from "../../components/paginator/paginator-layout";
import Paginator from "../paginator/paginator";
import {isEmpty} from 'lodash';


const queryString = require('query-string');

const Filter = (props) => {

    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    let filtered = queryString.parse(props.location.search);
    let wantedKey = Object.keys(filtered)[0];
    let wantedValue = filtered[wantedKey];

    useEffect(() => {
      if(isEmpty(props.location.search) || isEmpty(state.habitants)) {
          return props.history.push('/');
        }
        dispatch(getHabitants());
        getFilteredHabitants(wantedKey, wantedValue);
    },[props.location.search]);

    const getFilteredHabitants = (wantedKey, wantedValue) => {
      let result = state.habitants.filter((data)=> {
        switch (wantedKey) {
          case 'professions':
          case 'friends':
            if(data[wantedKey].includes(wantedValue)) {
              return data
            }
            break;
          case 'age':
          case 'height':
          case 'weight':
            let toInt = parseFloat(wantedValue);
            if(data[wantedKey] === toInt) {
              return data;
            }
            break;
          default:
            if(data[wantedKey] === wantedValue) {
              return data;
            }
        }
      });
      dispatch(setFilteredHabitants(result));
    }

    const handleSetPage=(page)=>{
      dispatch(setPage(page))
    }

    return (
      <>
        <HeaderLayout/>
        <MainLayout>
          {
            (state.filteredHabitants.length > 20) &&
            <PaginatorLayout>
              <Paginator totalItems={state.totalFilteredItems} page={state.page} handleSetFilterPage={(e)=>handleSetPage(e)}/>
            </PaginatorLayout>
          }
          <h3>This are all the gnomes that have: {wantedKey}</h3>
          <p>{wantedValue}</p>
          <CardsLayout>
            {
              state.filteredHabitants.slice(((state.page-1)*state.offset),(((state.page-1)*state.offset)+state.offset)).map((data, index)=> {
                return <Cards key={index} habitants={data}/>
              })
            }
          </CardsLayout>
          {
            (state.filteredHabitants.length > 20) &&
            <PaginatorLayout>
              <Paginator totalItems={state.totalFilteredItems} page={state.page} handleSetFilterPage={(e)=>handleSetPage(e)}/>
            </PaginatorLayout>
          }
            
        </MainLayout>
      </>
    );
};



export default Filter;
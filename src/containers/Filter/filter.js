import React, {useEffect} from "react";
import {connect} from "react-redux";
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

    let filtered = queryString.parse(props.location.search);
    let wantedKey = Object.keys(filtered)[0];
    let wantedValue = filtered[wantedKey];

    useEffect(() => {
      if(isEmpty(props.location.search) || isEmpty(props.habitants)) {
          return props.history.push('/');
        }
        props.getHabitants();
        getFilteredHabitants(wantedKey, wantedValue);
    },[props.location.search]);

    const getFilteredHabitants = (wantedKey, wantedValue) => {
      let result = props.habitants.filter((data)=> {
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
      props.setFilteredHabitants(result);
    }

    const handleSetPage=(page)=>{
      props.setPage(page)
    }

    return (
      <>
        <HeaderLayout/>
        <MainLayout>
          {
            (props.filteredHabitants.length > 20) &&
            <PaginatorLayout>
              <Paginator totalItems={props.totalFilteredItems} page={props.page} handleSetFilterPage={(e)=>handleSetPage(e)}/>
            </PaginatorLayout>
          }
          <h3>This are all the gnomes that have: {wantedKey}</h3>
          <p>{wantedValue}</p>
          <CardsLayout>
            {
              props.filteredHabitants.slice(((props.page-1)*props.offset),(((props.page-1)*props.offset)+props.offset)).map((data, index)=> {
                return <Cards key={index} habitants={data}/>
              })
            }
          </CardsLayout>
          {
            (props.filteredHabitants.length > 20) &&
            <PaginatorLayout>
              <Paginator totalItems={props.totalFilteredItems} page={props.page} handleSetFilterPage={(e)=>handleSetPage(e)}/>
            </PaginatorLayout>
          }
            
        </MainLayout>
      </>
    );
};

const mapStateToProps = (state) => {
  return {
    habitants: state.general.habitants,
    totalItems: state.general.totalItems,
    totalFilteredItems: state.general.totalFilteredItems,
    page: state.general.page,
    offset: state.general.offset,
    filteredHabitants: state.general.filteredHabitants
  };
};

export default connect(mapStateToProps, {
    getHabitants,
    setFilteredHabitants,
    setPage
})(Filter);
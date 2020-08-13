import React, {useEffect} from "react";
import {connect} from "react-redux";
import {getHabitants,setPage, setOffset} from "../../store/actions/general-actions";
import HeaderLayout from '../../components/header/header-layout';
import MainLayout from "../../components/main/main-layout";
import CardsLayout from "../../components/cards/cards-layout";
import Cards from "../cards/cards";
import PaginatorLayout from "../../components/paginator/paginator-layout";
import Paginator from "../paginator/paginator";
import { useMediaQuery } from "react-responsive";

const Home = (props) => {

    const isMobile = useMediaQuery({ query: "(max-width: 959px)" });
    const responsiveOffset = (isMobile) ? 10 : 20;

    useEffect(() => {
        props.getHabitants();
        props.setOffset(responsiveOffset)
      },[]);

    const handleSetPage=(page)=>{
      props.setPage(page)
    }

    return (
      <>
        <HeaderLayout/>
        <MainLayout>
            <PaginatorLayout>
              <Paginator totalItems={props.totalItems} page={props.page} offset={props.offset} handleSetFilterPage={(e)=>handleSetPage(e)}/>
            </PaginatorLayout>
            <CardsLayout>
              {
                props.habitants.slice(((props.page-1)*props.offset),(((props.page-1)*props.offset)+props.offset)).map((data, index)=> {
                  return <Cards key={index} habitants={data}/>
                })
              }
            </CardsLayout>
            <PaginatorLayout>
              <Paginator totalItems={props.totalItems} page={props.page} handleSetFilterPage={(e)=>handleSetPage(e)}/>
            </PaginatorLayout>
        </MainLayout>
      </>
    );
};

const mapStateToProps = (state) => {
  return {
    habitants: state.general.habitants,
    totalItems: state.general.totalItems,
    page: state.general.page,
    offset: state.general.offset
  };
};

export default connect(mapStateToProps, {
    getHabitants,
    setPage,
    setOffset,
})(Home);
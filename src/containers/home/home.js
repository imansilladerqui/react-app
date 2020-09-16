import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getHabitants,setPage, setOffset} from "../../store/actions/general-actions";
import HeaderLayout from '../../components/header/header-layout';
import MainLayout from "../../components/main/main-layout";
import CardsLayout from "../../components/cards/cards-layout";
import Cards from "../cards/cards";
import PaginatorLayout from "../../components/paginator/paginator-layout";
import Paginator from "../paginator/paginator";
import { useMediaQuery } from "react-responsive";

const Home = () => {

    const dispatch = useDispatch();

    const state = useSelector((state) => state);
    const isMobile = useMediaQuery({ query: "(max-width: 959px)" });
    const responsiveOffset = (isMobile) ? 10 : 20;

    useEffect(() => {
        dispatch(getHabitants());
        dispatch(setOffset(responsiveOffset))
      },[]);

    const handleSetPage=(page)=>{
        dispatch(setPage(page))
    }

    return (
      <>
        <HeaderLayout/>
        <MainLayout>
            <PaginatorLayout>
              <Paginator totalItems={state.totalItems} page={state.page} offset={state.offset} handleSetFilterPage={(e)=>handleSetPage(e)}/>
            </PaginatorLayout>
            <CardsLayout>
              {
                state.habitants.slice(((state.page-1)*state.offset),(((state.page-1)*state.offset)+state.offset)).map((data, index)=> {
                  return <Cards key={index} habitants={data}/>
                })
              }
            </CardsLayout>
            <PaginatorLayout>
              <Paginator totalItems={state.totalItems} page={state.page} handleSetFilterPage={(e)=>handleSetPage(e)}/>
            </PaginatorLayout>
        </MainLayout>
      </>
    );
};

export default Home;
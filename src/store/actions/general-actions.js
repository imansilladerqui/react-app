import * as actionTypes from "./types";
import {axiosInstance} from "../../utils/axios";


export const getHabitants = () => async (dispatch) => {
  await axiosInstance.get("/data.json")
  .then((response)=>{
    dispatch({ 
      type: actionTypes.GET_HABITANTS,
      payload: response.data.Brastlewark, 
    });
  })
  .catch((error)=>{
    throw error;
  });
};

export const setPage = (page) => async (dispatch) => {
  dispatch({ 
    type: actionTypes.SET_PAGE,
    payload: page, 
  });
};

export const setFilteredHabitants = (filteredHabitants) => async (dispatch) => {
  dispatch({ 
    type: actionTypes.SET_FILTERED_HABITANTS,
    payload: filteredHabitants, 
  });
};

export const setOffset = (offset) => async (dispatch) => {
  dispatch({ 
    type: actionTypes.SET_OFFSET,
    payload: offset, 
  });
};
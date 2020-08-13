import * as actionType from "../actions/types";

const GENERAL_STATE = {
  habitants: [],
  totalItems: 0,
  totalFilteredItems: 0,
  page:1,
  offset:20,
  filteredHabitants:[]
};

export default (state = GENERAL_STATE, action) => {
    switch (action.type) {
      case actionType.GET_HABITANTS:
        let totalItems = action.payload.length;
        return {
          ...state,
          habitants: action.payload,
          totalItems: totalItems
        };
      case actionType.SET_PAGE:
        return {
          ...state,
          page: action.payload
        };
      case actionType.SET_FILTERED_HABITANTS:
        let totalFilteredItems = action.payload.length;
        return {
          ...state,
          filteredHabitants: action.payload,
          totalFilteredItems: totalFilteredItems
        };
      case actionType.SET_OFFSET:
        return {
          ...state,
          offset: action.payload
        };
      default:
        return state;
    }
};
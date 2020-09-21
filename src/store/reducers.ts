import { useReducer } from "react";
import { state, stateType } from "./state";

const reducer = (
  state: stateType,
  action: { type: string; payload: { data: object; isLoaded: boolean } }
) => {
  switch (action.type) {
    case "GET_LIST":
      return {
        ...state,
        list: { data: action.payload.data, isLoaded: action.payload.isLoaded },
      };

    case "GET_OVERVIEW":
      return {
        ...state,
        overview: {
          data: action.payload.data,
          isLoaded: action.payload.isLoaded,
        },
      };

    case "GET_BOOK_CATEGORY_NAMES":
      return {
        ...state,
        names: { data: action.payload.data, isLoaded: action.payload.isLoaded },
      };

    case "GET_BOOK_REVIEWS":
      return {
        ...state,
        reviews: {
          data: action.payload.data,
          isLoaded: action.payload.isLoaded,
        },
      };

    default:
      return state;
  }
};

const useGlobalState = () => {
  const [globalState, globalDispatch] = useReducer(reducer, state);

  return { globalState, globalDispatch };
};

export default useGlobalState;

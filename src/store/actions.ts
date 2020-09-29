import { useContext, useEffect } from "react";
import { GlobalContext } from "./context";
import api from "../utils/api";

export const useGetOverview = () => {
  const { globalState, globalDispatch } = useContext(GlobalContext);

  useEffect(() => {
    api.getOverview().then((res) =>
      globalDispatch({
        type: "GET_OVERVIEW",
        payload: {
          data: res.data,
          isLoaded: true,
        },
      })
    );
  }, [globalDispatch]);

  return {
    overview: globalState.overview.data,
    isLoaded: globalState.overview.isLoaded,
  };
};

export const useGetList = (list: string) => {
  const { globalState, globalDispatch } = useContext(GlobalContext);

  useEffect(() => {
    api.getList({ list }).then((res) =>
      globalDispatch({
        type: "GET_LIST",
        payload: {
          data: res.data,
          isLoaded: true,
        },
      })
    );
  }, [globalDispatch, list]);

  return {
    booksList: globalState.list.data,
    isLoaded: globalState.list.isLoaded,
  };
};

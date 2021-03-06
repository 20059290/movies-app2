import React, { useState, createContext, useEffect, useReducer } from "react";
import { getMovies, getTopRated } from "./api/movie-api";

export const MoviesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "load":
      return { movies: action.payload.result};
    // case "loadTopRated":
    //   return { toprated: action.payload.result};
    default:
      return state;
  }
};

const MoviesContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, { movies: []});
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    getMovies().then(result => {
      console.log(result);
      dispatch({ type: "load", payload: {result}});
    });
  },[]);

  // useEffect(() => {
  //   getTopRated().then(result => {
  //     console.log(result);
  //     dispatch({ type: "loadTopRated", payload: {result}});
  //   });
  // },[]);

  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        // toprated: state.toprated,
        setAuthenticated
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider
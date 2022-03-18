import { Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import Footer from "./Footer";
import Layout from "./Layout";
import Movie from "./Movie";
import Movies from "./Movies";
import Navigation from "./Navigation";
import Search from "./Search";
import { Global } from "../styled/Global";
import Grid from "../styled/Grid";

const films = [
  { id: 1, title: "first movie" },
  { id: 2, title: "second movie" },
];

const theme = {
  bg: "orange",
  bg2: "grey",
  media: {},
  grid: {
    mobil: {
      gridArea: `
      'navi'
      'search'
      'main'
      'footer'
      `,
    },
    desktop: {
      ipad: "768px",
      gridArea: `
      'navi navi navi'
      'search search search'
      'main main main'
      'footer footer footer'
      `,
    },
  },
};
console.log(theme.grid.desktop.gridArea);
/* console.log(theme.grid.desktop.ipad); */
const Main = () => {
  //state variabler

  //here search state is added dafault search query.
  const [search, setSearch] = useState("star wars");

  //movie state is sent to to both Movies and Movie component
  //Movies component is parenent route component and Movie is child component of it.
  //Movies component renders all movies list on front page
  //Movie component is the read more button option on each movie.
  //Movie component is using dynamic routing with useParams to fetch child component url and render data from it by comparing movie object from API to url and run find() on it.
  const [movie, setMovie] = useState("");

  //this is state to render only 5 star wars movies when component mounts by setting state to false.
  const [limit, setLimit] = useState(true);

  //fetch API

  const key = "fbf838ec";
  /* console.log('Key: ' + key); */

  /* const url = 'http://www.omdbapi.com/?apikey=[yourkey]&' */

  const url = "http://www.omdbapi.com/?apikey=fbf838ec&s=";
  /* const url = "http://www.omdbapi.com/?apikey=fbf838ec&s=star+wars"; */

  const data = async () => {
    try {
      const response = await fetch(`${url}${search}`);
      const data = await response.json();
      /* console.log(data); */
      if (response.ok) {
        /*         const newMovies = [...movie, {id: 1, name: 'yaya'}];
         */ setMovie(data.Search);
        /* console.log(newMovies);  
        console.log(movie);  */
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log("component renders");
    const data = async () => {
      try {
        const response = await fetch(`${url}${search}`);
        const data = await response.json();
        /* console.log(data); */
        if (response.ok) {
          /*         const newMovies = [...movie, {id: 1, name: 'yaya'}];
           */ //if check to make sure that only 5 star wars movies is rendered when component mounts at first time.
          //if check is using limit, setLimit state and setMovie
          //source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
          if (limit) {
            /* console.log("working"); */
            setMovie(data.Search.slice(0, 5));
            setLimit(false);
            /* console.log(data.Search.slice(0,4)); */
          } else {
            setMovie(data.Search);
          }
          /* console.log(newMovies);  
            console.log(movie);  */
        }
      } catch (error) {
        console.error(error);
      }
    };

    data();
    return () => {
      console.log("component");
    };
  }, [search]);

  const path = useLocation().pathname;

  return (
    <>
      <ThemeProvider theme={theme}>
        <Global />
        <Grid>
          <Navigation />
          {/*  <Search 
        search={search}
        setSearch={setSearch}
        /> */}
          {/* search field shows only when path is at homepage */}
          {path === "/" ? (
            <Search search={search} setSearch={setSearch} />
          ) : null}
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                index
                element={
                  <Movies
                    /* movies={films} */ movies={movie}
                    search={search}
                    setSearch={setSearch}
                  />
                }
              />
              <Route
                path=":id"
                element={<Movie test={films} movie={movie} />}
              />
            </Route>
          </Routes>
          <Footer />
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default Main;

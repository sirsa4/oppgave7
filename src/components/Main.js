import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import {useState, useEffect} from 'react';
import Footer from "./Footer";
import Layout from "./Layout";
import Movie from "./Movie";
import Movies from "./Movies";
import Navigation from "./Navigation";
import Search from "./Search";

const films = [
  {id: 1, title: 'first movie'},
  {id: 2, title: 'second movie'},
];

const theme = {
  bg: "cyan",
  media: {
    desktop: '768px',
  }
};

const Main = () => {
  //state variabler
  const [search, setSearch] = useState([]);
  const [movie, setMovie] = useState('');

  //fetch API

  const key = "fbf838ec";
  console.log('Key: ' + key);

  /* const url = 'http://www.omdbapi.com/?apikey=[yourkey]&' */

  const url = "http://www.omdbapi.com/?apikey=fbf838ec&s=star+wars";

  const data = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      /* console.log(data); */
      if(response.ok){
        console.log('hi');
/*         const newMovies = [...movie, {id: 1, name: 'yaya'}]; 
 */        setMovie(data.Search);
          console.log();
        /* console.log(newMovies);  
        console.log(movie);  */ 
      }
    } catch (error) {
      console.error(error);
    } 
  };

    useEffect(()=>{
       data();
    },[]);
  
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navigation />
        <button type="button" onClick={data}>Get Data</button>
        {
          movie?.length > 0? movie.map((item)=>{
            return /* console.log(item) */;
          }) : null
        }
        <Search 
        search={search}
        setSearch={setSearch}
        />
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Movies movies={films} movie={movie} />} />
            <Route path=":id" element={<Movie movie={films} />} />
          </Route>
        </Routes>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Main;

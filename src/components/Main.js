import { Routes, Route, useParams, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import {useState, useEffect} from 'react';
import Footer from "./Footer";
import Layout from "./Layout";
import Movie from "./Movie";
import Movies from "./Movies";
import Navigation from "./Navigation";
import Search from "./Search";
import { Global } from "../styled/Global";

const films = [
  {id: 1, title: 'first movie'},
  {id: 2, title: 'second movie'},
];


const theme = {
  bg: "cyan",
  desktop: 768 + 'px',
  media: {
    
  },
  grid: {
    mobil: {
      gridArea: `
      'n'
      'm'
      'f'
      `,
    }
  }
};


const Main = () => {
  //state variabler
  const [search, setSearch] = useState('star wars');
  const [movie, setMovie] = useState('');

  //fetch API

  const key = "fbf838ec";
  console.log('Key: ' + key);

  /* const url = 'http://www.omdbapi.com/?apikey=[yourkey]&' */

  //here search state is added dafault search query.
  const url = "http://www.omdbapi.com/?apikey=fbf838ec&s=";
  /* const url = "http://www.omdbapi.com/?apikey=fbf838ec&s=star+wars"; */

  const data = async () => {
    try {
      const response = await fetch(`${url}${search}`);
      const data = await response.json();
      /* console.log(data); */
      if(response.ok){
        
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
    },[search]);


    const path = useLocation().pathname;
    
  
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global/>
        <Navigation />
       {/*  <Search 
        search={search}
        setSearch={setSearch}
        /> */}
        {/* search field shows only when path is at homepage */}
        {path === '/'? <Search 
        search={search}
        setSearch={setSearch}
        />  : null}
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Movies /* movies={films} */ movies={movie} 
            search={search}
            setSearch={setSearch}
            />} />
            <Route path=":id" element={<Movie test={films}
            movie={movie}
            />} />
          </Route>
        </Routes>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Main;

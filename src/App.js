//fetch API

const key = 'fbf838ec'; 
console.log(key);




/* const url = 'http://www.omdbapi.com/?apikey=[yourkey]&' */

const url = 'http://www.omdbapi.com/?apikey=fbf838ec&s=star+wars';

const data = async()=>{
  try {
      const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  } catch (error) {
      console.error(error);
  }
}

data();



function App() {
  return (
    <div className="App">
      <h1>useEffect</h1>
    </div>
  );
}

export default App;

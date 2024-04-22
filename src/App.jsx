import { useState, useEffect } from "react";
import Input from "./Input";
import Display from "./Display";
import axios from "axios";

function App() {
  const [movies,setmovie] = useState([]);
  const [query,setQuery] = useState("");

  useEffect(
    () => {
      let api = "";
      if(query != ""){
        api = `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${query}`
      }else{
        api = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
        
      }

      axios.get(api)
      .then(
        (success) => {
          setmovie(success.data.results);
        }
      )
      .catch(
        (error) => {
          console.log(error);
        }
      )
    },
    [query]
  )

  const inputHandler = (data) => {
    setQuery(data);
  }

  return (
    <div className="container bg-black my-2">
      <Input inputHandler={inputHandler} />
      <Display movies={movies} />
    </div>
  );
}

export default App;

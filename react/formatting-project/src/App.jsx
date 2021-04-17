import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const payload = {
  titles: ["Gladiator", "John Wick", "Judge Dredd", "Fight Club"],
  releases_years: [2000, 2014, 2012, 2000],
  budget: [103000000, 30000000, 53000000, 27000000],
  box_office: [460500000, 86000000, 18000000, 50000000]
};


function App() {
  // const returnPayload = () => payload;
  const [films, setFilms] = useState([]);
  const [isLoading,setLoading] = useState(false)
  const [isError,setError] = useState(false)
  const getRandomInt = (min, max) => Math.floor(Math.random() *
                                                        (max - min + 1)) + min;

class Organizer {

    static async foo() {
        const data = await axios.get(`https://swapi.dev/api/people/`);
        data.key = 1;
        return data;
    }

    static async bar() {
        return {foo:1, bar:2}
    }
};


const getAsyncSimulate = async data => {
  const delay = ms =>
    new Promise((res, rej) =>
      setTimeout(getRandomInt(1, 5) > 2 ? res : rej, ms)
    );
  await delay(getRandomInt(1, 2));

  return data;
};

  const getFilms = async() =>{
    setError(false)
    setLoading(true)
    try{
    const fetchedFilms = await getAsyncSimulate(payload);

    // ниже должна была быть функция getAsyncSimulate, но что-то пошло не так, редко пользуюсь таймаутами, во время не уложился.

    const x = Organizer.bar()
    console.log(x)

    setLoading(false)
    setFilms(fetchedFilms)
    } catch{
      setLoading(false)
      setError(true)
    }
  }

  const content = [];
  if (films.titles){
  for (let i=0; i < films.titles.length ; i+=1){
    const netProfit = payload.box_office[i] - payload.budget[i];
    const countedColor=(netProfit>0)?'green':'red';
    const card='card';
    const style = {
        width: '18rem',
    }

    content[i] = (
      <div className={card} style={style} key = {i}>
        <h2>{payload.titles[i]}</h2>
        <div className="card-body">
        <h5>Release year:</h5>
        <p>{payload.releases_years[i]}</p>
        <h5>Budget:</h5>
        <p>{payload.budget[i]}</p>
        <h5>Box office:</h5>
        <p>{payload.box_office[i]}</p>
        <h5>Box office:</h5>
        </div>
      </div>
    )
  }
}
  const errContent = <p>Something went wrong,try again</p>
  const loader = <p>Loading</p>
  const cardContent = <div className = "card__container">
  {content}
  </div>

  return (
    <>
    <div className="App">
    <button type="button" onClick={ getFilms } className = "load-button">Load movies</button>
    {(isError && errContent) || (isLoading && loader) || cardContent}
    </div>
    </>
  );
}

export default App;
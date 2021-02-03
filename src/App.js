import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
import Welcome from "./Screens/Welcome/Welcome";
import Navigation from './Components/Navigation/Navigation'
import Students from './Screens/StudentPage/Students'

function App() {
  const [students, setStudents] = useState([]);
  const [getStudents, setGetStudents] = useState(false)
  const [proHeroes, setProHeroes] = useState([]);
  const [villains, setVillains] = useState([]);

  useEffect(() => {
    const gatherStudents = async () => {
      const students = await axios(
        "https://myheroacademiaapi.com/api/character?occupation=student"
      );
      console.log(students.data.result);
      setStudents(students.data.result)
    };
    gatherStudents();
  }, [getStudents]);

  // useEffect(() => {
  //   const gatherHeroes = async () => {
  //     const proHero = await axios(
  //       "https://myheroacademiaapi.com/api/character?occupation=hero"
  //     );
  //     console.log(proHero.data.result);

  //   };
  //   gatherHeroes();
  // }, [proHeroes]);

  // useEffect(() => {
  //   const leagueOfVillains = async () => {
  //     const leagueOfV = await axios(
  //       "https://myheroacademiaapi.com/api/character?occupation=villain"
  //     );
  //     console.log(leagueOfV.data.result);
  //   };
  //   leagueOfVillains();
  // }, [villains]);

  return (
    <div className="App">
      <Route path="/" exact>
        <Welcome />
      </Route>
      <Route path='/plus' exact>
        <h1>Plus Ultra! </h1>
        <Navigation/>
      </Route>
      <Route path='/plus/students'>
      <Students students={students} />
      </Route>
    </div>
  );
}

export default App;

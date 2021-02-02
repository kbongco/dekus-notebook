import React, { useState, useEffect } from 'react'
import { Route } from "react-router-dom";
import './App.css';
import axios from 'axios'
import Welcome from './Screens/Welcome/Welcome'


function App() {
  const [students, setStudents] = useState([])
  const [proHeroes, setProHeroes] = useState([])
  const [villains, setVillains] = useState([])

  useEffect(() => {
    const gatherStudents = async () => {
      const students = await axios("https://myheroacademiaapi.com/api/character?occupation=student")
      console.log(students.data.result)
    }
    gatherStudents()
  }, [students])
  
  useEffect(() => {
    const gatherHeroes = async () => {
      const proHero = await axios("https://myheroacademiaapi.com/api/character?occupation=hero")
      console.log(proHero.data.result)
    }
    gatherHeroes()
  }, [proHeroes])
  
  useEffect(() => {
    const leagueOfVillains = async () => {
      const leagueOfV = await axios("https://myheroacademiaapi.com/api/character?occupation=villain")
      console.log(leagueOfV.data.result)
    }
    leagueOfVillains()
  },[villains])
  
  return (
    <div className="App">
      <Route exact='/'>
        <Welcome />
      </Route>
      <h1>Plus Ultra! </h1>
      </div>
  );
}

export default App;

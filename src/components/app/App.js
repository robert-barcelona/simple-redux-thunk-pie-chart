import React from "react"
import "bulma/bulma.sass"
import "../../"
import "./app.scss"
import BreedList from "../breedlist/BreedList"
import BreedChart from "../breedchart/BreedChart"
//import Error from "../error/Error";

const App = () => {
  return (
    <div className="app">
      <BreedList />
      <BreedChart />
    </div>
  )
}

export default App

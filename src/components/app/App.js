import React from "react"
import "./app.scss"
import BreedList from "../breedlist/BreedList"
import BreedChart from "../breedchart/BreedChart"
import Spinner from "../spinner/Spinner"

const App = () => {
  return (
    <section className="app ">
      <Spinner/>
      <BreedList/>
      <BreedChart/>
    </section>
  )
}

export default App

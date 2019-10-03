import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import "./app.scss"
import BreedList from "../breedlist/BreedList"
import BreedChart from "../breedchart/BreedChart"
import Spinner from "../spinner/Spinner"
import {
  getAllBreedImages,
  getAllBreeds,
  processChartData
} from "../../redux/action-creators"

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getAllBreeds())
      await dispatch(getAllBreedImages())
      await dispatch(processChartData())
    }
    fetchData()
  }, [])

  return (
    <section className="app ">
      <Spinner />
      <BreedList />
      <BreedChart />
    </section>
  )
}

export default App

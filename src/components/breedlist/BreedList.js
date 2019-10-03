import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllBreedImages, getAllBreeds } from "../../redux/action-creators"
import "./breedList.scss"

const Breeds = () => {
  const chartData = useSelector(state => state.chartData)

  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getAllBreeds())
      await dispatch(getAllBreedImages())
    }
    fetchData()
  }, [])

  return <div className="breedList">
    <span className="title">Breed Pictures</span>

    {chartData.map(datum => {
      const [name, images] = datum
      return <p key={name}>{name} : {images}</p>
    })}</div>
}

export default Breeds

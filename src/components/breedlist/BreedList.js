import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllBreedImages, getAllBreeds } from "../../redux/action-creators"

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

  return <div>{chartData.map(datum => {
    const [name,images] = datum
    return <p>{name} : {images}</p>
  })}</div>
}

export default Breeds

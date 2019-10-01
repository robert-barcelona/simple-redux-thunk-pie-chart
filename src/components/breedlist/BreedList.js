import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllBreedImages, getAllBreeds } from "../../redux/action-creators"

const Breeds = () => {
  const breeds = useSelector(state => state.breeds)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getAllBreeds())
      await dispatch(getAllBreedImages())
    }
    fetchData()
  }, [])

  return <div>Hi</div>
}

export default Breeds

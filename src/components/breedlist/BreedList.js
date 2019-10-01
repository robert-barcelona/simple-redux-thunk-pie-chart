import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllBreeds } from "../../redux/action-creators"

const Breeds = () => {
  const breeds = useSelector(state => state.breeds)
  const dispatch = useDispatch()

  useEffect( () => {
    dispatch(getAllBreeds())
  }, [])

  return (<div>Hi</div>)
}

export default Breeds

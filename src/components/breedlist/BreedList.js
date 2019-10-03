import React from "react"
import { useSelector } from "react-redux"

import "./breedList.scss"

const Breeds = () => {
  const chartData = useSelector(state => state.chartData)

  return (
    <div className="breedList">
      <span className="title">Breed Pictures</span>

      {chartData.map(datum => {
        const [name, images] = datum
        return (
          <p key={name}>
            {name} : {images}
          </p>
        )
      })}
    </div>
  )
}

export default Breeds

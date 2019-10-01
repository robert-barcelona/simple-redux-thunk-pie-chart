import React from "react"
import { useSelector } from "react-redux"
import randomColor from 'randomcolor'

import PieChart from "react-minimal-pie-chart"

const BreedChart = () => {
  const chartData = useSelector(state => state.chartData)

  const pieData = chartData.map(datum => {
    const [name,images] = datum
    return ({title:name,value:images,color:randomColor()})
  })

  return (
    <div>
      {pieData && pieData.length !== 0 && <PieChart data={pieData} label={labelProps => labelProps.data.title} />}
    </div>
  )
}

export default BreedChart

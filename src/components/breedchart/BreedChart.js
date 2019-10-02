import React from "react"
import { useSelector } from "react-redux"
import { VictoryPie } from "victory"

const BreedChart = () => {
  const chartData = useSelector(state => state.chartData)

  const pieData = chartData.map(datum => {
    const [name, images] = datum
    return { label: name, x: images }
  })

  return (
    <div>
      {pieData && pieData.length !== 0 && <VictoryPie data={pieData} />}
    </div>
  )
}

export default BreedChart

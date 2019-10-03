import React from "react"
import { useSelector } from "react-redux"
import { VictoryPie } from "victory"
import "./breedChart.scss"

const BreedChart = () => {
  const chartData = useSelector(state => state.chartData)

  const pieData = chartData.map(datum => {
    const [name, images] = datum
    return { x: name, y: images }
  })

  return (
    <div className="pieChart">
      {pieData && pieData.length !== 0 && (
        <VictoryPie
          colorScale={"heatmap"}
          width={400}
          height={400}
          data={pieData}
        />
      )}
    </div>
  )
}

export default BreedChart

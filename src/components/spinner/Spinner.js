import React from "react"
import { PropagateLoader } from "react-spinners"
import { useSelector } from "react-redux"

export default () => {
  const loading = useSelector(state => state.apiState)
  return (
    <div className="sweet-loading">
      {loading && (
        <PropagateLoader
          sizeUnit={"px"}
          size={15}
          color={"#123abc"}
          loading={loading}
        />
      )}
    </div>
  )
}

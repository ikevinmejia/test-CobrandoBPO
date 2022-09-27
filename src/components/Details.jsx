import React from 'react'

export const Details = ({data}) => {
  return (
    <div className="Details-container">
    <p>Change in the last 24h: {data.percent_change_24h
} </p>
    <p>Change in the last 1h: {data.percent_change_1h
} </p>
    <p>Change in the last 7d: {data.percent_change_7d
}</p>
    <p>Market cap: {data.market_cap_usd

}</p>
    </div>
  )
}

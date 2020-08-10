import React from 'react'

export const buildRadio = ({ opts, values }) => {
  return (
    <form>
      <h4>{opts.round}</h4>
      {values.map((v) => (
        <input key={v} type="radio" name={v} value={v} />
      ))}
    </form>
  )
}

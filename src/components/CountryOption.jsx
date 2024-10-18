import React from 'react'

const CountryOption = ({ id, country }) => {
  return (
    <option id={id} value={`${country} (${id})`} key={`${id}`}>{`${country} (${id})`}</option>
  )
}

export default CountryOption

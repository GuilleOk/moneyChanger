import React, { useEffect, useState } from 'react'
import CountryOption from './CountryOption'
import { handlerSelect } from '../handlers/handlerSelect'

const MoneySelect = ({ countries, setCountries, setCountryToChange, setCountryReference, switchMoneyType }) => {
  const [selectedOption, setSelectedOption] = useState('')

  useEffect(() => {
    fetch('../../assets/countries.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error en el fetch')
        } else { return response.json() }
      })
      .then(data => setCountries(data))
      .catch(error => console.error('Error en el fetch de datos: ', error))
  }, [])

  const handlerChange = (e) => {
    const selectElements = Array.from(e.target.options)
    // eslint-disable-next-line array-callback-return
    const { countryS, selectedO } = handlerSelect({ selectElements, countries })
    setSelectedOption(selectedO)
    if (switchMoneyType) { // si switchMoneyType == true entonces me refiero a countryToChange
      setCountryToChange(countryS)
    } else {
      setCountryReference(countryS)
    }
  }
  return (
    <>
      <select onChange={handlerChange} value={selectedOption} className='form-select w-100'>
        <option value=' ' style={{ display: 'none' }}> </option>
        {
          countries.map(({ id, country }) => {
            return (
              <CountryOption key={id} id={id} country={country} />
            )
          })
        }
      </select>
    </>
  )
}

export default MoneySelect

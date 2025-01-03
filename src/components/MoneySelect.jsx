import React, { useEffect, useState } from 'react'
import CountryOption from './CountryOption'
import { handlerSelect } from '../handlers/handlerSelect'
import countriesList from '../countries.json'

const MoneySelect = ({ countries, setCountries, setCountryToChange, setCountryReference, switchMoneyType }) => {
  const [selectedOption, setSelectedOption] = useState('')

  useEffect(() => {
    setCountries(countriesList)
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

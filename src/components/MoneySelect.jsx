import React, { useEffect, useState } from 'react'
import CountryOption from './CountryOption'

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
    const countriesCopy = [...countries]
    const selectElements = Array.from(e.target.options)
    // eslint-disable-next-line array-callback-return
    selectElements.map(element => {
      if (element.selected) {
        // eslint-disable-next-line array-callback-return
        countriesCopy.map(country => {
          if (switchMoneyType) { // si switchMoneyType == true entonces me refiero a countryToChange
            // de lo contrario a countryReference
            if (country.id === element.id) {
              country.countryToChange = true
              setCountryToChange({ country: country.country, flag: country.flag, id: country.id })
              setSelectedOption(`${country.country} (${country.id})`)
            } else {
              country.countryToChange = false
            }
          } else {
            if (country.id === element.id) {
              country.countryReference = true
              setSelectedOption(`${country.country} (${country.id})`)
              setCountryReference({ country: country.country, flag: country.flag, id: country.id })
            } else {
              country.countryReference = false
            }
          }
        })
      }
    })
    setCountries(countriesCopy)
  }
  return (
    <>
      <select onChange={handlerChange} value={selectedOption} className='form-select w-100'>
        <option value=' ' style={{display: 'none'}}> </option>
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

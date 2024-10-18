import React, { useState, useEffect } from 'react'
import InputReference from './components/InputReference'
import MoneySelect from './components/MoneySelect'
import MoneyChanged from './components/MoneyChanged'

export const App = () => {
  const [amountmoneyToChange, setAmountMoneyToChange] = useState(0)
  const [countryToChange, setCountryToChange] = useState('') // moneda a cambiar
  const [countries, setCountries] = useState([])// arreglo con todas las monedas
  const [countryReference, setCountryReference] = useState('')
  const [actualChange, setActualChange] = useState(0)
  useEffect(() => {
    if (isNaN(amountmoneyToChange) || /^(0\d)/.test(amountmoneyToChange)) {
      // eslint-disable-next-line no-undef
      alert('Por favor introduzca un valor válido')
      setAmountMoneyToChange(0)
    }
  }, [amountmoneyToChange])

  useEffect(() => {
    if (countryToChange.length === 0 || countryReference.length === 0) return

    const LINK = `https://v6.exchangerate-api.com/v6/5575ff74de7c72ef8f39c918/latest/${countryReference.id}`
    fetch(LINK)
      .then(response => response.json())
      .then(data => {
        setActualChange(data.conversion_rates[countryToChange.id])
      })
  }, [countryToChange, countryReference])

  return (
    <>
      <h1 style={{ textAlign: 'center' }} className='mt-3 mb-5'>Money Values Changer</h1>
      <form className='d-flex justify-content-around'>
        <div className='mb-3'>
          <h5>Amount to change</h5>
          <InputReference setAmountMoneyToChange={setAmountMoneyToChange} countryToChange={countryToChange} amountmoneyToChange={amountmoneyToChange} />
        </div>
        <div className='mb-3'>
          <h5>Country to change money</h5>
          <MoneySelect className='moneySelect' countries={countries} switchMoneyType setCountryReference={setCountryReference} setCountryToChange={setCountryToChange} setCountries={setCountries} />
        </div>
        <div className='mb-3'>
          <h5>Country to take money reference</h5>
          <MoneySelect countries={countries} switchMoneyType={false} setCountryReference={setCountryReference} setCountryToChange={setCountryToChange} setCountries={setCountries} />
        </div>
        <div className='mb-3'>
          <MoneyChanged amountmoneyToChange={amountmoneyToChange} actualChange={actualChange} countryReference={countryReference} />
        </div>
      </form>

    </>
  )
}

import React, { useState, useEffect } from 'react'
import InputReference from './components/InputReference'
import MoneySelect from './components/MoneySelect'
import MoneyChanged from './components/MoneyChanged'
import { useGetActualChange } from './hooks/useGetActualChange'

export const App = () => {
  const [amountmoneyToChange, setAmountMoneyToChange] = useState(0)
  const [countryToChange, setCountryToChange] = useState('') // moneda a cambiar
  const [countries, setCountries] = useState([])// arreglo con todas las monedas
  const [countryReference, setCountryReference] = useState('')
  const { actualChange, getChange } = useGetActualChange({ countryToChange, countryReference })
  useEffect(() => {
    if (isNaN(amountmoneyToChange) || /^(0\d)/.test(amountmoneyToChange)) {
      // eslint-disable-next-line no-undef
      alert('Por favor introduzca un valor válido')
      setAmountMoneyToChange(0)
    }
  }, [amountmoneyToChange])

  useEffect(() => {
    getChange()
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

import React from 'react'

const InputReference = ({ setAmountMoneyToChange, amountmoneyToChange, countryToChange }) => {
  const handlerChange = (e) => {
    setAmountMoneyToChange(e.target.value)
  }

  const { flag, country } = (countryToChange === '' ? { flag: '...', country: '...' } : countryToChange)

  return (
    <div className='input-group flex-nowrap'>
      <div className={`input-group-text ${countryToChange === '' ? 'd-none' : ''}`} id='addon-wrapping'>
        <img src={flag} alt={country.country} />
      </div>
      <input type='text' className='form-control' onChange={handlerChange} placeholder='Amount to change' id='amountToChange' value={(amountmoneyToChange !== 0) ? amountmoneyToChange : ''} style={{ borderTopLeftRadius: `${countryToChange === '' ? '10px' : ''}`, borderBottomLeftRadius: `${countryToChange === '' ? '10px' : ''}` }} />
    </div>
  )
}

export default InputReference

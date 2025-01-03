import React from 'react'

const InputReference = ({ setAmountMoneyToChange, amountmoneyToChange, countryReference }) => {
  const handlerChange = (e) => {
    setAmountMoneyToChange(e.target.value)
  }

  const { flag, country } = (countryReference === '' ? { flag: '...', country: '...' } : countryReference)

  return (
    <div className='input-group flex-nowrap'>
      <div className={`input-group-text ${countryReference === '' ? 'd-none' : ''}`} id='addon-wrapping'>
        <img src={flag} alt={country.country} />
      </div>
      <input type='text' className='form-control' onChange={handlerChange} placeholder='Amount to change' id='amountToChange' value={(amountmoneyToChange !== 0) ? amountmoneyToChange : ''} style={{ borderTopLeftRadius: `${countryReference === '' ? '8px' : ''}`, borderBottomLeftRadius: `${countryReference === '' ? '8px' : ''}` }} />
    </div>
  )
}

export default InputReference

import React, { useEffect, useState } from 'react'

const MoneyChanged = ({ amountmoneyToChange, actualChange, countryToChange }) => {
  let result
  const [resultToShow, setResultToShow] = useState(0)

  useEffect(() => {
    if (actualChange === 0 || amountmoneyToChange === 0) return
    result = amountmoneyToChange * actualChange
    result = result.toFixed(3)
    setResultToShow(result)
  }, [actualChange, amountmoneyToChange])

  return (
    <div>
      <h5>Money changed</h5>
      <div className='input-group flex-nowrap'>
        <div className={`input-group-text ${countryToChange === '' ? 'd-none' : ''}`} id='addon-wrapping'>
          <img src={countryToChange.flag} alt={countryToChange.id} />
        </div>
        <input type='text' className='form-control' style={{ borderTopLeftRadius: `${countryToChange === '' ? '8px' : ''}`, borderBottomLeftRadius: `${countryToChange === '' ? '8px' : ''}` }} placeholder='Amount changed' id='amountChanged' value={resultToShow} readOnly />
      </div>

    </div>
  )
}

export default MoneyChanged

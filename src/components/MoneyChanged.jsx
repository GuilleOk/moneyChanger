import React, { useEffect, useState } from 'react'

const MoneyChanged = ({ amountmoneyToChange, actualChange, countryReference }) => {
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
        <div className={`input-group-text ${countryReference === '' ? 'd-none' : ''}`} id='addon-wrapping'>
          <img src={countryReference.flag} alt={countryReference.id} />
        </div>
        <input type='text' className='form-control' style={{ borderTopLeftRadius: `${countryReference === '' ? '10px' : ''}`, borderBottomLeftRadius: `${countryReference === '' ? '10px' : ''}` }} placeholder='Amount changed' id='amountChanged' value={resultToShow} readOnly />
      </div>

    </div>
  )
}

export default MoneyChanged

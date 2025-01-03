import { useState } from 'react'

export const useGetActualChange = ({ countryToChange, countryReference }) => {
  const [actualChange, setActualChange] = useState(0)

  const getChange = async () => {
    if (countryToChange.length === 0 || countryReference.length === 0) {
      return 0
    } else {
      const LINK = `https://v6.exchangerate-api.com/v6/5575ff74de7c72ef8f39c918/latest/${countryReference.id}`
      const response = await fetch(LINK)
      const data = await response.json()
      setActualChange(data.conversion_rates[countryToChange.id])
    }
  }
  return { actualChange, getChange }
}

export const handlerSelect = ({ selectElements, countries }) => {
  let countryS
  let selectedO
  // eslint-disable-next-line array-callback-return
  selectElements.map(element => {
    if (element.selected) {
      // eslint-disable-next-line array-callback-return
      countries.map(country => {
        if (country.id === element.id) {
          countryS = { country: country.country, flag: country.flag, id: country.id }
          selectedO = `${country.country} (${country.id})`
        }
      })
    }
  })
  return { countryS, selectedO }
}

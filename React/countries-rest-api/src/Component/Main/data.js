export const UnReadyData = (arg) => fetch(new Request(`https://restcountries.com/v3.1/${arg}`))
.then(response => response.json())
.catch(error => {
    console.error(error);
})


export function getDataCountryByCode(code, allCountry){
    const index = allCountry.findIndex(one_country => one_country.cca3 === code)
    return index != -1 ? allCountry[index] : null
}


export const unready_data = () => 
fetch("https://api.covid19api.com/summary", {
    method : "GET",
    redirect : "follow",
})
.then(response => response.json())
.catch(error => console.error('error', error))

export const getAlldateFor_oneCountry = country_name =>
    fetch("https://api.covid19api.com/total/country/" + country_name, {
    method : "GET",
    redirect : "follow",
})
.then(response => response.json())
.catch(error => console.error('error', error))

export function getDataByName(country_name, data_all){
    if(country_name === "World"){
        return data_all.Global
    }
    else{
        return data_all.Countries.find(e => e.Country === country_name)
    }
}

export const giveFlagByCode = code => fetch().then(res => res.json()).catch(err => console.log(err))
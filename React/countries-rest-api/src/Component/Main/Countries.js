import { faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Modal } from "@mui/material"
import { Box } from "@mui/system"
import { useEffect, useState } from "react"
import { LoadingIndicator } from "../Icons/icons"
import { FilteredData } from "./Categories"
import "./countries.css"
import { UnReadyData } from "./data"
import { InfosCountry } from "./InfosCountry"

export function CountriesContainer({state}){
    
    useEffect(() => {
        state.loadCountries()
    }, [state.fillter])

    const shown = useState(false)
    const country_to_show = useState({})
    const Filtered = FilteredData(state.countries[0],state.searchedText[0],state.filter, state.sort[0])
    return(
        state.isLoading[0] ? (
            <LoadingIndicator />
        ) : (
            Filtered.length > 0 ? (
                <div className="countries-container">
                    {shown[0] && <InfosCountry dataState={country_to_show} shown={shown} allCountry={state.countries[0]} />}
                    {Filtered.map( element => (
                        <OneCountry key={element.cca3} element={element} shown={shown} country_to_show={country_to_show}/>
                    ))}
                </div>
            ) : (
                <div className="countries-container">
                    <div className="empty-data">Results not found.</div>
                </div>
            )
        )
    )
}

function OneCountry({element , shown ,country_to_show}){

    return(
        <div className="one-country-container" onClick={() => {
            shown[1](true)
            country_to_show[1](element)
        }}>
            <img src={element.flags.png} width={220} height={140}/>
            <div className="conter-info">
                <div className="conter-name">
                    <div className="name">{element.name.common}</div>
                    <FontAwesomeIcon style={{display:"flex",alignItems:"center",marginTop:10}} fontSize={"1.3em"} icon={faInfoCircle}/>
                </div>
                <div className="second-conter-info">
                    <div className="area"><span>Area:</span> {element.area.toLocaleString()}</div>
                    <div className="population"><span>Population:</span> {element.population.toLocaleString()}</div>
                    <div className="region"><span>Region:</span> {element.region}</div>
                    <div className="capital"><span>Capital:</span> {element.capital}</div>
                </div>
            </div>
        </div>
    )
}


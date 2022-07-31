import { useState } from "react"
import "../Main/main.css"
import { CustomizedSelect, FilterBySelect, Search } from "./Categories"
import { CountriesContainer } from "./Countries"
import { UnReadyData } from "./data"
import { InfosCountry } from "./InfosCountry"

export function Main(){
    let state = {
        countries : useState([]),
        filter : {
            label : useState("all"),
            value : useState("all")
        },
        sort : useState("name 1"),
        isLoading : useState(true),
        searchedText : useState(""),
        loadCountries : () => {
            state.isLoading[1](true)
            UnReadyData("all").then(data => {
                state.countries[1](data.filter(e => e.cca2 != "IL"))
                state.isLoading[1](false)
            })
        }
    }
    
    return(
        <div className="conter-main">
            <div className="conter-categories">
                <Search state={state}/>
                <div className="conter-select">
                    <FilterBySelect state={state} />
                    <CustomizedSelect state={state} />
                </div>
            </div>
            <CountriesContainer state={state} />
        </div>
    )
}
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import Select from "react-select"
import "./categories.css"
import { UnReadyData } from "./data"

export function Search({state}){
    return(
        <div className="conter-search">
            <input type={"text"}
            placeholder="Search for a country..."
            value={state.searchedText[0]}
            onChange={(e) => {
                state.searchedText[1](e.target.value)
            }}
            
            />
            <FontAwesomeIcon icon={faSearch} className="icon" />
        </div>
    )
}

export function CustomizedSelect({state , Dark}){
    const options = [
        {label : "World" , value : "all"},
        {
            label : "Region",
            options : [
                {label : "Africa" , value : "region"},
                {label : "Asia" , value : "region"},
                {label : "Americas" , value : "region"},            
                {label : "Europe" , value : "region"},            
                {label : "Oceania" , value : "region"}, 
            ]
        },
        {
            label : "Africa",
            options : [
                {label : "Northern Africa" , value : "subregion"},
                {label : "Eastern Africa" , value : "subregion"},
                {label : "Middle Africa" , value : "subregion"},            
                {label : "Southern Africa" , value : "subregion"},            
                {label : "Western Africa" , value : "subregion"}, 
            ]
        },
        {
            label : "Asia",
            options : [
                {label : "Central Asia" , value : "subregion"},
                {label : "Eastern Asia" , value : "subregion"},
                {label : "South-eastern Asia" , value : "subregion"},            
                {label : "Southern Asia" , value : "subregion"},            
                {label : "Western Asia" , value : "subregion"}, 
            ]
        },
        {
            label : "Europe",
            options : [
                {label : "Eastern Europe" , value : "subregion"},
                {label : "Northern Europe" , value : "subregion"},
                {label : "Southern Europe" , value : "subregion"},            
                {label : "Western Europe" , value : "subregion"}, 
            ]
        },
        {
            label : "Americas",
            options : [
                {label : "North America" , value : "subregion"},
                {label : "Central America" , value : "subregion"},
                {label : "Caribbean" , value : "subregion"},
                {label : "South America" , value : "subregion"},            
            ]
        },
        {
            label : "Oceania",
            options : [
                {label : "Australia and New Zealand" , value : "subregion"},
                {label : "Melanesia" , value : "subregion"},
                {label : "Micronesia" , value : "subregion"},
                {label : "Polynesia" , value : "subregion"},            
            ]
        },
    ]
    const styles = {option : (provided, state) => ({
        ...provided,
        backgroundColor : state.isFocused ? "hsl(208, 42%, 17%)" : "hsl(209, 23%, 22%)"  ,
        outline : "none",
        border : "none",
        color : "white",
        cursor : "pointer",

    }),
    control : (base, props) => ({
        ...base,
        backgroundColor : "hsl(209, 23%, 22%)",
        width : 200,
        color : "white",
        outline : "none",
        border : "none",
        padding : 5,
        boxShadow : null,
        cursor : "pointer",
    }),
    singleValue : (provided, state) => ({
        ...provided,
        color : "white",
        outline : "none",
        border : "none",
    }),
    menuList : (base, props) => ({
        ...base,
        padding : 0,
        margin : 0,
        "::-webkit-scrollbar": {
            width: "8px",
            height: "0px",
        },
          "::-webkit-scrollbar-track": {
            background: "#f1f1f1"
        },
          "::-webkit-scrollbar-thumb": {
            background: "#888"
        },
          "::-webkit-scrollbar-thumb:hover": {
            background: "#555"
        }
    }),
    indicatorSeparator : (base, props) => ({
        ...base,
        display : "none"
        
    }),
    group : (base, props) => ({
        ...base,
        padding : 0,
        backgroundColor : "#26599b",
    }),      
    groupHeading : (base, props) => ({
        ...base,
        backgroundColor : "#26599b",
        margin : 0,
        padding : 5,
        color : "white"
        
    }),                      
    }
    const [value , setValue] = useState(options[0])
    return(
        <Select className="react-select" 
        options={options}
        isSearchable={false}
        styles={styles}
        value={value}
        onChange={(e) => {
            setValue(e)
            state.filter.value[1](e.value)
            state.filter.label[1](e.label)
        }
        }
        />
    )
}

export function FilterBySelect({state, Dark}){
    const options = [
        {
            label : "Filter by",
            options : [
                {label : "Name (A-Z)", value : "name 1"},
                {label : "Name (Z-A)", value : "name 0"},
                {label : "Area (Ascending)", value : "area 1"},
                {label : "Area (Descending)", value : "area 0"},
                {label : "Pop. (Ascending)", value : "population 1"},
                {label : "Pop. (Descending)", value : "population 0"},
            ]
        }
    ]
    const styles = {option : (provided, state) => ({
        ...provided,
        backgroundColor : state.isFocused ? "hsl(208, 42%, 17%)" : "hsl(209, 23%, 22%)"  ,
        outline : "none",
        border : "none",
        color :  "white" ,
        cursor : "pointer",

    }),
    control : (base, props) => ({
        ...base,
        backgroundColor : "hsl(209, 23%, 22%)",
        width : 200,
        color :  "white" ,
        outline : "none",
        border : "none",
        padding : 5,
        boxShadow : null,
        cursor : "pointer",
    }),
    singleValue : (provided, state) => ({
        ...provided,
        color :  "white" ,
        outline : "none",
        border : "none",
    }),
    menuList : (base, props) => ({
        ...base,
        padding : 0,
        margin : 0,
    }),
    indicatorSeparator : (base, props) => ({
        ...base,
        display : "none"
        
    }),
    group : (base, props) => ({
        ...base,
        padding : 0,
        backgroundColor : "#26599b",
    }),      
    groupHeading : (base, props) => ({
        ...base,
        backgroundColor : "#26599b",
        margin : 0,
        padding : 5,
        color :  "white" ,
        
    }),                      
    }
    const [value , setValue] = useState(options[0].options[0])
    return(
        <Select className="react-select" 
        options={options}
        isSearchable={false}
        styles={styles}
        value={value}
        onChange={(e) => {
            setValue(e)
            state.sort[1](e.value)
        }
        }
        />
    )
}

export function FilteredData(BigData, searchedText , filter, sort){

    searchedText=searchedText.replace(/\s/g, '')
    let MyData = BigData.filter(val => {
        if(val.cca2 === "IL"){
            return
        }
        if(filter.value[0] === "all"){
            if(searchedText === ""){
                return val
            }
            else{
                if(val.name.common.toLowerCase().startsWith(searchedText.toLowerCase())){
                    return val
                }
            }
        }
        else{
            if(val[filter.value[0]] === filter.label[0]){
                if(searchedText === ""){
                    return val
                }
                else{
                    if(val.name.common.toLowerCase().startsWith(searchedText.toLowerCase())){
                        return val
                    }
                }
            }
        }
    })
    const [value , type] = sort.split(" ")
    if(value === "name"){
        if(type==="1"){MyData =  MyData.sort((a,b) => a.name.common.localeCompare(b.name.common))}
        else{MyData =  MyData.sort((b,a) => a.name.common.localeCompare(b.name.common))}
    }
    else{
        if(type==="1"){MyData = MyData.sort((a,b) => a[value] - b[value])}
        else{MyData = MyData.sort((b,a) => a[value] - b[value])}
    }
    
    return MyData

}


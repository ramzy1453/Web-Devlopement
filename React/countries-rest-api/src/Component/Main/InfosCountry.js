import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Modal } from "@mui/material"
import { Box } from "@mui/system"
import { useEffect, useState } from "react"
import { getDataCountryByCode } from "./data"
import "./infoscountry.css"

let stack = []
console.log("init");
export function InfosCountry({dataState, shown, allCountry}){
    
    const data = dataState[0]
    useEffect(() => {
        console.log(stack);
    }, [stack])

    useEffect(() => {
        return () => {
            stack = []
            console.log("hh");
        }
    }, [])
    return( 
        <Modal open={shown[0]} onClose={() => shown[1](false)}>
            <Box>
                <div className="conter-info-country">
                    <div className="conter-buttons" style={{display : "flex" , justifyContent : "space-between"}}>
                        <div onClick={() => {shown[1](false)}} className="return"><FontAwesomeIcon className="icon" icon={faArrowLeft}/> Close</div>
                        {stack.length > 0 && <div onClick={() => {
                            const last = stack.pop()
                            dataState[1](last)
                        }} className="return"><FontAwesomeIcon className="icon" icon={faArrowLeft}/> Return</div>}
                    </div>
                    <div className="second-conter">
                        <img className="image" src={data.flags.png} />
                        <div className="vertical-conter">
                            <div className="title">{data.name.official}</div>
                            <div className="second-vertical-conter">
                                <div className="class">
                                    <div className="element"><span>Common name : </span>{data.name.common}</div>
                                    <div className="element"><span>Area : </span> {data.area.toLocaleString()}</div>
                                    <div className="element"><span>Population : </span> {data.population.toLocaleString()}</div>
                                    <div className="element"><span>Subregion : </span> {data.subregion}</div>
                                    <div className="element" style={{display : "flex", flexWrap :"wrap"}}><span style={{marginRight:5}}>Capital : </span> {
                                        data.capital != undefined ? (
                                            data.capital.map((cap, index) => (<div style={{margin : "0 5px 0 0"}} key={index}>{cap}{index!=data.capital.length-1 ? "," : ""} </div>))
                                        ) : (
                                            <div className="MyCapital">No capital.</div>
                                        )
                                    }</div>
                                </div>
                                <div className="class">
                                    <div className="element"><span>Top Level Domain : </span> .{data.cca2.toLowerCase()}</div>
                                    <div className="element" style={{display : "flex", flexWrap :"wrap"}}><span style={{marginRight:5}}>Currencies : </span>{
                                        data.currencies === undefined ? (<span>No currencies.</span>) :
                                        (<div>{Object.values(data.currencies)[0].name} {Object.values(data.currencies)[0].symbol}</div>)
                                    }</div>
                                    <div className="element" style={{display : "flex", flexWrap :"wrap"}}><span style={{marginRight:5}}>Languages : </span>{
                                        Object.values(data.languages).map((lang , index) => (<div style={{margin : "0 5px 0 0"}} key={index}>{lang}{index!=Object.values(data.languages).length-1 ? "," : ""} </div>))
                                    }</div>

                                </div>
                            </div>
                            {
                                data.borders === undefined ? (
                                    <div className="conter-borders">
                                        <div className="border">No borders.</div>
                                    </div>
                                ) : (
                                    <div className="conter-borders">
                                        <div className="text">Borders : </div>
                                        {data.borders.filter(e => e != "ISR").map((pays , index) => {
                                            const country = getDataCountryByCode(pays, allCountry)
                                            return(
                                                (<div onClick={() => {
                                                    stack.push(data)
                                                    dataState[1](country)
                                                }} key={pays} className="border">{country.name.common}</div>)
                                            )
                                        })}
                                    </div>
                                )
                            }
                        </div>
                    </div>
                               
                </div>
            </Box>
        </Modal>  
    )
}


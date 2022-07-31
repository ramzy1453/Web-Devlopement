import { faSearch, faVirusCovid } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ClickAwayListener } from "@material-ui/core"
import { useState } from "react"
import { Link } from "react-router-dom"
import "./styles.css"

export function Header({DATA , setThisCountry}){
    return(
        <header>
            <a className="logo" href="/">
                <FontAwesomeIcon icon={faVirusCovid} className="icon-covid"/> Corona
            </a>
            <Search DATA={DATA} setThisCountry={setThisCountry}/>
        </header>
    )
}

function Search({DATA , setThisCountry}){
    const [value, setValue] = useState("")
    const ShowedData = [["World" , ""] , ...DATA.Countries.map(e => [ e.Country , e.CountryCode.toLowerCase()]).filter(e => e[1] !== "il")]
    const [open , setOpen] = useState(false)
    return(
        <ClickAwayListener onClickAway={() => {setOpen(false)}}>
            <div className="conter-search">
                <input placeholder="Search country..." value={value} onChange={e => {
                    setValue(e.target.value)
                    e.target.value !== "" ? setOpen(true) : setOpen(false)
                }} onClick={() => setOpen(true)}/>
                <FontAwesomeIcon icon={faSearch} className="icon-search" />
                {open && (
                    <div className="box">
                    {
                        ShowedData.filter(e => e[1].toLowerCase().includes(value.toLowerCase())).length > 0 ? 
                        ShowedData.filter(e => e[1].toLowerCase().includes(value.toLowerCase()))
                        .map((pop, i) => (<div onClick={() => {
                            setOpen(false)
                            setThisCountry(pop[0])
                            setValue("")
                        }} className="element" key={i}>{i>0&&<img className="flag" src={`https://flagcdn.com/24x18/${pop[1]}.png`}/>}{pop[0]}</div>)) : (
                            <div className="not-found">Not found.</div>
                        )
                    }
                </div>
                )}
            </div>
        </ClickAwayListener>
    )
}
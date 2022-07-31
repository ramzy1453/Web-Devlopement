import { useEffect, useState } from "react";
import LoadingPage from "../../Loading/index"
import { ZoomableGroup } from "react-simple-maps"
import { Geography } from "react-simple-maps";
import { Geographies } from "react-simple-maps";
import { ComposableMap } from "react-simple-maps"
import "./styles.css"

export function MainMap(){
    const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
    const [data , setData] = useState([])
    const [tooltip , setToolTip] = useState({shown : false, x : 0 , y : 0})
    const [country , setCountry] = useState(null)
    const load_data = () => {
        return fetch("https://api.covid19api.com/summary", {
            method : "GET",
            redirect : "follow",
        }).then(res => res.json()).catch(err => console.error('error' , err))
    }
    useEffect(() => {
        load_data().then(data => {
            setData(data)
        })
    }, [])  
    
    return(
        data.length === 0 ? <LoadingPage /> : (
            <div className="conter-map">
                {tooltip.shown && country!==undefined && <InfoBox tooltip={tooltip} country={country}/>}
                <ComposableMap>
                    <ZoomableGroup zoom={1} center={[0,0]}>
                        <Geographies geography={geoUrl}>
                            {({ geographies }) =>
                                geographies.map(geo => {
                                    if(geo.properties.ISO_A2 !== "IL"){const country = data.Countries.find(e => e.CountryCode === geo.properties.ISO_A2)
                                    const opacity = country !== undefined ? country.TotalConfirmed / 5000000 : 0
                                    return <Geography onMouseLeave={()=>setToolTip({...tooltip,shown : false})} onMouseMove={(e)=>{
                                        setToolTip({shown : true , x : e.pageX , y : e.pageY})
                                        setCountry(country)
                                    }} fillOpacity={opacity} style={{hover : {fill : "#4caf50", fillOpacity : 1}}} className="country" key={geo.rsmKey} geography={geo} />}
                                })
                            }
                        </Geographies>
                    </ZoomableGroup>
                </ComposableMap>
            </div>
        )
    )
}

function InfoBox({tooltip, country}){
    return(
        <div className="conter-box" style={{
            top :  tooltip.y + (tooltip.y < window.innerHeight ? 20 : -270),
            left : tooltip.x + (tooltip.x < window.innerWidth - 200 ? 20 : -220),
            
        }}>
            <img src={"https://flagcdn.com/h120/"+country.CountryCode.toLowerCase()+".png"} />
            <div>
                <div className="name">{country.Country}</div>
                <div className="conter-info">
                    <div className="element">Total : {country.TotalConfirmed}</div>
                    <div className="element">Recovered : {country.TotalRecovered}</div>
                    <div className="element">Deaths : {country.TotalDeaths}</div>
                </div>
            </div>
        </div>
    )
}
import "./styles.css"

export function Box({country}){
    return(
        <div id="conter-box">
            <div className="title">
                {country.Country !== undefined ? country.Country : "Total World"}
            </div>
            <div className="conter">
                <div className="label">Coronavirus cases : </div>
                <div className="case">{country.TotalConfirmed}</div>
            </div>
            
            <div className="conter">
                <div className="label" style={{color : "red"}}>Deaths : </div>
                <div className="case">{country.TotalDeaths}</div>
            </div>

            <div className="conter">
                <div className="label" style={{color : "green"}}>Recovered : </div>
                <div className="case">{country.TotalRecovered}</div>
            </div>

        </div>
    )
}
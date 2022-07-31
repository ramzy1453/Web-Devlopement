import "./styles.css"
import covidBg from "./Images/covid-bg.jpg"
import { Box } from "./Widgets/Box"
import { Chart } from "./Widgets/Chart"
import { getDataByName } from "../../../Data/data"
export function Main({DATA , thisCountry}){

    const country = getDataByName(thisCountry , DATA)
    return(
        <div className="conter-main">
            <div className="covid-bg">
                <img src={covidBg} />
                <div className="info">
                Coronaviruses are a type of virus. There are many different kinds,
                and some cause disease. A coronavirus identified in 2019,
                SARS-CoV-2, has caused a pandemic of respiratory illness, called COVID-19.
                </div>
            </div>
            <div className="conter-button">
                <a href="#conter-box" className="information">Info</a>
                {thisCountry !== "World" && <a href="#conter-total-chart" className="map">Chart</a>}
            </div>
            <Box country={country}/>
            <Chart country_name={thisCountry}/>
        </div>
    )
}
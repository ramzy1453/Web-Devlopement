import { Line } from "react-chartjs-2"
import "./styles.css"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { useEffect, useState } from "react";
import { getAlldateFor_oneCountry } from "../../../../../Data/data"


export function Chart({country_name}){
    console.log(country_name);

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend,
    )

    const _loadTime = () => {
        getAlldateFor_oneCountry(country_name).then(data => {
            setData(data)
            console.log("gg");
        })        
    }
    useEffect(() => {
        _loadTime()
    }, [country_name])

const [data , setData] = useState([])
const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',

        },
        title: {
            display: true,
            text: country_name,
        },
},
};
      
return(
    <div id="conter-total-chart">
        <div className="chart">
        {
            data.length > 0 && (
                <Line
                options={{
                    responsive : true,
                    plugins : {
                        legend : {
                            position : "top"
                        },
                        title : {
                            display: true,
                            text: country_name,
                        },
                    },
                    scales : {
                        y : {
                            ticks : {
                                stepSize : 10000,
                                
                            }
                        },
                    },
                    aspectRatio : 1.5
                    
                }} data={{
                    labels : data.map(e => new Date(e.Date).toLocaleDateString('en-us', {day : "numeric" , month : "short" , year : "numeric" })),
                    datasets : [
                        {
                            label : "Confirmed",
                            data : data.map(e => e.Confirmed),
                            borderColor : "yellow",
                            borderWidth : 0.5
                            
                        },
                        {
                            label : "Actif",
                            data : data.map(e => e.Actif),
                            borderColor : "blue",
                            borderWidth : 0.5
                            
                        },
                        {
                            label : "Recovered",
                            data : data.map(e => e.Recovered),
                            borderColor : "green",
                            borderWidth : 0.5
                            
                        },
                        {
                            label : "Deaths",
                            data : data.map(e => e.Deaths),
                            borderColor : "red",
                            borderWidth : 0.5
                            
                        },
                    ],
                }}
                />
            )
        }
        </div>
    </div>
)
}


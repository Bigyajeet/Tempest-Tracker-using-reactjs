

import { useState } from 'react'
import InfoBox from './InfoBox'
import SearchBox from './SearchBox'
export default function WeatherApp(){
    let [weather,setWeather]=useState({

      city: 'Bhubaneswar',
    feels_like: 22.5,
    humidity: 45,
    temp: 22.99,
    temp_max: 21.6,
    temp_min: 21.4,
    weather: "dusty"

    })
    let updateinfo=(newInfo)=>{
        setWeather(newInfo);
    }
    return(
        <div>
            <h1 style={{textAlign:"center"}}>Weather ForeCast</h1>
     <SearchBox updateInfo={updateinfo}/>
      <InfoBox info={weather}/>
        </div>
    )
}
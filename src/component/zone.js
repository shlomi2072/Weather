
import { useEffect } from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import "./zone.css";
import { getWeatherByCity } from "../serviceByName";
import { getWeatherByLatLon } from "../serviceByLatLon";
import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout";
import Page from '../pages/Page'
import { unstable_batchedUpdates } from "react-dom";


function Zone (props) {
    // console.log(props);
    const [weather, setWeather] = useState({
        name : props.city,
        temp : "",
        temp1 : "",
        temp2 : "",
        temp3: ""
    })
    useEffect(() => {
            if(props.typeRequest=="byNameCity") {
             getWeatherByCity(weather.name)
             .then((data) => {
               if (data.cod==="200"){
                setWeather(previousState => {
                 return { ...previousState, temp: data.list[0].main.temp , temp1: data.list[8].main.temp, temp2: data.list[16].main.temp, 
                  temp3: data.list[24].main.temp}
                })
            }
        })
            .catch((err) => {})
           } },[] );
        useEffect(() => {
                if(props.typeRequest=="byLatLon"){
                    getWeatherByLatLon(props.lat , props.lon)
                         .then((data) => {
                            console.log(data);
                            console.log(data.daily[2].temp.day);
                                setWeather(previousState => {
                             return { ...previousState, name:data.timezone , temp:data.current.temp , 
                                     temp1:data.daily[0].temp.day ,temp2:data.daily[1].temp.day , temp3:data.daily[2].temp.day}
                        })
                    } 
                 )
               }
          });
          
      return (
       <div className="city" onClick={()=>{
    // <BrowserRouter>
    //     <Routes>
    //      <Route path="/" element={<Layout />}>
    //       <Route path="Page" element={<Page />} />
    //      </Route>
    //     </Routes>
    // </BrowserRouter>
        }}>
        <h2>city: {weather.name}</h2>
        <h5>temperature now: {weather.temp}</h5>
        <h5>Forecast temperature for tomorrow: {weather.temp1}</h5>
        <h5>Forecast temperature for the next day: {weather.temp2}</h5>
        <h5>Temperature forecast for the next three days: {weather.temp3}</h5>
       </div>
     )      
    }
    
    export default Zone;
    
import React,{Fragment, useEffect,useState} from 'react';
import axios from 'axios'
import {motion} from 'framer-motion' 

const Weather = () => {

    

    const [weather,setWeather] = useState('')

    useEffect(() => {
        getWeather()

        return () => {
            getWeather()
        }
    },[])

    const getWeather = async() => await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=london,ca
    &APPID=${process.env.GATSBY_KEY}&units=metric`)
    .then(res => {
        const data = res.data
        setWeather({
            name:data.name,
            country:data.sys.country,
            temp:Math.floor(data.main.temp),
            feelsLike:Math.floor(data.main.feels_like),
            desc:data.weather[0].description,
            icon:data.weather[0].icon
        })
    })

    return (
        <motion.div 
        className='weather-container'
        initial={{opacity:0,x:30}}
        animate={{opacity:0.6,x:0}}
        transition={{duration:2}}
        >
            {weather && (
                <Fragment>
                    <section>
                        <img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt="icon" />
                        <h2>{weather.temp}°C</h2>
                    </section>
                    <p>{weather.name.toUpperCase()} {weather.country}</p>
                    <p>{weather.desc.toUpperCase()}</p>
                    <p>FEELS LIKE: {weather.feelsLike}°C</p>
                </Fragment>
            )}
        </motion.div>
    );
}

export default Weather;

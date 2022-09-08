import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import _ from "lodash";

const Weather = () => {
  const [weather, setWeather] = useState("");
  const [coordinates, setCoordinates] = useState(null);

  useEffect(() => {
    triggerLocation();
  }, []);

  useEffect(() => {
    getWeather();

    return () => {
      getWeather();
    };
  }, [coordinates]);

  const triggerLocation = () => {
    window.navigator.geolocation.getCurrentPosition(
      getCoordinates,
      failedTogetCoords
    );
  };

  const getCoordinates = async (coordinates) => {
    const { latitude, longitude } = coordinates.coords;
    const data = await axios.get(
      `http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${process.env.GATSBY_KEY}`
    );

    setCoordinates({
      lat: data.data[0].lat,
      lon: data.data[0].lon,
    });
  };

  const failedTogetCoords = (res) => {
    setCoordinates({
      lat: 37.757815,
      lon: -122.5076398,
      disabled: true,
    });
  };

  // console.log(weather);

  const getWeather = async () => {
    try {
      if (!_.isNil(coordinates))
        await axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${_.get(
              coordinates,
              "lat"
            )}&lon=${_.get(coordinates, "lon")}&APPID=${
              process.env.GATSBY_KEY
            }&units=metric`
          )
          .then((res) => {
            const data = res.data;
            setWeather({
              name: data.name,
              country: data.sys.country,
              temp: Math.floor(data.main.temp),
              feelsLike: Math.floor(data.main.feels_like),
              desc: data.weather[0].description,
              icon: data.weather[0].icon,
            });
          });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <motion.div
      className="weather-container"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 2 }}
    >
      {weather && (
        <Fragment>
          <section>
            <img
              src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
              alt="icon"
              className="weather-icon"
            />
            <h2 className="temperature">{weather.temp}°C</h2>
          </section>
          <p className="weather-location">
            {weather.name.toUpperCase()} {weather.country}
          </p>
          <p className="weather-description">{weather.desc.toUpperCase()}</p>
          <p className="feels-like">FEELS LIKE: {weather.feelsLike}°C</p>
          {_.get(coordinates, "disabled") && (
            <p>Please enable your location to see your own personal weather</p>
          )}
        </Fragment>
      )}
    </motion.div>
  );
};

export default Weather;

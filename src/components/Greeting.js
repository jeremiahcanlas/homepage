import React, { useEffect, useState } from "react";
import _ from "lodash";

const Greeting = () => {
  const [greet, setGreet] = useState("");

  useEffect(() => {
    greeting();
  }, []);

  const name = ` ${window.localStorage.getItem("name") || ""}`;

  //sets the greeting depends on the 24 hr clock
  const greeting = () => {
    const hours = new Date().getHours();

    return hours >= 18
      ? setGreet("Good evening")
      : hours >= 12
      ? setGreet("Good afternoon")
      : hours >= 5
      ? setGreet("Good morning")
      : setGreet("Early morning");
  };

  return (
    <div>
      <span>
        {greet.toUpperCase()}
        {window.localStorage.getItem("name") === "" ? "" : ","}
        {_.toUpper(name)}
      </span>
    </div>
  );
};

export default Greeting;

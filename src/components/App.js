import React from "react";
import Cover from "./Cover";
import Settings from "./Settings";
import Time from "./Time";
import DateTimeContainer from "./DateTimeContainer";
import Quotes from "./Quotes";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="app">
      <Weather />
      <Quotes />
      <DateTimeContainer />
      <Settings />
      <Cover />
    </div>
  );
}

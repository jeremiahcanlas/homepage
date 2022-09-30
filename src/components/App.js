import React from "react";
import Cover from "./Cover";
import Settings from "./Settings";
import Search from "./Search";
import DateTimeContainer from "./DateTimeContainer";
import Quotes from "./Quotes";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="app">
      <div className="item-container">
        <Search />
        <Weather />
        <Quotes />
        <DateTimeContainer />
        <Settings />
      </div>
      <Cover />
    </div>
  );
}

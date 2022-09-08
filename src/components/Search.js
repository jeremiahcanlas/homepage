import React, { useState } from "react";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `https://google.com/search?q=${keyword}`;
  };

  return (
    <div
      style={{
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        width: "100vw",
        height: "100vh",
        zIndex: 99,
      }}
    >
      <div
        style={{
          display: "flex",
          position: "relative",
          flexDirection: "column",
          color: "white",
          margin: "auto 1em",
          justifyContent: "center",
          alignContent: "center",

          height: "5%",
          width: "70%",
        }}
      >
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            style={{
              backgroundColor: "transparent",
              padding: "0 0.5em",
              fontSize: "2em",
              color: "white",
              width: "100%",
              height: "80px",
              borderRadius: "5px",
              border: "1px solid white",
            }}
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            autoFocus
          />
          <button style={{ display: "none" }} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;

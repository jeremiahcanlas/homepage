import React, { useState } from "react";
import _ from "lodash";
import { motion, AnimatePresence } from "framer-motion";
const Search = () => {
  const [keyword, setKeyword] = useState("");
  const isBrowser = () => typeof window !== "undefined";

  const handleSubmit = (e) => {
    e.preventDefault();
    isBrowser() &&
      window.location.replace(`https://google.com/search?q=${keyword}`);
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
          width: "50%",
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
              height: "60px",
              borderRadius: "5px",
              border: "1px solid white",
            }}
            placeholder="search google"
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <button style={{ display: "none" }} type="submit">
            Submit
          </button>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              height: "3em",
            }}
          >
            <AnimatePresence>
              {!_.isEmpty(keyword) && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  style={{ color: "white" }}
                >
                  press enter
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;

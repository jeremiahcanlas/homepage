import React, { useState, useEffect } from "react";

const Settings = () => {
  const [modal, showModal] = useState(false);

  return (
    <div>
      <button
        style={{ position: "absolute", left: "3em", top: "3em", zIndex: 99 }}
        onClick={() => showModal(!modal)}
      >
        settings
      </button>
      {modal && (
        <div
          style={{
            color: "white",
            position: "absolute",
            backgroundColor: "rgba(0,0,0,0.9)",
            height: "100vh",
            width: "100vw",

            zIndex: 40,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              height: "100%",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                color: "white",
                border: "1px solid white",
                margin: "auto 1em",
                justifyContent: "center",
                alignContent: "center",
                padding: "1em",
              }}
            >
              <p>Settings</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;

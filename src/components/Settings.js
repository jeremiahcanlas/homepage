import React, { useState, useEffect } from "react";

const Settings = () => {
  const [modal, showModal] = useState(false);
  const [name, setName] = useState(
    !window.sessionStorage.getItem("name")
      ? ""
      : window.sessionStorage.getItem("name")
  );

  console.log(name);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (window.sessionStorage.getItem("name") !== name) {
      window.sessionStorage.setItem("name", name);
      reloadPage();
    } else {
      showModal(false);
    }
  };

  const reloadPage = () => {
    window.location.reload();
  };

  const closeModal = () => {
    showModal(false);
    setName(
      !window.sessionStorage.getItem("name")
        ? ""
        : window.sessionStorage.getItem("name")
    );
  };

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

            zIndex: 999,
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
                position: "relative",
                flexDirection: "column",
                color: "white",
                border: "1px solid white",
                margin: "auto 1em",
                justifyContent: "center",
                alignContent: "center",
                padding: "1em",
              }}
            >
              <button
                style={{
                  position: "absolute",
                  fontSize: "1em",
                  top: "0.5em",
                  right: "0.5em",
                  cursor: "pointer",
                }}
                onClick={() => closeModal()}
              >
                x
              </button>
              <p>Settings</p>
              <form
                style={{ display: "flex", flexDirection: "column" }}
                onSubmit={(e) => handleSubmit(e)}
              >
                <label>
                  Name:{" "}
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>
                <button
                  type="submit"
                  value="Submit"
                  style={{ marginTop: "1em" }}
                >
                  submit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;

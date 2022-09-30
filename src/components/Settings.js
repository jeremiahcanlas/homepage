import React, { useState, useEffect } from "react";

const Settings = () => {
  const isBrowser = () => typeof window !== "undefined";
  const [modal, showModal] = useState(false);
  const [form, setForm] = useState({
    firstName:
      isBrowser() && window.localStorage.getItem("name") && isBrowser()
        ? isBrowser() && window.localStorage.getItem("name")
        : "",
    duration:
      isBrowser() && window.localStorage.getItem("duration") && isBrowser()
        ? isBrowser() && window.localStorage.getItem("duration")
        : "",
  });

  console.log(form);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      window.localStorage.getItem("name") !== form.firstName ||
      window.localStorage.getItem("duration") !== form.duration
    ) {
      isBrowser() && window.localStorage.setItem("name", form.firstName);
      isBrowser() && window.localStorage.setItem("duration", form.duration);
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
    setForm({
      ...form,
      firstName:
        isBrowser() && !window.localStorage.getItem("name")
          ? ""
          : isBrowser() && window.localStorage.getItem("name"),
    });
  };

  return (
    <div>
      <button
        onClick={() => showModal(!modal)}
        className="settings-container-btn"
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
                    value={form.firstName}
                    onChange={(e) =>
                      setForm({ ...form, firstName: e.target.value })
                    }
                  />
                </label>
                <label>
                  Wallpaper duration:{" "}
                  <input
                    type="number"
                    value={form.duration}
                    onChange={(e) =>
                      setForm({ ...form, duration: e.target.value })
                    }
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

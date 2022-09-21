import * as React from "react";
import "../style/main.scss";
import { Helmet } from "react-helmet";
import App from "../components/App";

// markup
const IndexPage = () => {
  const isBrowser = () => typeof window !== "undefined";
  const name = ` ${(isBrowser() && window.localStorage.getItem("name")) || ""}`;
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <html lang="en" />
        <title>
          Homepage by{" "}
          {isBrowser() && window.localStorage.getItem("name") === ""
            ? ""
            : name}
        </title>
        <meta name="description" content="Personal Homepage" />
        {/* allows weather but somewhat insecure */}
        <meta
          http-equiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
      </Helmet>
      <App />
    </>
  );
};

export default IndexPage;

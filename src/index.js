import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import StarRating from "./StarRating";
import { useState } from "react";
import App from "./App-v2";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <>
      {" "}
      <StarRating
        maxRating="9"
        message={["terrible", "inferior", "normal", "good", "amazing"]}
      />
      <StarRating className="test" size={24} color="red" />
      <StarRating maxRating={10} onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} stars</p>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />

    {/* <Test /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

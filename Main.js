import React, { useEffect } from "react";
import axios from "axios";

export default function Main() {
  useEffect(() => {
    axios
      .get("https://apify.com/covid-19")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div>
      <h1>Damn</h1>
    </div>
  );
}

import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import data from "../config/flightData.json";

const HomePage = () => {
  //   const [flightData, setFlightData] = useState([]);

  //   var arr = [];
  //   Object.keys(data).forEach(function (key) {
  //     arr.push(data[key]);
  //   });

  console.log(data.Segments);

  return (
    <div>
      <h2>Flight Data</h2>

      {data.Segments.map((eachData) => (
        <>
          <li>{eachData.ArrivalDateTime}</li>
        </>
      ))}
    </div>
  );
};

export default HomePage;

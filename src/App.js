import React, { useEffect, useState } from "react";
import "./App.css";
import Title from "./components/Title";
import Image from "./components/Image";
import Description from "./components/Description";
import axios from "axios";
import moment from "moment";

function App() {
  const [image, setImage] = useState([]);
  const [date, setDate] = useState(moment().format("YYYY-MM-DD"));
  console.log(
    "yesterday: ",
    moment()
      .subtract(1, "days")
      .format("YYYY-MM-DD")
  );
  console.log(image);

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=6zwKQYuvqYPTsPVDwpyIGgu5j9TLfrjU0tKwyRK6
&date=${date}`
      )
      .then(response => setImage(response.data));
  }, [date]);

  return (
    <div className="App" image={image}>
      <Title title={image.title} />
      {<Image url={image.url} /> ? (
        <Image url={image.url} />
      ) : (
        <h1>Loading...</h1>
      )}
      <button
        onClick={() =>
          setDate(
            moment(date)
              .subtract(1, "days")
              .format("YYYY-MM-DD")
          )
        }
      >
        Previous
      </button>{" "}
      <button
        onClick={() =>
          setDate(
            moment(date)
              .add(1, "days")
              .format("YYYY-MM-DD")
          )
        }
      >
        Next
      </button>
      <Description description={image.explanation} />
    </div>
  );
}

export default App;

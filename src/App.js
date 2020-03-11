import React, { useEffect, useState } from "react";
import "./App.css";
import Title from "./components/Title";
import Image from "./components/Image";
import Description from "./components/Description";
import DayPicker from "react-daypicker";
import "react-daypicker/lib/DayPicker.css";
import axios from "axios";
import moment from "moment";
import Loader from "react-loader-spinner";

function App() {
  const [image, setImage] = useState([]);
  const [date, setDate] = useState(moment().format("YYYY-MM-DD"));
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setImage([]);
    setLoading(true);
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=6zwKQYuvqYPTsPVDwpyIGgu5j9TLfrjU0tKwyRK6
&date=${date}`
      )
      .then(response => setImage(response.data))
      .then(setLoading(false));
  }, [date, loading]);

  console.log(image);

  const { title, url, explanation, media_type } = image;

  return (
    <div className="App" image={image}>
      <Title title={title} />

      <div className="date-container">
        <div className="date-button-group">
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
          </button>
          <DayPicker
            onDayClick={day => setDate(moment(day).format("YYYY-MM-DD"))}
          />
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
        </div>
      </div>
      <br />
      {/* <input
        type="date"
        onClick={() => {
          const dateControl = document.querySelector('input[type="date"');
          const newDate = dateControl.value;
          console.log("newDate", newDate);
          setDate(newDate);
        }}
      /> */}

      <Description description={explanation} />
      {/* {loading ? <h3>Loading...</h3> : <Image url={image.url} />} */}
      {media_type === "video" ? (
        <iframe
          src={url}
          title="video"
          width="900"
          height="450"
          frameBorder="black"
        />
      ) : (
        <Image url={url} />
      )}
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Title from "./components/Title";
import Image from "./components/Image";
import { Button } from "reactstrap";
import Description from "./components/Description";
import DayPicker from "react-daypicker";
import "react-daypicker/lib/DayPicker.css";
import axios from "axios";
import moment from "moment";

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
      <Title title={title} date={moment(date).format("MMMM Do, YYYY")} />

      <div className="date-container">
        <div className="date-button-group">
          <Button
            onClick={() =>
              setDate(
                moment(date)
                  .subtract(1, "days")
                  .format("YYYY-MM-DD")
              )
            }
          >
            Previous
          </Button>
          <DayPicker
            onDayClick={day => {
              if (day > new Date()) {
                setDate(date);
                alert(`Whoops, that date is in the future! Try today's date or a
                    date in the past :)`);
              } else {
                setDate(moment(day).format("YYYY-MM-DD"));
              }
            }}
          />
          <Button
            onClick={() =>
              setDate(
                moment(date)
                  .add(1, "days")
                  .format("YYYY-MM-DD")
              )
            }
          >
            Next
          </Button>
        </div>
      </div>
      <br />

      <Description description={explanation} />
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

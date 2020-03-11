import React, { useEffect, useState } from "react";
import "./App.css";
import Title from "./components/Title";
import Image from "./components/Image";
import Description from "./components/Description";
import Datepicker from "./components/Datetpicker";

function App() {
  const [images, setImage] = useState([]);

  useEffect(() => {});

  return (
    <div className="App">
      <Title />
    </div>
  );
}

export default App;

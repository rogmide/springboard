import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const GIPHY_URL = "http://api.giphy.com/v1";
function Food() {
  // useParams bring a obj any of the data of the Url
  const { name } = useParams();
  const [src, setSrc] = useState(null);

  useEffect(
    function loadGiphyImgToSrc() {
      async function fetchGif(searchTerm) {
        let res = await axios.get(`${GIPHY_URL}/gifs/search`, {
          params: {
            q: searchTerm,
            api_key: "s0mA9pAKuH8s15Kppn17FZspghvVN7BH",
          },
        });
        setSrc(res.data.data[0].images.original.url);
      }
      fetchGif(name);
    },
    [name]
  );

  let img = src ? <img src={src} alt={name} /> : null;
  return (
    <div>
      <h1>Here's a pic of {name}.</h1>
      {img}
    </div>
  );
}
export default Food;

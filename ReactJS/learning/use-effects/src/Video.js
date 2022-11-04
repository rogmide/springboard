import React, { useState, useRef, useEffect } from "react";

function Video({
  src = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
}) {
  const [speed, setSpeed] = useState(1);
  const videoRef = useRef();
  useEffect(() => {
    videoRef.current.playbackRate = speed;
    // const video = document.querySelector("video");
    // video.playbackRate = speed;
  }, [speed]);

  return (
    <div>
      <video muted autoPlay loop ref={videoRef}>
        {" "}
        <source src={src} />
      </video>
      <div>
        <button onClick={() => setSpeed((s) => s / 2)}> Slow </button>
        <button onClick={() => setSpeed((s) => s * 2)}> Fast </button>
        <p>Current Speed: {speed}</p>
      </div>
    </div>
  );
}

export default Video;

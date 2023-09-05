import React from "react";

function Video() {
  return (
    <video
      className="h-full w-full object-cover z-[-10]"
      autoPlay
      muted={true}
      loop
      playsInline
    >
      <source src="/HeroBkg.mp4" type="video/mp4" />
    </video>
  );
}

export default Video;

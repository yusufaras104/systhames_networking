import React from "react";
import ModalVideo from "react-modal-video";

const VideoPopup = ({
  isVideoOpen,
  setIsVideoOpen,
  videoUrl = "https://www.youtube.com/watch?v=M-QTU_EG5I4",
}) => {
  // Extract videoId from the videoUrl
  const videoId = videoUrl.split("v=")[1];

  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isVideoOpen}
        videoId={videoId}
        onClose={() => setIsVideoOpen(false)}
      />
    </>
  );
};

export default VideoPopup;

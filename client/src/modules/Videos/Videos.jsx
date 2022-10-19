import React from "react";
import "./index.scss";

const Videos = ({ videos }) => (
  <div className="gallery">
    <div className="container">
      <h3>Videos</h3>
      <div className="grid">
      {videos?.map((video, index) => (
        <div className="col-md-3">
            <div
              className="img"
              key={index}
              style={{ backgroundImage: `url(${video.img_src})` }}
            ></div>
            <span>{ video.title }</span>
        </div>
        ))}
      </div>
    </div>
  </div>
);

export default Videos;

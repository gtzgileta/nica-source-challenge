import React from "react";
import img from "../../assets/images/random";
import "./index.scss";

const images = {
  row1: [img.one, img.two, img.three],
  row2: [img.ten, img.five],
  row3: [img.six, img.seven, img.eight],
  row4: [img.nine, img.ten],
};

const Videos = () => (
  <div className="gallery">
    <div className="container">
      <h3>Videos</h3>
      <div className="grid">
        <div className="col-md-3">
          {images.row1.map((item, index) => (
            <div
              className="img"
              key={index}
              style={{ backgroundImage: `url(${item})` }}
            ></div>
          ))}
        </div>
        <div className="col-md-3">
          {images.row2.map((item, index) => (
            <div
              className={`img ${index === 0 ? "spaces-2" : ""}`}
              key={index}
              style={{ backgroundImage: `url(${item})` }}
            ></div>
          ))}
        </div>
        <div className="col-md-3">
          {images.row3.map((item, index) => (
            <div
              className="img"
              key={index}
              style={{ backgroundImage: `url(${item})` }}
            ></div>
          ))}
        </div>
        <div className="col-md-3">
          {images.row4.map((item, index) => (
            <div
              className={`img ${index === 1 ? "spaces-2" : ""}`}
              key={index}
              style={{ backgroundImage: `url(${item})` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Videos;

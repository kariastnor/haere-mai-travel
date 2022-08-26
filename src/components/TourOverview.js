import React from "react";
import { Link } from "react-router-dom";

function TourOverview(props) {
  const { id, name, desc, img } = props;
  return (
    <div>
      <img src={img[0]} alt={name} className="tour-img" />
      <p className="tour-name">{name}</p>
      <p className="tour-desc">{desc}</p>
      <Link to={`/tours/${id}`} className="standard-btn">
        Read more
      </Link>
    </div>
  );
}

export default TourOverview;

import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { tours } from "../data/tours";

function SingleTour() {
  const { tourId } = useParams();
  const selectedTour = tours.find((tour) => tour.id === parseInt(tourId));

  const [mainImg, setMainImg] = useState(0);

  function handleMainImg(type) {
    if (type === "left") {
      setMainImg((prevImg) => {
        const newImg = prevImg - 1;
        return newImg < 0 ? selectedTour.img.length - 1 : newImg;
      });
    } else {
      setMainImg((prevImg) => {
        const newImg = prevImg + 1;
        return newImg > selectedTour.img.length - 1 ? 0 : newImg;
      });
    }
  }

  return (
    <Wrapper className="page">
      <div className="content-container">
        <div className="images">
          <button
            type="button"
            className="left"
            onClick={() => handleMainImg("left")}
          >
            <FaChevronLeft />
          </button>
          <button
            type="button"
            className="right"
            onClick={() => handleMainImg("right")}
          >
            <FaChevronRight />
          </button>
          <img
            src={selectedTour.img[mainImg]}
            alt={selectedTour.name}
            className="main-img"
          />
          <div className="small-images">
            {selectedTour.img.map((image, index) => {
              return (
                <img
                  key={index}
                  src={image}
                  alt={selectedTour.name}
                  className={
                    mainImg === index ? "small-img selected" : "small-img"
                  }
                  onClick={() => setMainImg(index)}
                />
              );
            })}
          </div>
        </div>
        <div className="text">
          <h2>{selectedTour.name}</h2>
          <p>{selectedTour.longDesc}</p>
          <Link to="/popular-trips" className="small-btn">
            Back to popular trips
          </Link>
          <Link
            to="/contact"
            className="small-btn"
            state={{ destination: selectedTour.name }}
          >
            Contact us about trip
          </Link>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  .content-container {
    column-gap: 2rem;
    display: flex;
    justify-content: space-between;
    margin: 6rem 0 3rem;
    width: 85vw;
  }

  h2 {
    margin-top: 0;
  }

  .images {
    position: relative;
    width: 50%;
  }

  .text {
    display: flex;
    flex-direction: column;
    width: 50%;
  }

  a {
    margin-top: 2rem;
  }

  /* p {
    margin-bottom: 2rem;
  }

  a:first-child {
    margin-right: 3rem;
    margin-bottom: 2rem;
  } */

  .main-img {
    width: 100%;
  }

  .left,
  .right {
    background-color: rgb(0, 0, 0, 0.3);
    border: none;
    border-radius: 3px;
    color: #ffffff;
    cursor: pointer;
    font-size: 3rem;
    padding: 0.5rem 0.2rem 0.1rem 0.1rem;
    position: absolute;
    top: 40%;
  }

  .left {
    left: 0;
  }

  .right {
    right: 0;
  }

  .left:hover,
  .right:hover {
    color: rgb(225, 225, 225);
  }

  .small-images {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    width: 100%;
  }

  .selected {
    border: solid;
    border-color: var(--medium-blue-text);
  }

  .small-img {
    width: 100%;
  }
`;

export default SingleTour;

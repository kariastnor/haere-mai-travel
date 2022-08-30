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
          <div className="main-img-container">
            <img
              src={selectedTour.img[mainImg]}
              alt={selectedTour.name}
              className="main-img"
            />
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
          </div>
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
          <hr />
          <p>{selectedTour.longDesc}</p>
          <div className="links">
            <Link to="/popular-trips" className="standard-btn">
              Back to popular trips
            </Link>
            <Link
              to="/contact"
              className="reverse-btn"
              state={{ destination: selectedTour.name }}
            >
              Contact us about trip
            </Link>
          </div>
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
    margin: 8rem 0 4rem;
    width: 85vw;
  }

  h2,
  p {
    margin-top: 0;
  }

  .images {
    width: 50%;
  }

  .text {
    display: flex;
    flex-direction: column;
    justify-content: start;
    width: 50%;
  }

  .main-img-container {
    position: relative;
  }

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
    height: fit-content;
    padding: 0.5rem 0.2rem 0 0;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
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

  .links {
    display: flex;
    column-gap: 2rem;
    margin-top: 2rem;
    row-gap: 2rem;
  }

  @media screen and (max-width: 1090px) {
    .content-container {
      /* align-items: center; */
      flex-direction: column;
    }

    .images {
      margin-bottom: 3rem;
      width: 450px;
    }

    .text {
      width: 100%;
    }
  }

  @media screen and (max-width: 535px) {
    .images {
      width: 100%;
    }

    .links {
      flex-wrap: wrap;
    }

    .left,
    .right {
      font-size: 2rem;
    }
  }
`;

export default SingleTour;

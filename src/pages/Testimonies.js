import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { testimonies } from "../data/testimonies";

function Testimonies() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const slider = setInterval(nextSlide, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  useEffect(() => {
    if (window.location.pathname === "/") {
      document.querySelector(".page").style.justifyContent = "start";
    }
  }, []);

  function handleClass(ind) {
    let className = "";
    if (ind === index) {
      className = "current-slide";
    } else if (
      ind === index - 1 ||
      (index === 0 && ind === testimonies.length - 1)
    ) {
      className = "next-slide";
    } else {
      className = "prev-slide";
    }
    return className;
  }

  function prevSlide() {
    setIndex((prevIndex) => {
      let newIndex = prevIndex - 1;
      if (newIndex < 0) {
        newIndex = testimonies.length - 1;
      }
      return newIndex;
    });
  }

  function nextSlide() {
    setIndex((prevIndex) => {
      let newIndex = prevIndex + 1;
      if (newIndex > testimonies.length - 1) {
        newIndex = 0;
      }
      return newIndex;
    });
  }

  return (
    <Wrapper className="page">
      <div className="content-container">
        <h2>Testimonies</h2>
        <hr />
        <div className="carousel-container">
          {testimonies.map((item, ind) => {
            const { id, name, location, comment, img } = item;
            return (
              <article key={id} className={handleClass(ind)}>
                <div>
                  <h1>
                    <RiDoubleQuotesL />
                    {comment}
                    <RiDoubleQuotesR />
                  </h1>
                  <h5>
                    {name} | <span>{location}</span>
                  </h5>
                </div>
                <img src={img} alt={name} className="person-img" />
              </article>
            );
          })}
        </div>
        <button type="button" className="left" onClick={prevSlide}>
          <FaChevronLeft />
        </button>
        <button type="button" className="right" onClick={nextSlide}>
          <FaChevronRight />
        </button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .content-container {
    margin: 6rem 0 3rem;
    overflow: hidden;
    position: relative;
    text-align: left;
    width: 85vw;
  }

  .carousel-container {
    background-color: white;
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    width: calc(85vw * 3);
  }

  article {
    padding: 3rem 4.5rem;
    width: 85vw;
    transition: all 1s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h5 {
    letter-spacing: 0.2rem;
  }

  span {
    color: var(--medium-blue-text);
  }

  .person-img {
    border-radius: 50%;
    height: 200px;
    margin-left: 1.5rem;
    width: 200px;
  }

  .current-slide {
    opacity: 1;
    order: 0;
  }

  .next-slide {
    opacity: 0;
    order: 1;
    transform: translateX(-100%);
  }

  .prev-slide {
    opacity: 0;
    order: 2;
    transform: translateX(100%);
  }

  .left,
  .right {
    background-color: transparent;
    border: none;
    border-radius: 3px;
    color: var(--dark-blue-text);
    cursor: pointer;
    font-size: 3rem;
    padding: 0.5rem 0.2rem 0.1rem 0.1rem;
    position: absolute;
    top: 6.5rem;
    /* top 6.5rem to counteract the margin top and h2 */
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
    color: var(--medium-blue-text);
  }

  @media screen and (max-width: 685px) {
    .person-img {
      border-radius: 50%;
      height: 120px;
      margin-left: 1rem;
      width: 120px;
    }

    h1 {
      font-size: 1rem;
    }

    article {
      padding: 1.3rem 4rem;
    }
  }

  @media screen and (max-width: 540px) {
    article {
      flex-direction: column;
    }

    .left,
    .right {
      font-size: 2rem;
    }
  }

  @media screen and (max-width: 345px) {
    article {
      padding: 1rem 3.3rem;
    }
  }
`;

export default Testimonies;

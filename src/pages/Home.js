import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import InfoHome from "../components/InfoHome";
import ContactButton from "../components/ContactButton";
import tropicalBeach from "../data/photos/tropical-beach-2.JPG";
import Testimonies from "./Testimonies";

function Home() {
  return (
    <Wrapper>
      <div className="parallax">
        <div className="headings">
          <h1>Haere Mai Travel</h1>
          <hr />
          <h3>
            Tailor-made holidays in New&nbsp;Zealand, Australia and
            the&nbsp;Pacific
          </h3>
        </div>
      </div>
      <InfoHome />
      <Testimonies />
      <ContactButton />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .parallax {
    /* The image used */
    background-image: url(${tropicalBeach});

    /* Set a specific height */
    min-height: 100vh;

    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .headings {
    color: white;
    margin: 6rem auto 3rem;
    width: 85vw;
  }

  .headings hr {
    border: none;
    background-color: white;
    height: 1px;
    margin: 0;
    width: 150px;
  }

  .headings h1 {
    font-family: "Prata", serif;
    font-size: 4.7rem;
    letter-spacing: 0.5rem;
    margin: 0;
    width: 60%;
  }

  .headings h3 {
    color: var(--dark-blue-text);
    font-family: "Montserrat", sans-serif;
    font-size: 1.6rem;
    line-height: 1.7;
    padding-top: 0.7rem;
    width: 60%;
  }

  @media screen and (max-width: 1060px) {
    .headings h1 {
      font-size: 3.5rem;
    }

    .headings h3 {
      font-size: 1.3rem;
    }
  }

  @media screen and (max-width: 702px) {
    .headings h1 {
      font-size: 2.7rem;
    }

    .headings h3 {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 575px) {
    .headings h1 {
      width: 80%;
    }

    .headings h3 {
      width: 80%;
    }
  }
`;

export default Home;

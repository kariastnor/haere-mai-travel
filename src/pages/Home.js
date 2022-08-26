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
          <h1 className="home-heading">Haere Mai Travel</h1>
          <hr />
          <h3 className="home-heading">
            Tailor-made holidays in New Zealand, Australia and the Pacific
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
  }

  .headings {
    color: white;
    margin: auto;
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
    padding-top: 13rem;
    width: 60%;
  }

  .headings h3 {
    font-family: "Montserrat", sans-serif;
    font-size: 1.8rem;
    line-height: 1.7;
    padding-top: 0.7rem;
    width: 60%;
  }
`;

export default Home;

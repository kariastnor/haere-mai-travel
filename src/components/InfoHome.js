import React from "react";
import { tours } from "../data/tours";
import styled from "styled-components";
import TourOverview from "./TourOverview";
// import photo from "../photos/tropical-beach.JPG";

function InfoHome() {
  return (
    <Wrapper>
      <h2>Creating dream holidays since 1995</h2>
      <p>
        We are an independent travel agency who specialise in creating
        customised trips in Australia, New Zealand and the Pacific. Our team has
        extensive knowledge of the region and will help you put together your
        perfect holiday based on your interests and needs.
      </p>
      <h3>Featured trips</h3>
      <div className="tours-container">
        {tours
          .filter((tour) => tour.featured === true)
          .map((tour) => {
            return <TourOverview key={tour.id} {...tour} />;
          })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin: auto;
  width: 85vw;

  h2 {
    margin-top: 5rem;
  }

  h3 {
    margin-top: 3rem;
  }

  .tours-container {
    display: grid;
    grid-template-columns: 30% 30% 30%;
    justify-content: space-between;
    margin-bottom: 5rem;
  }

  /* .tours-container img {
    width: 100%;
  } */
`;

export default InfoHome;

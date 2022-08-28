import React from "react";
import { tours } from "../data/tours";
import styled from "styled-components";
import TourOverview from "./TourOverview";
// import photo from "../photos/tropical-beach.JPG";

function InfoHome() {
  return (
    <Wrapper>
      <div className="content-container">
        <h2>Creating dream holidays since 1995</h2>
        <hr />
        <p>
          We are a UK based independent travel agency who specialise in creating
          customised trips in Australia, New Zealand and the Pacific. Our team
          has extensive knowledge of the region and will help you put together
          your perfect holiday based on your interests and needs.
        </p>
        <h3>Featured trips</h3>
        <div className="tours-container">
          {tours
            .filter((tour) => tour.featured === true)
            .map((tour) => {
              return <TourOverview key={tour.id} {...tour} />;
            })}
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin: auto;
  width: 85vw;

  h2 {
    margin-top: 7rem;
  }

  h3 {
    margin-top: 3rem;
  }

  .tours-container {
    display: grid;
    column-gap: 5rem;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 1.5rem;
    row-gap: 5rem;
    margin-bottom: 5rem;
  }

  @media screen and (min-width: 1600px) {
    .tours-container {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media screen and (max-width: 1080px) {
    .tours-container {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media screen and (max-width: 645px) {
    .tours-container {
      grid-template-columns: 1fr;
    }
  }
`;

export default InfoHome;

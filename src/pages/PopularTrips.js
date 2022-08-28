import React from "react";
import styled from "styled-components";
import { tours } from "../data/tours";
import TourOverview from "../components/TourOverview";

function PopularTrips() {
  return (
    <Wrapper className="page">
      <div className="content-container">
        <h2>Popular trips</h2>
        <hr />
        <p>
          These are some of our most popular trips, but we can also customise an
          itinerary for your needs.
        </p>
        <div className="photos">
          {tours.map((tour) => {
            return <TourOverview key={tour.id} {...tour} />;
          })}
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .content-container {
    margin: 6rem 0 3rem;
    width: 85vw;
  }

  .photos {
    display: grid;
    column-gap: 5rem;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 4rem;
    row-gap: 5rem;
  }

  @media screen and (min-width: 1600px) {
    .photos {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media screen and (max-width: 1080px) {
    .photos {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media screen and (max-width: 645px) {
    .photos {
      grid-template-columns: 1fr;
    }
  }
`;

export default PopularTrips;

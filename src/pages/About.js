import React from "react";
import styled from "styled-components";
// import photo from "../data/photos/tropical-beach.JPG";

function About() {
  return (
    <Wrapper className="page">
      <div className="about-content">
        <div>
          <h2>About Haere Mai Travels</h2>
          <hr />
          <p>
            We are a UK based independent travel agency who specialise in
            creating customised trips in Australia, New Zealand and the Pacific.
            Our team has extensive knowledge of the region and will help you put
            together your perfect holiday based on your interests and needs.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            eveniet accusamus voluptatum facilis quam rem nulla veritatis earum
            vitae consequatur.
          </p>
        </div>
        <img
          src="https://images.pexels.com/photos/2476154/pexels-photo-2476154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="beach at sunset"
          className="about-photo"
        />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .about-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 3rem;
    margin-top: 6rem;
    width: 85vw;
  }

  .about-photo {
    height: 300px;
    margin-left: 4rem;
  }

  @media screen and (max-width: 1170px) {
    .about-content {
      flex-direction: column;
      row-gap: 2rem;
    }

    .about-photo {
      margin-left: 0;
    }
  }

  @media screen and (max-width: 570px) {
    .about-photo {
      height: auto;
      width: 80vw;
    }
  }
`;

export default About;

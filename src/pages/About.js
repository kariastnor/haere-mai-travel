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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias fugit
            architecto ullam reprehenderit amet vero explicabo quos corporis
            autem. Incidunt eum est repudiandae unde quisquam magnam temporibus
            cum tenetur dignissimos.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            eveniet accusamus voluptatum facilis quam rem nulla veritatis earum
            vitae consequatur.
          </p>
        </div>
        <img
          src="https://media.istockphoto.com/photos/successful-business-team-smiling-teamwork-corporate-office-colleague-picture-id1188452509?k=20&m=1188452509&s=612x612&w=0&h=bg9XjAMR2zwIjXFEDLOb7EIKK76RP5RjR5cCLY1sUNQ="
          alt="sdg"
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

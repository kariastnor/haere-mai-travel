import React from "react";
import styled from "styled-components";
import photo from "../data/tropical-beach.JPG";

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
        <img src={photo} alt="sdg" className="about-photo" />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .about-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 3rem;
    margin-top: 6rem;
    width: 85vw;
  }

  .about-photo {
    height: 300px;
    margin-left: 4rem;
  }
`;

export default About;

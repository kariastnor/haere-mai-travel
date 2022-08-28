import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function ContactButton() {
  return (
    <Wrapper>
      <Link to="/contact">
        <button type="button" className="standard-btn large">
          Contact us now to start planning your&nbsp;holiday!
        </button>
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-color: var(--light-blue-background);
  text-align: center;

  .large {
    cursor: pointer;
    font-size: 1.2rem;
    margin-bottom: 8rem;
    margin-top: 1rem;
    padding: 1rem;
  }

  @media screen and (max-width: 600px) {
    .large {
      font-size: 1rem;
      max-width: 70%;
    }
  }
`;

export default ContactButton;

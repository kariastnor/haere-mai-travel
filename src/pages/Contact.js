import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

function Contact() {
  const location = useLocation();
  const [destination, setDestination] = useState("");

  useEffect(() => {
    if (location.state?.destination) {
      setDestination(location.state.destination);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper className="page">
      <div className="contact">
        <h2>Contact us now to start planning your holiday!</h2>
        <hr />
        <p>
          Provide your details below and one of our travel experts will be in
          touch to start planning your dream holiday.
        </p>
        <p>
          Alternatively, call us on 123 456 7890 to talk to one of our team
          members.
        </p>
        <form>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
          <label htmlFor="destination">What is your desired destination?</label>
          <input
            type="text"
            id="destination"
            value={destination}
            onChange={(event) => setDestination(event.target.value)}
          />
          <label htmlFor="message">Message</label>
          <textarea id="message" cols="50" rows="8" />
        </form>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .contact {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 3rem;
    margin-top: 6rem;
    width: 85vw;
  }

  p {
    margin-bottom: 0;
  }

  .contact form {
    display: flex;
    flex-direction: column;
    font-weight: 500;
    margin-top: 2rem;
    width: 40vw;
  }

  .contact input {
    border: none;
    margin: 0.5rem 0 2rem;
    padding: 0.3rem;
  }

  .contact textarea {
    border: none;
    margin-top: 0.5rem;
    padding: 0.3rem;
  }
`;

export default Contact;

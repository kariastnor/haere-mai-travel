import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const location = useLocation();
  const [destination, setDestination] = useState("");

  const [state, handleSubmit] = useForm("xaykndaq");

  useEffect(() => {
    if (location.state?.destination) {
      setDestination(location.state.destination);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper className="page">
      <div className="contact">
        <div>
          <h2>Contact us now to start planning your holiday!</h2>
          <hr />
          <p>
            Provide your details below and one of our travel experts will be in
            touch to start planning your dream holiday.
          </p>
          <p>
            Alternatively, call us on +44 7911 123456 to talk to one of our team
            members.
          </p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email (required)</label>
            <input type="email" id="email" name="email" required />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <label htmlFor="destination">
              What is your desired destination?
            </label>
            <input
              type="text"
              id="destination"
              name="destination"
              value={destination}
              onChange={(event) => setDestination(event.target.value)}
            />
            <ValidationError
              prefix="Destination"
              field="destination"
              errors={state.errors}
            />
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" cols="50" rows="8" />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button
              type="submit"
              className="standard-btn"
              disabled={state.submitting}
            >
              Send
            </button>
            {state.succeeded && (
              <p>
                Thanks for your message! We will be in touch within two business
                days.
              </p>
            )}
          </form>
        </div>
        <aside>
          <p>53 Sherwood Road</p>
          <p>SOUTHAMPTON</p>
          <p>SO53 5PD</p>
          <p>United Kingdom</p>
          <p className="phone">+44 7911 123456</p>
          <h5>Opening hours</h5>
          <p>
            Mon - Sat <br /> 10am - 6pm
          </p>
        </aside>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .contact {
    /* display: flex;
    flex-direction: column; */
    display: grid;
    column-gap: 3rem;
    grid-template-columns: 70% auto;
    justify-content: center;
    margin-bottom: 3rem;
    margin-top: 6rem;
    width: 85vw;
  }

  aside {
    border: solid;
    border-color: var(--medium-blue-text);
    border-width: 0 0 0 1px;
    height: fit-content;
    margin-top: 20px;
    padding: 0 20px 20px 20px;
    text-align: right;
  }

  aside p {
    font-size: 0.9rem;
    margin-top: 0;
  }

  .phone {
    margin-top: 1.5rem;
  }

  h5 {
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 0;
  }

  .contact form {
    display: flex;
    flex-direction: column;
    font-weight: 500;
    margin-top: 2rem;
    width: 500px;
  }

  .contact input {
    border: none;
    font-family: "Montserrat", sans-serif;
    margin: 0.5rem 0 2rem;
    padding: 0.3rem;
  }

  .contact textarea {
    border: none;
    font-family: "Montserrat", sans-serif;
    margin-top: 0.5rem;
    padding: 0.3rem;
  }

  button {
    cursor: pointer;
    font-size: 1.2rem;
    margin-top: 2rem;
    padding: 0.5rem 1rem;
  }

  @media screen and (max-width: 885px) {
    .contact {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-bottom: 3rem;
      margin-top: 6rem;
      width: 85vw;
    }

    aside {
      border-width: 1px 0 0 0;
      margin-top: 3rem;
      padding: 20px 20px 20px 0;
      text-align: left;
      width: fit-content;
    }
  }

  @media screen and (max-width: 600px) {
    .contact form {
      width: 80vw;
    }
  }
`;

export default Contact;

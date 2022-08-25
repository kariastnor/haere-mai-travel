import React from "react";
import styled from "styled-components";
import InfoHome from "../components/InfoHome";
import Contact from "./Contact";
import tropicalBeach from "../data/tropical-beach-2.JPG";

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
      {/* or a separate component for home page contact? */}
      <Contact />
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

// const [width, setWidth] = useState({
//   h1Width: undefined,
//   hrWidth: undefined,
//   hrMargin: undefined,
// });

// HOW DO I GET THE WIDTH OF JUST THE H1 TEXT?

// useEffect(() => {
// const h1Width = document
//   .querySelector("h1.home-heading")
//   .getBoundingClientRect().width;
// const hrWidth = document.querySelector("hr").getBoundingClientRect().width;

// function handleResize() {
//   setWidth({
//     h1Width:
//       document.querySelector("h1.home-heading").innerText.offsetWidth,
//     hrWidth: document.querySelector("hr").offsetWidth,
//     hrMargin: undefined,
//   });
//   handleMargin();
// }

// function handleMargin() {
//   setWidth((prevState) => {
//     return {
//       ...prevState,
//       hrMargin: prevState.h1Width / 2 - prevState.hrWidth / 2,
//     };
//   });
// }
//   window.addEventListener("resize", handleResize);
//   handleResize();
//   return () => window.removeEventListener("resize", handleResize);
// }, []);

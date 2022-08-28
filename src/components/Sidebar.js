import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Sidebar({ setSidebarOpen }) {
  return (
    <Wrapper onClick={() => setSidebarOpen(false)}>
      <div className="sidebar">
        <ul className="sidebar-links">
          <hr />
          <li onClick={() => setSidebarOpen(false)}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={() => setSidebarOpen(false)}>
            <Link to="/about">About us</Link>
          </li>
          <li onClick={() => setSidebarOpen(false)}>
            <Link to="/popular-trips">Popular trips</Link>
          </li>
          <li onClick={() => setSidebarOpen(false)}>
            <Link to="/testimonies">Testimonies</Link>
          </li>
          <li onClick={() => setSidebarOpen(false)}>
            <Link to="/contact">Contact us</Link>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: rgb(200, 200, 200, 0.5);
  position: fixed;
  top: 4rem;
  left: 0;
  height: calc(100vh - 4rem);
  width: 100vw;
  z-index: 10;

  .sidebar {
    background-color: rgb(255, 255, 255, 0.9);
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 4rem;
    right: 0;
    height: 100vh;
    width: 40vw;
    z-index: 99;
  }

  @media screen and (min-width: 850px) {
    display: none;
  }

  .sidebar-links {
    font-size: 1.2rem;
    font-weight: 500;
    margin: 0;
    padding: 2rem 2rem 2rem 2rem;
  }

  a {
    color: var(--dark-blue-text);
  }

  li:not(:last-child) {
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 550px) {
    .sidebar {
      width: 60vw;
    }
  }
`;

export default Sidebar;

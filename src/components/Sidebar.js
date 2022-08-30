import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Sidebar({ setSidebarOpen }) {
  return (
    <Wrapper onClick={() => setSidebarOpen(false)}>
      <div className="sidebar">
        <ul className="sidebar-links">
          <li onClick={() => setSidebarOpen(false)}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li onClick={() => setSidebarOpen(false)}>
            <NavLink to="/about">About us</NavLink>
          </li>
          <li onClick={() => setSidebarOpen(false)}>
            <NavLink to="/popular-trips">Popular trips</NavLink>
          </li>
          <li onClick={() => setSidebarOpen(false)}>
            <NavLink to="/testimonies">Testimonies</NavLink>
          </li>
          <li onClick={() => setSidebarOpen(false)}>
            <NavLink to="/contact">Contact us</NavLink>
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

  a:hover {
    color: var(--medium-blue-text);
  }

  .active {
    border-bottom: 1px solid var(--medium-blue-text);
    padding-bottom: 0.5rem;
  }

  @media screen and (max-width: 550px) {
    .sidebar {
      width: 60vw;
    }
  }
`;

export default Sidebar;

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Sidebar({ setSidebarOpen }) {
  return (
    <Wrapper>
      <ul className="sidebar-links">
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
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 4rem;
  right: 0;
  width: fit-content;

  @media screen and (min-width: 850px) {
    display: none;
  }

  .sidebar-links {
    margin: 0;
    padding: 1.5rem 2rem;
  }

  li:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export default Sidebar;

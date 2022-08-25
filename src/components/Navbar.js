import React from "react";
import { Link } from "react-router-dom";
import { IoMenuOutline } from "react-icons/io5";
import logo from "../photos/hmt-logo.png";
import styled from "styled-components";

function Navbar({ sidebarOpen, setSidebarOpen }) {
  return (
    <Wrapper>
      <div className="navbar-width">
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <div>
          <button
            type="button"
            className="sidebar-btn"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <IoMenuOutline />
          </button>
          <ul className="navbar-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/popular-trips">Popular trips</Link>
            </li>
            <li>
              <Link to="/testimonies">Testimonies</Link>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  background-color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  padding: 0 2rem;
  position: fixed;
  top: 0;
  width: 100%;

  .navbar-width {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 85vw;
  }

  .logo {
    height: 35px;
  }

  li {
    display: inline;
    font-weight: 500;
    padding-left: 1.8rem;
  }

  .navbar-links {
    padding: 0;
  }

  @media screen and (max-width: 650px) {
    .navbar-links {
      display: none;
    }
  }

  .sidebar-btn {
    background-color: transparent;
    border: none;
    color: var(--dark-blue-text);
    font-size: 3rem;
    padding: 0.3rem 0 0 0;
  }

  /* .sidebar-btn:hover {
    color: var(--medium-blue-text);
  } */

  @media screen and (min-width: 650px) {
    .sidebar-btn {
      display: none;
    }
  }
`;

export default Navbar;

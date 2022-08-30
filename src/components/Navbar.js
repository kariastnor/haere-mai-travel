import React from "react";
import { NavLink, Link } from "react-router-dom";
import { IoMenuOutline } from "react-icons/io5";
import logo from "../data/photos/hmt-logo.png";
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
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About us</NavLink>
            </li>
            <li>
              <NavLink to="/popular-trips">Popular trips</NavLink>
            </li>
            <li>
              <NavLink to="/testimonies">Testimonies</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact us</NavLink>
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
  z-index: 99;

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

  a:hover {
    color: var(--medium-blue-text);
  }

  .active {
    border-bottom: 1px solid var(--medium-blue-text);
    padding-bottom: 0.5rem;
  }

  @media screen and (max-width: 850px) {
    .navbar-links {
      display: none;
    }
  }

  .sidebar-btn {
    background-color: transparent;
    border: none;
    color: var(--dark-blue-text);
    cursor: pointer;
    font-size: 3rem;
    padding: 0.3rem 0 0 0;
  }

  .sidebar-btn:hover {
    color: var(--medium-blue-text);
  }

  @media screen and (min-width: 850px) {
    .sidebar-btn {
      display: none;
    }
  }
`;

export default Navbar;

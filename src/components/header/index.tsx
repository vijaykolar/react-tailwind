import React from "react";
import { Link } from "gatsby";
import {
  HiOutlineBars2,
  HiOutlineBell,
  HiOutlineCog6Tooth,
} from "react-icons/hi2";
import "./header.scss";
import { Dropdown } from "react-bootstrap";

const Header = ({ siteTitle = "" }) => (
  <header>
    <div className="container-fluid px-0 ">
      <nav className="navbar navbar-top py-2 navbar-expand border-dark border-bottom">
        <div className="collapse navbar-collapse justify-content-between">
          <div className="navbar-logo">
            <HiOutlineBars2 className="d-md-none" size={24} />
            <Link to="/" className="text-decoration-none text-primary">
              Yt
            </Link>
          </div>
          <div className="d-none d-md-block">search</div>
          <ul className="d-flex flex-row align-center gap-3 ">
            <li>
              <Dropdown className="d-inline">
                <Dropdown.Toggle
                  className="bg-transparent border-0 text-dark px-0"
                  id="dropdown-autoclose-true"
                >
                  <HiOutlineBell size={24} />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                  <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                  <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li>
              <Dropdown className="d-inline" placement="right-start">
                <Dropdown.Toggle
                  className="bg-transparent border-0 text-dark px-0"
                  id="dropdown-autoclose-true"
                >
                  <HiOutlineCog6Tooth size={24} />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                  <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                  <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li>
              <Dropdown className="d-inline">
                <Dropdown.Toggle
                  className="bg-transparent border-0 text-dark px-0"
                  id="dropdown-autoclose-true"
                >
                  <HiOutlineCog6Tooth size={24} />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                  <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                  <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
        </div>
      </nav>
      <nav></nav>
      <Link
        to="/"
        style={{
          fontSize: `var(--font-sm)`,
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>
    </div>
  </header>
);

export default Header;

import React from "react";
import "./Navbar.scss";
import Table from "./Table";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
        <div className="container-fluid">
          <a
            className="navbar-brand"
            href="#"
            style={{ color: "#fff", fontWeight: "600" }}
          >
            Project
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <form className="d-flex">
              <img
                src="https://media.istockphoto.com/id/1389898125/photo/young-woman-chewing-gum-cute-iconic-character-3d-rendering.jpg?b=1&s=170667a&w=0&k=20&c=8pcgITFZ5X3OxJQBVtoHxa3bmMprtKkGAId5ZkufPuo="
                alt=""
              />
            </form>
          </div>
        </div>
      </nav>
      <Table />
    </div>
  );
};

export default Navbar;

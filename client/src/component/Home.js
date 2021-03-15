import React, { useEffect, useState } from "react";

import "./newStyle2.css";

import { useForm } from "react-hook-form";
import axios from "axios";
import { Link } from "react-router-dom";
import Searchbox from "./Searchbox";
import SearchPage from "./SearchPage";

export default function Dashboard() {
  let token = localStorage.getItem("token");
  let role = localStorage.getItem("role");
  let name = localStorage.getItem("name");
  let name2 = localStorage.getItem("name2");

  let email = localStorage.getItem("email");
  let email2 = localStorage.getItem("email2");

  function logout() {
    if (window.confirm("Would you like to logout?")) {
      localStorage.removeItem("token");
      localStorage.removeItem("name");
      localStorage.removeItem("name2");
      localStorage.removeItem("role");
      localStorage.removeItem("email");
      localStorage.removeItem("email2");

      window.location = "/";
    }
  }

  function clickSearch() {
    let updatebox = document.querySelector(".tablediv2");

    updatebox.style.display = "block";
  }

  

  return (
    <>
      {token && role ? (
        <>
           <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <a class="navbar-brand" href="#">
              SearchIt!
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link" href="#">
                    Dashboard<span class="sr-only">(current)</span>{" "}
                  </a>
                </li>
                {/* <li class="nav-item ">
                  <Link class="nav-link" to="#">
                    Register
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="#">
                    Login
                  </Link>
                </li> */}
                 <li class="nav-item">
                 <Link class="nav-link" to="#">
                     Welcome {name}

                  </Link>
                </li>
              </ul>
              <div className="ml-auto btndiv" >
              <button
                className="btn btn-success navbar-btn srcbtn"
                onClick={clickSearch}
               
              >
                Search
              </button>
              <button
                className="btn btn-danger navbar-btn"
                onClick={logout}
              >
                Logout
              </button>
              </div>
              
            </div>
          </nav>
<div style={{height:'56px'}}></div>
          <div >
            <Searchbox />
          </div>

          <div
            id="myModal2"
            class="modal tablediv2"
            style={{ display: "none" }}
          >
            <SearchPage />
          </div>
        </>
      ) : (
        <>
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <a class="navbar-brand" href="#">
              SearchIt!
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link" href="#">
                    Dashboard<span class="sr-only">(current)</span>{" "}
                  </a>
                </li>
                <li class="nav-item ">
                  <Link class="nav-link" to="/register">
                    Register
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                
              </ul>
              <button
                className="btn btn-success navbar-btn ml-auto"
                onClick={clickSearch}
              >
                Search
              </button>
            </div>
          </nav>
          <div style={{height:'56px'}}></div>

          <div>
            <Searchbox />
          </div>

          <div
            id="myModal2"
            class="modal tablediv2"
            style={{ display: "none" }}
          >
            <SearchPage />
          </div>
        </>
      )}
    </>
  );
}

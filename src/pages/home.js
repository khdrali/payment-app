import React from "react";
import "../styles/home.css";

function Home() {
  return (
    <div className="main">
      <div class="container-fluid">
        <div class="row flex-nowrap">
          <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <a
                href="/"
                class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
              >
                <span class="fs-5 d-none d-sm-inline">Menu</span>
              </a>
              <ul
                class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                id="menu"
              >
                <li>
                  <img src="../images/frame.png" alt="frame" />
                  <h5>Lekan Okeowo</h5>
                  <p>lekanokeowo@gmail.com</p>
                </li>
                <li>
                  <a
                    href="#submenu1"
                    data-bs-toggle="collapse"
                    class="nav-link px-0 align-middle"
                  >
                    <img src="../images/dashbord.png" alt="dashbord" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* left side content */}
          <div class="col lg-10">
            {/* All Expense */}
            <section id="expanse">
              <div class="all-expanse">
                <div class="row justify-content-between">
                  <div class="col-3 offset-1">
                    <h6>All Expense</h6>
                  </div>
                  <div class="col-3">
                    <h7>Monthly</h7>
                  </div>
                </div>
                <div class="row">
                  <div class="col-3 offset-1  card-select">card</div>
                  <div class="col-3 card">card</div>
                  <div class="col-3 offset-1 card">card</div>
                </div>
              </div>
            </section>
          </div>
          {/* right side content */}
          <div class="col lg-2 offset-1">right</div>
        </div>
      </div>
    </div>
  );
}

export default Home;

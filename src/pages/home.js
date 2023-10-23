import React, { useState} from "react";
import "../styles/home.css";
import dashbord from "../images/dashbord.png";
import frame from "../images/Frame.png";
import camera from "../images/camera.png";
import arrow from "../images/arrow-right.png";
import income from "../images/income.png";
import transfer from "../images/transfer.png";
import plus from "../images/plus.png";
import galery from "../images/gallery.png";

function Home() {
  const [dataExpenses, setDataExpenses]=useState([
    {
      name: "Balance",
      date:"April 2022",
      pay: "20,129"
    },
    {
      name: "Income",
      date:"April 2022",
      pay: "20,129"
    },
    {
      name: "Expenses",
      date:"April 2022",
      pay: "20,129"
    }
  ])

  const [myCard, setMyCard]=useState([
    {
      username:"Syah Bandi",
      numberCard:"0918 8124 0042 8129",
      validateCard:"12/20-124",
      transactionHistory:[{
        transactionName:"Cash Withdrawal",
        transactionDate:"13 april 2022",
        pay:"20,129",
        status:"out"
      },{
        transactionName:"Landing Page Project",
        transactionDate:"13 april 2022",
        pay:"2000",
        status:"in"
      },{
        transactionName:"Juni Mobile App project",
        transactionDate:"13 april 2022",
        pay:"20,129",
        status:"in"
      }]
    }
  ])
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
                <div class="row">
                  <div class="col-3 img-acc">
                    <img src={frame} alt="frame" />
                  </div>
                  <div class="col-9 acc">
                    <h4>Lekan Okeowo</h4>
                    <p>demo@gmail.com</p>
                  </div>
                </div>
                <li>
                  <a
                    href="#submenu1"
                    data-bs-toggle="collapse"
                    class="nav-link px-0 align-middle"
                  >
                    <img src={dashbord} alt="dashbord" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* left side content */}
          <div class="col lg-6">
            {/* All Expense */}
            <section id="expanse">
              <div class="shadow-sm p-3 mb-5 bg-body-tertiary rounded all-expanse">
                <div class="row justify-content-between">
                  <div class="col-3 offset-1">
                    <h6>All Expense</h6>
                  </div>
                  <div class="col-3">
                    <select class="form-select" id="dropdown">
                      <option selected>Monthly</option>
                      <option value="1">April</option>
                      <option value="2">Mei</option>
                      <option value="3">June</option>
                    </select>
                  </div>
                </div>
                <div class="row wrap-card">
                  {dataExpenses?.map((item)=>(
                  <div class=" col-3 card-select">
                  <div class="row justify-content-between">
                    <div class="col-4">
                      <img src={item?.name === 'Balance' ? camera : item?.name === 'Income' ? income : transfer } alt="camera" width="40px" />
                    </div>
                    <div class="col-4 mt-1">
                      <img src={arrow} alt="arrow" width="25px" />
                    </div>
                  </div>
                  <div class="text">
                    <h4>{item?.name}</h4>
                    <p>{item?.date}</p>
                    <h3>{item?.pay}</h3>
                  </div>
                </div>  
                  ))}
                </div>
              </div>
              <div class="shadow-sm p-3 mb-5 bg-body-tertiary rounded invoice">
                <div class="row justify-content-between">
                  <div class="col-6 mt-3">
                    <h4>Quick Invoice</h4>
                  </div>
                  <div class="col-2">
                    <button type="button" class="btn">
                      <img src={plus} width="43px" alt="plus" />
                    </button>
                  </div>
                </div>
                <div class="latest">
                  <h4>Latest Transaction</h4>
                  <div class="row scroll">
                    <div class="list">
                      <div class="row">
                        <div class="col-3">
                          <img src={frame} alt="frame" />
                        </div>
                        <div class="col-9">
                          <h4>Madrani Andi</h4>
                          <p>madraniandi20@gmail.com</p>
                        </div>
                      </div>
                    </div>
                    <div class="list">
                      <div class="row">
                        <div class="col-3">
                          <img src={frame} alt="frame" />
                        </div>
                        <div class="col-9">
                          <h4>Josua Nunito</h4>
                          <p>JoshNunito@gmail.com</p>
                        </div>
                      </div>
                    </div>
                    <div class="list">
                      <div class="row">
                        <div class="col-3">
                          <img src={frame} alt="frame" />
                        </div>
                        <div class="col-9">
                          <h4>Madrani Andi</h4>
                          <p>madraniandi20@gmail.com</p>
                        </div>
                      </div>
                    </div>
                    <div class="list">
                      <div class="row">
                        <div class="col-3">
                          <img src={frame} alt="frame" />
                        </div>
                        <div class="col-9">
                          <h4>Josua Nunito</h4>
                          <p>JoshNunito@gmail.com</p>
                        </div>
                      </div>
                    </div>
                    <div class="list">
                      <div class="row">
                        <div class="col-3">
                          <img src={frame} alt="frame" />
                        </div>
                        <div class="col-9">
                          <h4>Madrani Andi</h4>
                          <p>madraniandi20@gmail.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="line"></div>
                </div>
                <div class="form">
                  <form class="row g-3">
                    <div class="col-md-6">
                      <label for="inputName" class="form-label">
                        Customer Name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="inputName4"
                        placeholder="Type customer name"
                      />
                    </div>
                    <div class="col-md-6">
                      <label for="inputEmail4" class="form-label">
                        Customer Email
                      </label>
                      <input
                        type="emial"
                        class="form-control"
                        id="inputEmail4"
                        placeholder="Type customer email"
                      />
                    </div>
                  </form>
                </div>
                <div class="form">
                  <form class="row g-3">
                    <div class="col-md-6">
                      <label for="inputName" class="form-label">
                        Item Name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="inputName4"
                        placeholder="Type customer name"
                      />
                    </div>
                    <div class="col-md-6">
                      <div class="row">
                        <label for="inputNominal4" class="form-label">
                          Item mount
                        </label>
                        <label class="visually-hidden" for="autoSizingSelect">
                          Preference
                        </label>
                        <select class="form-select money" id="autoSizingSelect">
                          <option selected>USD</option>
                          <option value="1">Yen</option>
                          <option value="2">Rupiah</option>
                          <option value="3">Euro</option>
                        </select>
                        <input
                          type="number"
                          class="form-control"
                          id="inputNominal4"
                          placeholder="Nominal"
                        />
                      </div>
                    </div>
                  </form>
                </div>
                <div class="row justify-content-around">
                  <div class="col-4">
                    <button type="button" class="btn add">
                      Add More Details
                    </button>
                  </div>
                  <div class="col-4">
                    <button type="button" class="btn add">
                      Send Money
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* right side content */}
          <div class="col lg-6">
            <section id="card">
              <h4>My card</h4>
              {
              <div class="name-card">
                <div class="container text-center">
                  <div class="row justify-content-between">
                    <div class="col-4">
                      <h6>Name Card</h6>
                      <p>{myCard[0].username}</p>
                    </div>
                    <div class="col-3">
                      <img src={galery} alt="galery" />
                    </div>
                  </div>
                </div>
                <div class="number-card">
                  <h5>{myCard[0].numberCard}</h5>
                  <p>{myCard[0].validateCard}</p>
                </div>
              </div>
              }
              <div class="hair-line"></div>
              <div class="container text-center">
                <div class="row justify-content-between history">
                  <div class="col-6">
                    <h6>Transaction History</h6>
                  </div>
                  <div class="col-3">
                    <p>see all</p>
                  </div>
                </div>
              </div>
              <div class="container date">
                <p>13 April 2022</p>
              </div>
              {myCard[0].transactionHistory?.map((item,key)=>{
                return (
                  <div key={key} class="container">
                  <div class="row justify-content-between box">
                    <div class="col-7">
                      <h4>{item.transactionName}</h4>
                      <p>{item.transactionDate} </p>
                    </div>
                    <div class="col-3">
                      <h5 style={{color: item?.status === 'out' ? "red" : "#7DD97B"}}>$20,129</h5>
                    </div>
                  </div>
                  {/* <div class="row justify-content-between box">
                    <div class="col-7">
                      <h4>Landing Page Project</h4>
                      <p>13 Apr, 2022 </p>
                    </div>
                    <div class="col-3">
                      <h6>$20,129</h6>
                    </div>
                  </div>
                  <div class="row justify-content-between box">
                    <div class="col-7">
                      <h4>Juni Mobile App project</h4>
                      <p>13 Apr, 2022 </p>
                    </div>
                    <div class="col-3">
                      <h6>$20,129</h6>
                    </div>
                  </div> */}
                </div>
                )
              }
         
              )}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

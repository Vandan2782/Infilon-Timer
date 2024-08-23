import React from "react";
import Image from "next/image";
import "./leaves.css";
import Sidebar from "../Sidebar/page";
import "bootstrap/dist/css/bootstrap.min.css";

const page = () => {
  return (
    <>
      <div className="d-flex">
        <Sidebar />

        <div className="leaves-dashboard">
          <div className="container-fluid">
            <Image
              src="/Images/corner-img.png"
              className="leaves-corner"
              width={90}
              height={90}
            />
          </div>

          <div className="search pt-3 ms-2">
            <input
              type="text"
              placeholder="Search"
              className="search-input"
            />
          </div>

          <div className="breadcrumbs">
            <p>
              Dashboard <i class="fa-solid fa-greater-than"></i>{" "}
              <span className="leaves-blue">Leaves</span>{" "}
            </p>
          </div>

          <div className="leaves-line">
            <div className="container-fluid">
               <div className="leaves2">Leaves</div>
              <span className="total-leave">Total Leave : 0 (2024)</span>
            </div>

            <div className="leave-corner-image">
              <Image src="/Images/corner-img.png" width={50} height={50} />
            </div>

            <div className="paragraph">
              <div className="container-fluid">
                <div className="modal-btn1">
                  {/* <button>
                   Add
                  </button> */}

<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
<i class="fa-solid fa-plus"></i> Add
</button>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h6 class="modal-title" id="exampleModalLabel">Add New Leave Request</h6>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>


                </div>

              
                <div className="input">
                  <input
                    type="text"
                    placeholder="Search"
                    className="input-search"
                  />
                </div>




                <div className="table-inside">
                  <div className="table-section-leave mt-5">
                    <div className="container-fluid">
                      <div className="table-responsive">
                        <table className="table table-hover ">
                          <thead className="header-table">
                            <tr>
                              <th># <span><svg
                  className="w-4 h-4 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  fill="#fffff"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m8 15 4 4 4-4m0-6-4-4-4 4"
                  />
                </svg></span></th>
                              <th>Leave Date <span><svg
                  className="w-4 h-4 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  fill="#fffff"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m8 15 4 4 4-4m0-6-4-4-4 4"
                  />
                </svg></span></th>
                              <th>Leave Type <span><svg
                  className="w-4 h-4 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  fill="#fffff"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m8 15 4 4 4-4m0-6-4-4-4 4"
                  />
                </svg></span></th>
                              <th>Status <span><svg
                  className="w-4 h-4 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  fill="#fffff"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m8 15 4 4 4-4m0-6-4-4-4 4"
                  />
                </svg></span></th>
                              <th>View</th>
                              <th>Delete <span>
                              <svg
                  className="w-4 h-4 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  fill="#fffff"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m8 15 4 4 4-4m0-6-4-4-4 4"
                  />
                </svg></span></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="custom">
                              <td>1</td>
                              <td>2024-08-15</td>
                              <td>Annual Leave</td>
                              <td>
                                <span className="badge bg-success">
                                  Approved
                                </span>
                              </td>
                              <td>
                                <button className="border-0">
                                  <i className="fa-solid fa-eye"></i>
                                </button>
                              </td>
                              <td>
                                <button className="border-0">
                                  <i className="fa-solid fa-trash"></i>
                                </button>
                              </td>
                            </tr>
                            <tr className="custom2">
                              <td>2</td>
                              <td>2024-08-20</td>
                              <td>Sick Leave</td>
                              <td>
                                <span className="badge bg-warning text-dark">
                                  Pending
                                </span>
                              </td>
                              <td>
                                <button className="border-0">
                                  <i className="fa-solid fa-eye"></i>
                                </button>
                              </td>
                              <td>
                                <button className="border-0">
                                  <i className="fa-solid fa-trash"></i>
                                </button>
                              </td>
                            </tr>
                            <tr className="custom3">
                              <td>3</td>
                              <td>2024-08-25</td>
                              <td>Casual Leave</td>
                              <td>
                                <span className="badge bg-danger">
                                  Rejected
                                </span>
                              </td>
                              <td>
                                <button className="border-0">
                                  <i className="fa-solid fa-eye"></i>
                                </button>
                              </td>
                              <td>
                                <button className="border-0">
                                  <i className="fa-solid fa-trash"></i>
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="table-pagination">
                        <p>Showing 1-1 of 1 records</p>
                      </div>

                      <div className="area-pagination">
                        <nav aria-label="Page navigation example">
                          <ul class="pagination justify-content-end">
                            <li class="page-item disabled">
                              <a class="page-link" href="#" tabindex="-1">
                                Previous
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link" href="#">
                                1
                              </a>
                            </li>
                        
                            <li class="page-item">
                              <a class="page-link" href="#">
                                Next
                              </a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-section-leaves">
            <p>Wednesday - 21 Aug 2024</p>
            <p>© 2024 EMS Infilon. All rights reserved</p>
          </div>

          <div className="footer-leave-image">
            <Image
              src="/Images/bottom-img.png"
              className="footer-bottom-img-leave"
              width={250}
              height={150.8}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

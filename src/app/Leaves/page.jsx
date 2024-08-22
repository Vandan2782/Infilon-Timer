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
                <Image src="/Images/corner-img.png" className="leaves-corner" width={90} height={90}/>
        </div>

        <div className="search pt-3 ms-2">
            <input type="text" placeholder="Search" className="search-input w-50" />
        </div>

        <div className="breadcrumbs">
            <p>Dashboard <i class="fa-solid fa-greater-than"></i> <span className="leaves-blue">Leaves</span> </p>
        </div>


        <div className="leaves-line">
            <div className="container-fluid">
                Leaves 
                <span className="total-leave">Total Leave : 0 (2024)</span>
            </div>

            <div className="leave-corner-image">
              <Image src="/Images/corner-img.png" width={50} height={50}/>
            </div>

            <div className="paragraph">
                    <div className="container-fluid">
                        <div className="add-btn">
                            <button><i class="fa-solid fa-plus"></i> Add</button>
                        </div>

                        <div className="input">
                            <input type="text" placeholder="Search" className="input-search" />
                        </div>
                    </div>
            </div>

            <div className="table-section-leave mt-5">
  <div className="container-fluid">
    <div className="table-responsive">
      <table className="table table-striped table-bordered table-hover">
        <thead className="thead-dark">
          <tr>
            <th>#</th>
            <th>Leave Date</th>
            <th>Leave Type</th>
            <th>Status</th>
            <th>View</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>2024-08-15</td>
            <td>Annual Leave</td>
            <td>
              <span className="badge bg-success">Approved</span>
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
          <tr>
            <td>2</td>
            <td>2024-08-20</td>
            <td>Sick Leave</td>
            <td>
              <span className="badge bg-warning text-dark">Pending</span>
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
          <tr>
            <td>3</td>
            <td>2024-08-25</td>
            <td>Casual Leave</td>
            <td>
              <span className="badge bg-danger">Rejected</span>
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

    {/* Pagination */}
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-start">
        <li className="page-item disabled">
          <a className="page-link" href="#" tabIndex="-1">
            Previous
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            1
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            Next
          </a>
        </li>
      </ul>
    </nav>
  </div>
</div>


        </div>


                   <div className="footer-section-leaves">
                      <p>Wednesday - 21 Aug 2024</p>
                      <p>© 2024 EMS Infilon. All rights reserved</p>
                   </div>

                   <div className="footer-leave-image">
                        <Image src="/Images/bottom-img.png" className="footer-bottom-img-leave" width={250} height={150.8}/>
                   </div>

    </div>

      
      </div>
    </>
  );
};

export default page;

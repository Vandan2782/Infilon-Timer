"use client"

import React from "react";
import "./holidays.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import Sidebar from "../Sidebar/page";

const page = () => {
  return (
    <>
      <div className="d-flex">
      
          <Sidebar />
       

        <div className="holiday-section">
            <div className="container-fluid">
                <Image src="/Images/corner-img.png" className="corner-top-holiday-img" width={90} height={90}/>
            </div>

            
        <div className="search pt-3 ms-2">
            <input type="text" placeholder="Search" className="search-input w-50" />
        </div>

        <div className="breadcrumbs">
            <p>Dashboard <i class="fa-solid fa-greater-than"></i> <span className="holidays-blue">Holidays</span> </p>
        </div>
        

        <div className="holiday-line">
            <div className="container-fluid">
                Holidays
            </div>

            <div className="holidays-corner-image">
                <Image src="/Images/corner-img.png" width={50} height={50} />
            </div>
            
            
            <div className="serch-holidays ms-0 mt-4">
                <input type="text" placeholder="Search" className="search-holidays-input"/>
            </div>
           

           <div className="container-fluid mt-3">
          
        <div class="table-responsive">
            <table class="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2024-11-03</td>
                        <td>Bhai duj</td>
                    </tr>
                    <tr>
                        <td>2024-12-25</td>
                        <td>Christmas</td>
                    </tr>
                    <tr>
                        <td>2024-10-31</td>
                        <td>Diwali</td>
                    </tr>
                    <tr>
                        <td>2024-10-12</td>
                        <td>Dussehra</td>
                    </tr>
                    <tr>
                        <td>2024-03-25</td>
                        <td>Holi</td>
                    </tr>
                    <tr>
                        <td>2024-08-15</td>
                        <td>Independence Day</td>
                    </tr>
                    <tr>
                        <td>2024-08-26</td>
                        <td>Janmashtami</td>
                    </tr>
                    <tr>
                        <td>2024-11-02</td>
                        <td>New Year (Gujarati)</td>
                    </tr>
                    <tr>
                        <td>2024-08-19</td>
                        <td>Raxabandhan</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="d-flex justify-content-between">
            <p className="records">Showing 1 - 9 of 9 records</p>
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item disabled">
                        <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                    </li>
                    <li class="page-item active"><a class="page-link" href="#">1</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>
        </div>
   
           </div>
           
        </div>

        <div className="footer-holidays">
              <p>Wednesday - 21 Aug 2024</p>
              <p>© 2024 EMS Infilon. All rights reserved</p>
        </div>


        <div className="footer-holiday-image">
               <Image src="/Images/bottom-img.png" className="footer-bottom-img-leave" width={250} height={150.8}/>
         </div>
        </div>
      </div>
    </>
  );
};

export default page;

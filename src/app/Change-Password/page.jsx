import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./change-password.css";
import Image from "next/image";
import Sidebar from "../Sidebar/page";

const page = () => {
  return (
    <>
      <div className="d-flex">
        
          <Sidebar />
       

        <div className="change-password-section">
            <div className="container-fluid">
                <Image src="/Images/corner-img.png" className="password-corner-img" width={90} height={90}/>
            </div>

            <div className="breadcrumbs">
            <p>Dashboard <i class="fa-solid fa-greater-than"></i> <span className="password-blue">Change Password</span> </p>
            </div>
{/* 
            <div className="col-md-4">
                <div className="container">
                    Change Password
                </div>

                <div className="change-image">
                  <Image src="/Images/corner-img.png" width={50} height={50}/>
                </div>
             </div> */}

            <div className="grid">
              <div className="row1">
                <div className="col-md-5 p-0">
                  Change Password

                  <div className="image">
                    <Image src="/Images/corner-img.png" className="sm-image" width={50} height={50}/>
                  </div>

             
                  <form>
                    <div className="form-group mt-2">
                      <label for="old-password">Old Password <span className="text-danger">*</span></label>
                      <input type="text" placeholder="Old Password" className="d-block w-75 mt-2 py-1" />
                    </div>
                    <hr></hr>

                    <div className="form-group mt-3">
                      <label for="new-password">New Password <span className="text-danger">*</span></label>
                      <input type="text" placeholder="New Password" className="d-block w-75 mt-2 py-1" />
                    </div>

                    <div className="form-group mt-3">
                      <label for="repeat-password">Repeat Password <span className="text-danger">*</span></label>
                      <input type="text" placeholder="Repeat Password" className="d-block w-75 mt-2 py-1" />
                    </div>

                    <div className="btn-update">
                      <button><i class="fa-solid fa-check"></i> Update</button>
                    </div>
                  </form>
             
                </div>
              </div>
            </div>

            <div className="paragraph">
            <p>Wednesday - 21 Aug 2024</p>
            <p>© 2024 EMS Infilon. All rights reserved</p>
            </div>
              

              <div className="bottom-pass-image">
          
                <Image src="/Images/bottom-img.png" className="bottom-img-pass-corner" width={250} height={150.8}/>
           
               
              </div>
            
      

     
        </div>
      </div>
    </>
  );
};

export default page;

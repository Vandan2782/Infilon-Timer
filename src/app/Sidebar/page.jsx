"use client";

import React, { useState } from "react";
import "./sidebar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };



  return (
    <>
      <div className={`nav-side ${isCollapsed ? "collapsed" : ""}`}>
        <div className={`nav-side__logo ${isCollapsed ? "hidden" : ""}`}>
          <Image
            src="/Images/logo.png"
            className="big-img text-center"
            width={200}
            height={50}
            alt="Logo"
          />
          <span
            className="arrow-left ms-1 fa-lg"
            onClick={toggleSidebar}
          >
            <i className="fa-solid fa-arrow-left"></i>
          </span>
        </div>

        <div className={`sidebar ${isCollapsed ? "hidden" : ""}`}>
          <ul className="navigation-menu">
            <div className="nav-category-divider">MAIN</div>
            <div className="links" id="nav-links">
              <Link href="/Dashboard">
                <li>
                  <i className="fa-solid fa-house me-2"></i>
                  Dashboard
                </li>
              </Link>
              <Link href="/Leaves">
                <li>
                  <i className="fa-solid fa-person-hiking fa-lg me-2"></i>
                  Leaves
                </li>
              </Link>
              <Link href="/Holidays">
                <li>
                  <i className="fa-solid fa-square-h fa-lg me-2"></i>
                  Holidays
                </li>
              </Link>
              <Link href="/Change-Password">
                <li>
                  <i className="fa-solid fa-shield-halved fa-lg me-2"></i>
                  Change Password
                </li>
              </Link>
              <Link href="/">
                <li>
                  <i className="fa-solid fa-right-from-bracket fa-lg me-2"></i>
                  Log Out
                </li>
              </Link>
            </div>
          </ul>

          {/* Accordation */}
         
         <div className="card">
          <div className="image-section">
             <Image src="/Images/bg-blue.svg" width={70} height={70}/>
          </div>

          <div className="profile-image">
            <Image src="/Images/Profile-img.svg" width={25} height={25}/>
          </div>

          <div className="ems">
            EMS Infilon
          </div>

          <div className="lower-name">
            Vandan Patel
          </div>

          <div className="angle" >
          <i class="fa-solid fa-angle-right"></i>
          </div>
         </div>

        </div>

        <span
          className={`toggle-bars fa-lg ${isCollapsed ? "" : "hidden"}`}
          onClick={toggleSidebar}
        > 
        <Image src="/Images/logo.png" width={60} height={15}/> <i className="fa-solid fa-bars"></i>
         
        </span>
      

      </div>

      <div className={`main-content ${isCollapsed ? "expanded" : ""}`}>
        {/* Your main content goes here 
       <h1>Main Content</h1> */}
      </div>

   
   
    </>
  );
};

export default Sidebar;

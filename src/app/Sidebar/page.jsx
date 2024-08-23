"use client";

import React, { useState,useEffect } from "react";
import "./sidebar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isCard2Visible, setIsCard2Visible] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleCard2Visibility = () => {
    setIsCard2Visible(!isCard2Visible);
  };

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(new Date().toLocaleTimeString());
    };

    // Set the initial time
    updateTime();

    // Update time every second
    const timer = setInterval(updateTime, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, []);
  

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
          <span className="arrow-left ms-1 fa-lg" onClick={toggleSidebar}>
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
                  Logout
                </li>
              </Link>
            </div>
          </ul>

          {/* Accordation */}
        
 
         <div className="card1">
            <div className="image-section">
              <Image src="/Images/bg-blue.svg" width={54} height={49.8} />
            </div>

            <div className="profile-image">
              <Image src="/Images/Profile-img.svg" width={20} height={20} />
            </div>

            <div className="ems">EMS Infilon</div>

            <div className="lower-name">Vandan Patel</div>

            <div className="angle" onClick={toggleCard2Visibility}>
              <i
                className={`fa-solid fa-angle-right ${
                  isCard2Visible ? "rotated" : ""
                }`}
              ></i>
            </div>

            <div className={`card2 ${isCard2Visible ? "visible" : "hidden"}`}>
               <div className="setting">
                 <p className="opacity-50">Setting</p>
               </div>

               <div className="time-live">
                 <div>{currentTime}</div>
               </div>

              <div className="lower-link ms-2">
              <Link href="/Dashboard" id="lower-link-inside">
                <li>
                  <i className="fa-solid fa-house me-1"></i>
                  Dashboard
                </li>
              </Link>
              </div>

              <div className="btn-log-out">
               <Link href="/"><button>Logout</button></Link>   
              </div>
            
            </div>
          </div>
     
      
        </div>
       

        <span
          className={`toggle-bars fa-lg ${isCollapsed ? "" : "hidden"}`}
          onClick={toggleSidebar}
        >
          {/* <Image src="/Images/logo.png" width={60} height={15} /> */}
          <i className="fa-solid fa-bars"></i>
        </span>
      </div>

      <div className={`main-content ${isCollapsed ? "expanded" : ""}`}>
        {/* Your main content goes here */}
        {/* <h1>Main Content</h1> */}
      </div>
    </>
  );
};

export default Sidebar;

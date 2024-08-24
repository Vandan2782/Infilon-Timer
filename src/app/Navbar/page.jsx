"use client";

import React, { useState,useEffect } from 'react';
import "./Navbar.css";
import 'bootstrap/dist/css/bootstrap.css';
import Image from 'next/image';
import Link from 'next/link';

const Page = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isCard2Visible, setIsCard2Visible] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  const handleToggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleMobileToggle = () => {
    setIsMobile(!isMobile);
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
      <div className="d-flex">
        {/* Sidebar */}
        <div
          className={`sidebar  p-3 ${isCollapsed || isMobile ? 'collapsed' : ''}`}
          style={{ width: isCollapsed ? '0' : '20rem', transition: 'width 0.3s ease-in-out' }}
        >
          <div className="sidebar-header d-flex align-items-center justify-content-between">
            <Image src="/Images/logo.png" width={200} height={50} alt="Logo" className="logo" style={{ opacity: isCollapsed ? 0 : 1, transition: 'opacity 0.3s ease-in-out' }} />
            <span className="back-arrow" onClick={handleToggleSidebar}>
              {isCollapsed ? '&#9776;' : <i className="fa-solid fa-arrow-left"></i>} {/* Hamburger icon or Left arrow */}
            </span>
          </div>
          {!isCollapsed && (
            <>
              <nav className="mt-4">
                <ul className="list-unstyled">

                    <div className="nav-divider">
                        MAIN
                    </div>
               <Link href="/Dashboard"> <li>
                    <span className="me-2"><i class="fa-solid fa-house"></i></span> {/* Home icon */}
                    <span>Dashboard</span>
                  </li></Link>  
                  <li>
                    <span className="me-2"><i class="fa-solid fa-person-hiking fa-lg"></i></span> {/* User icon */}
                    <span>Leaves</span>
                  </li>
                  <li>
                    <span className="me-2"> <i className="fa-solid fa-square-h fa-lg"></i></span> {/* Calendar icon */}
                    <span>Holidays</span>
                  </li>
                  <li>
                    <span className="me-2"><i className="fa-solid fa-shield-halved fa-lg"></i></span> {/* Lock icon */}
                    <span>Change Password</span>
                  </li>
                  <li>
                    <span className="me-2"><i className="fa-solid fa-right-from-bracket fa-lg"></i></span> {/* Logout icon */}
                    <span>Logout</span>
                  </li>
                </ul>
              </nav>
              <div className="sidebar-footer mt-auto">
                <div className="profile-section d-flex align-items-center">
                
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
              </div>
            </>
          )}
        </div>

        {/* Mobile screen toggle bar */}
        {isMobile && (
          <span className="mobile-toggle" onClick={handleMobileToggle}>
            &#10005; {/* Cross icon */}
          </span>
        )}

        {/* Toggle button when collapsed */}
        {isCollapsed && (
          <div className="toggle-bar" onClick={handleToggleSidebar}>
            <span>&#9776;</span> {/* Hamburger icon */}
          </div>
        )}
      </div>
    </>
  );
};

export default Page;

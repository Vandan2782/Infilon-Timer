"use client";

import { useState } from 'react';
import React from 'react';
import "./dashboard.css";
import Sidebar from '../Sidebar/page';
import "bootstrap/dist/css/bootstrap.min.css";
import Image from 'next/image';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const page = () => {
  const [value, setValue] = useState('');

  return (
    <div className='d-flex'>
   

      <Sidebar />

      {/* </div> */}
     
      <div className="dashboard-section">
        <div className="container-fluid">
          <div className="header">
            <Image src="/Images/corner-img.png" className='dashboard-corner-img' width={90} height={90}/>
          </div>

          <div className="row" id='header-id'>
            <div className="col-md-12">
              <div className="dashboard-header">
                <h5 className='p-2'>Welcome, <span className='name'>Vandan Patel!</span></h5>  
              </div>
            </div>
          </div>

          <div className="grid1">
            <p className ="timer">Timer</p>

            <div className="image-timer-corner">
              <Image src="/Images/corner-img.png" width={50} height={50}/>
            </div>

            <div className='summernote'>
              <p className='project'>Project<span className='text-danger'>*</span></p>

              <div className="select mt-3">
                <select className='w-100'>
                  <option value="option">Select</option>
                  <option value="option1">Trainning</option>
                  <option value="option2">Nidhi Website</option>
                  <option value="option3">Pyrology</option>
                </select>
              </div>

              <p className='project mt-3'>Please describe the task in detail with Statistics <span className='text-danger'>*</span></p>

              <ReactQuill className='react-quill'
                value={value}
                onChange={(content, delta, source, editor) => setValue(editor.getHTML())}
                placeholder="Enter the task description..."
                modules={{
                  toolbar: [
                    [{ header: [1, 2, 3, 4, 5, 6, false] }],
                    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                    [{ align: ['right', 'center', 'justify'] }],
                    [{ list: 'ordered' }, { list: 'bullet' }],
                    ['link', 'image'],
                  ],
                }}
              />
            
              <div className="btn">
                <button className='mt-4'>Start Timer</button>
              </div>
              </div>

               <div className="today-work">
                    <div className="container-fluid p-2">
                         Today's Work
                    </div>

                    <div className="image-today-work">
                      <Image src="/Images/corner-img.png" width={50} height={50}/>
                    </div>

                   <div className="card-section mt-3">
                      <div className="col-md-3">
                          <div className="task">
                             <h6 className='trainning'>Trainning</h6>
                             <p>Start Time :</p>
                             <p>End Time:</p>
                          </div>
                      </div>
                   </div>

                   <div className="footer-section">
                      <p>Wednesday - 21 Aug 2024</p>
                      <p>© 2024 EMS Infilon. All rights reserved</p>
                   </div>

                   <div className="bottom-corner-img">
                        <Image src="/Images/bottom-img.png" className='bt-img' width={250} height={150.8}/>
                   </div>
                </div>


          </div>
        </div>

      </div>
    </div>
  );
};

export default page;
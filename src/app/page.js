import Image from "next/image";
import "./globals.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Link from "next/link";




export default function Home() {
  return (
  <>
    <div className="background">
      
      <div className="row inner-wrapper">

   
        <div className="col-md-8"> </div>

        <div className="col-md-4">
            <div id="hex3" className="hexagon-wrapper">
                <Image src="/Images/corner-img.png" width={90} height={120}/>
            </div>

            <div className="logo-section d-flex justify-content-center">
                <Image src="/Images/logo.png" width={260} height={65}/>
            </div>


        <form className="login-form">
            <div className="form-group d-flex  mt-5">
                <input name="user" type="text" class="form-control" placeholder="Username"/>
            </div>

            <div className="form-group d-flex  mt-3">
                <input name="password" type="text" class="form-control" placeholder="Password"/>
            </div>

          <div className="">
          <Link href="/Dashboard" ><button className="login-btn"><i class="fa-solid fa-arrow-right me-1"></i>Login</button></Link> 
          </div>
        
        </form>

        <div className="container d-flex justify-content-center mt-5 pt-5">
          <p className="line">© 2024 EMS Infilon. All rights reserved.</p>
        </div>
           
        </div>

        </div>
    </div>
  </>
  );
}

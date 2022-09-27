// import { useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../components/home.css"
const Home = () => {
    //   const [form,setForm] = useState({email:"",password:""});
    const navigate1 = useNavigate();
    const navigate2 = useNavigate()
    //   const handleOnChange = (key,value)=>{
    //     setForm(prev=>({...prev,[key]:value}))
    //   }
    //   const handleSubmit =async()=>{
    //     await axios.post("http://localhost:8000/api/auth/signup",form)
    //   navigate("/menu")
    //   }
    const handleClick1 = () => {
        navigate1("/menu")
    }
    const handleClick2 = () => {
        navigate2("/signup")
    }
    return (
        <div className="page-bg">
            <header className="text-bg-dark">
                <div className="px-3 py-2 border-bottom mb-3">
                    <div className="container d-flex flex-wrap justify-content-center">
                        <form className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto search" role="search">
                            <input type="search" className="form-control" placeholder="Search 8,000+ tutorials" aria-label="Search" />
                        </form>
                        <div className="col-lg-5 align-self-center">
                            <img alt="logo" src="https://upload.wikimedia.org/wikipedia/commons/3/39/FreeCodeCamp_logo.png" style={{ height: '30px', width: '250px', objectFit: 'cover', objectPosition: '50% 50%', marginLeft: "-170px" }}></img>
                        </div>
                        <div className="text-end">
                            <button type="button" className="btn btn-dark btn-outline-light" onClick={handleClick1}>Menu</button>
                            <button type="button" className="btn btn-warning" onClick={handleClick2}>Sign in</button>
                        </div>
                    </div>
                </div>
            </header>
            <div className="container offset">
                <div className="col-lg-8 col-lg-offset-2 col-sm-10 col-sm-offset-1 col-xs-12 test">
                    <h1>Learn to code -- for free.</h1>
                    <h1>Build projects.</h1>
                    <h1>Earn certifications.</h1>
                    <p className="page-content">Since 2014, more than 40,000 freeCodeCamp.org graduates have gotten jobs at tech
                        companies including:</p>

                    <div className="container text-center">
                        <div className="col align-center">
                            <div className="row justify-content-center logo-row">
                                <div className="col-md-1">
                                    <i className="fa-brands fa-apple fa-2x"></i>
                                </div>
                                <div className="col-md-1">
                                    <i className="fa-brands fa-google fa-2x"></i>
                                </div>
                                <div className="col-md-1">
                                    <i className="fa-brands fa-microsoft fa-2x"></i>
                                </div>
                                <div className="col-md-1">
                                    <i className="fa-brands fa-spotify fa-2x"></i>
                                </div>
                                <div className="col-md-1">
                                    <i className="fa-brands fa-amazon fa-2x"></i>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="spacer" style={{ padding: '15px 0px', height: '1px' }}></div>
                    <button className="btn btn-warning btn-xl" onClick={handleClick2}>Get Started (it's free)</button>

                </div>
            </div>
        </div>
    )
}

export default Home;




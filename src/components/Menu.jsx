// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../components/menu.css';
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
const Menu = () => {
    // const [form, setForm] = useState({ name: "", email: "", password: "" });
    const navigate1 = useNavigate()
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)
    // const handleOnChange = (key, value) => {
    //     setForm(prev => ({ ...prev, [key]: value }))
    // }
    const getApi = async () => {
        await axios.get('https://tranquil-cove-77086.herokuapp.com/api/auth/fetchall')
            .then(function (response) {
                // handle success
                console.log(response);
                setData(response.data.data)
                setLoading(false)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
                console.log("loading datas");
            });
    }

    const handleClick1 = () => {
        navigate1("/menu")
    }
    useEffect(() => {
        getApi()
    }, [])
    return (loading) ? ('Loading') : (
        <div>
            <header className="text-bg-dark">
                <div className="px-3 py-2 border-bottom mb-3">
                    <div className="container d-flex flex-wrap justify-content-center">
                        <form className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto search" role="search">
                            <input type="search" className="form-control" placeholder="Search 8,000+ tutorials" aria-label="Search" />
                        </form >
                        <div className="col-lg-5 align-self-center">
                            <img alt="logo" src="https://upload.wikimedia.org/wikipedia/commons/3/39/FreeCodeCamp_logo.png" style={{ height: '30px', width: '250px', objectFit: 'cover', objectPosition: '50% 50%', marginLeft: "-170px" }}></img>
                        </div>
                        <div className="text-end">
                            <button type="button" className="btn btn-light text-dark me-2" onClick={handleClick1}>Menu</button>
                        </div>
                    </div >
                </div >
            </header >
            <div className="container">
                <div className="row>">
                    <div className="text-center quote-partial col-md-6" style={{ marginLeft: "auto", marginRight: "auto" }}>
                        <blockquote className="blockquote">
                            <h2 align="center" style={{ marginBottom: "35px" }}> Welcome to freecodecamp.org</h2>
                            <span>
                                <q align="justify">I have not failed. I've just found 10,000 ways that won't work.</q>
                                <footer class="quote-author blockquote-footer" style={{ marginTop: "15px" }}>
                                    <cite>Thomas A. Edison</cite>
                                </footer>
                            </span>
                        </blockquote>
                    </div>
                    <div className="container align-center justify-content-center" style={{ alignItems: "center" }}>
                        <div className="row">
                            <div className="col-md-6 col-design" style={{ justifyContent: "space-between", padding: "10px 16px", marginLeft: "auto", marginRight: "auto" }}>
                                <i className={data[0].icon_url}></i>
                                <text style={{ fontSize: '19.8px', fontFamily: "Roboto Mono, monospace" }}>{data[0].name}</text>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-design" style={{ justifyContent: "space-between", padding: "10px 16px", marginLeft: "auto", marginRight: "auto" }}>
                                <i className={data[1].icon_url}></i>
                                <text style={{ fontSize: '19.8px', fontFamily: "Roboto Mono, monospace" }}>{data[1].name}</text>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-design" style={{ justifyContent: "space-between", padding: "10px 16px", marginLeft: "auto", marginRight: "auto" }}>
                                <i className={data[2].icon_url}></i>
                                <text style={{ fontSize: '19.8px', fontFamily: "Roboto Mono, monospace" }}>{data[2].name}</text>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-design" style={{ justifyContent: "space-between", padding: "10px 16px", marginLeft: "auto", marginRight: "auto" }}>
                                <i className={data[3].icon_url}></i>
                                <text style={{ fontSize: '19.8px', fontFamily: "Roboto Mono, monospace" }}>{data[3].name}</text>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-design" style={{ justifyContent: "space-between", padding: "10px 16px", marginLeft: "auto", marginRight: "auto" }}>
                                <i className={data[4].icon_url}></i>
                                <text style={{ fontSize: '19.8px', fontFamily: "Roboto Mono, monospace" }}>{data[4].name}</text>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-design" style={{ justifyContent: "space-between", padding: "10px 16px", marginLeft: "auto", marginRight: "auto" }}>
                                <i className={data[5].icon_url}></i>
                                <text style={{ fontSize: '19.8px', fontFamily: "Roboto Mono, monospace" }}>{data[5].name}
                                </text>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-design" style={{ justifyContent: "space-between", padding: "10px 16px", marginLeft: "auto", marginRight: "auto" }}>
                                <i className={data[6].icon_url}></i>
                                <text style={{ fontSize: '19.8px', fontFamily: "Roboto Mono, monospace" }}>{data[5].name}</text>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default Menu;




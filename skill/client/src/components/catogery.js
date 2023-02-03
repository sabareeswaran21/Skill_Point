import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './comp.css';
import { Link } from "react-router-dom";
import img1 from './skill.png';

export default function Category() {

    const [experiance, setExperiance] = useState([]);

    const [detail,setDetail]=useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/demo.json')
            .then(response => response.json())
            .then(json => setDetail(json))
    }, [])

    useEffect(() => {
        fetch('http://localhost:3002/experiance')
            .then(response => response.json())
            .then(json => setExperiance(json))
    }, [])

   
    return (
        <>
            <div className=' container-fluid'>
                <div className='row bg'>
                    <div className=' col-lg-1 mt-1'>
                        <img src={img1} className=" col-lg-12 background" />
                    </div>
                    <div className='col-lg-8'></div>
                    <div className='col-lg-3'>
                        <nav className="navbar navbar-expand-lg navbar-light ">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div className="navbar-nav text-light">
                                    <a className="nav-item nav-link text-light active" href="/">Home <span class="sr-only">(current)</span></a>
                                    <a className="nav-item nav-link text-light" href="view">Contact us</a>
                                    <a className="nav-item nav-link text-light" href="/add">Category</a>
                                    <button type='submit' className=' btn btn-primary'>Login</button>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className='row mt-5'>
                    <div className='col-lg-3'></div>
                    <div className=' col-lg-6 row text-center'>
                        <input type="search" id="form1" className=" p-4 col-lg-9 form-control" />
                        <button type="button" class=" col-lg-3 btn btn-primary">Search
                        </button>
                    </div>
                    <div className='col-lg-3'></div>
                </div>
                <div className='row mt-5 text-center'>
                    <div className='col-lg-2'>
                        <select class="form-select p-2" aria-label="Default select example">
                            <option selected>Salary-Range</option>
                            <option value="1">3Lpa-4.5Lpa</option>
                            <option value="2">7Lpa-9Lpa</option>
                            <option value="3">11Lpa-14.5Lpa</option>
                        </select>
                    </div>
                    <div className='col-lg-2'>
                    <select class="form-select p-2" aria-label="Default select example">
                            <option selected>Education</option>
                            <option value="1">BE/BTech</option>
                            <option value="1">MBA/MCA</option>
                            <option value="2">ME/MTech</option>
                            <option value="3">Arts&Science</option>
                        </select>
                    </div>
                    <div className='col-lg-2'>
                    <select class="form-select p-2" aria-label="Default select example">
                            <option selected>Experiances</option>
                            <option value="1"> 0 to 5</option>
                            <option value="1">6 to 15</option>
                            <option value="2">16 to 25</option>
                            <option value="3">26 to 35</option>
                        </select>
                    </div>
                    <div className='col-lg-2'>
                    <select class="form-select p-2" aria-label="Default select example">
                            <option selected>Job Location</option>
                            <option value="1">Countey</option>
                            <option value="1">City</option>
                        </select>
                    </div>
                
                <div className='col-lg-2 '>
                <select class="form-select p-2" aria-label="Default select example">
                            <option selected>Work Time</option>
                            <option value="1">Full-Time</option>
                            <option value="1">Freelance</option>
                            <option value="2">Contacts</option>
                            <option value="3">Intenship</option>
                        </select>
                </div>
                <div className='col-lg-2 '>
                <select class="form-select p-2" aria-label="Default select example">
                            <option selected>Notice period</option>
                            <option value="1">30 Days</option>
                            <option value="1">60 Days</option>
                            <option value="2">90 Days</option>
                            <option value="3">120 Days</option>
                        </select>
                </div>
                    
                    </div>
                <div className="row mt-4">
                    <div className="col-lg-12 text-center">
                        <div className="table-responsive">
                            <table className="table table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Domain</th>
                                        <th>Degree</th>
                                        <th>Experiance</th>
                                        <th>Work type</th>
                                        <th>Notice period</th>
                                        <th>process</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                            experiance.map((value, index) => (
                                                <tr>
                                                    <td>{value.id}</td>
                                                    <td>   {
                                            detail.map((v,k)=>(
                                                <img src={v.img} height="100" width="100" className="rounded-circle"/>
                                            ))
                                        }</td>
                                                    <td>{value.name}</td>
                                                    <td>{value.domain}</td>
                                                    <td>{value.degree}</td>
                                                    <td>{value.experiance}</td>
                                                    <td>{value.worhtype}</td>
                                                    <td>{value.noticeperiod}</td>
                                                    <td></td>
                                                </tr>
                                            ))
                                        }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
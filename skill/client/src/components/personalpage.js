import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './comp.css';
import img1 from './skill.png';

export default function Personal() {

    const handlesubmit = async (event) => {
        event.preventDefault();
        var key = new FormData(event.target);
        var value = { headers: { "enctypr": "multipart/form-data" } };

        

        var image = document.getElementById("image").value;
        var name = document.getElementById("name").value;
        var domain = document.getElementById("domain").value;
        var degree = document.getElementById("degree").value;
        var experiance = document.getElementById( "experiance").value;
        var worktype = document.getElementById("worktype").value;
        var notice = document.getElementById("notice").value;


        if (image === '' || image === null) {
            alert('enter your firstname');
        }
        else if (name === '' || name === null) {
            alert('enter your lastname');
        }
        else if (domain === '' || domain === null) {
            alert('enter your email');
        }
        else if (degree === 'male' && degree ===null)  {
            alert('mention your option');
        }
        else if  (experiance === '' || experiance === null) {
            alert('enter your phone no');
        }
        else if (worktype === '' || worktype === null) {
            alert('enter your alternate number');
        }
        else if (notice === '' || notice === null) {
            alert('enter your alternate number');
        }
        else {
            await axios.post("http://localhost:3002/add", key, value)
                .then(function (res) {
                    if (res.data.status === 'error') {
                        alert("Error");
                        window.location.reload();
                    }
                    else if (res.data.status === 'success') {
                        alert('Data inserted');
                        window.location.reload();
                    }
                })
                .catch(function (err) {
                    alert(err);
                    window.location.reload();
                })
        }


    }
    return (
        <>
        <div className='container-fluid'>
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
                <form onSubmit={handlesubmit}>
                <div className='container'>
                <div className='row text-center mt-5'>
                            <div className='col-lg-2'>
                                <h5 className='text-center'>Image:</h5>
                            </div>
                            <div className='col-lg-4'>
                                <input type="file" id='image' name='image' className=' col-lg-11 form-control text-center' />
                            </div>
                            <div className='col-lg-2'>
                                <h5 className='text-center'>Name:</h5>
                            </div>
                            <div className='col-lg-4'>
                                <input type="text" id='name' name='name' className='col-lg-11 form-control text-center' />
                            </div>
                        </div>
                        <div className='row text-center mt-5'>
                            <div className='col-lg-2'>
                                <h5 className='text-center'>Domain:</h5>
                            </div>
                            <div className='col-lg-4'>
                                <input type="text" id='domain' name='domain' className=' col-lg-11 form-control text-center' />
                            </div>
                            <div className='col-lg-2'>
                                <h5 className='text-center'>Degree:</h5>
                            </div>
                            <div className='col-lg-4'>
                                <input type="text" id='degree' name='degree' className='col-lg-11 form-control text-center' />
                            </div>
                        </div>
                        <div className='row text-center mt-5'>
                            <div className='col-lg-2'>
                                <h5 className='text-center'>Experiance:</h5>
                            </div>
                            <div className='col-lg-4'>
                                <input type="text" id='experiance' name='experiance' className=' col-lg-11 form-control text-center' />
                            </div>
                            <div className='col-lg-2'>
                                <h5 className='text-center'>Work type:</h5>
                            </div>
                            <div className='col-lg-4'>
                                <input type="text" id='worktype' name='worktype' className='col-lg-11 form-control text-center' />
                            </div>
                        </div>
                        <div className='row text-center mt-5'>
                            <div className='col-lg-2'>
                                <h5 className='text-center'>Notice period:</h5>
                            </div>
                            <div className='col-lg-4'>
                                <input type="text" id='notice' name='notice' className=' col-lg-11 form-control text-center' />
                            </div>
                            <div className='col-lg-6'></div>
                        </div>
                        <div className='row mt-5'>
                            <div className='col-lg-5'></div>
                            <div className='col-lg-2'>
                                <button type='submit' name='submit' id='submit' value='submit' className=' text-center btn btn-primary col-lg-12'>Submit</button>
                            </div>
                            <div className='col-lg-5'>
                            
                            </div>
                        </div>
                </div>
                </form>
        </div>
        </>
    );
}
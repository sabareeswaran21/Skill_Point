import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './comp.css';
import img1 from './skill.png';
import img2 from './two.jpg';
import img3 from './on.webp';
import img4 from './six.jpg';
import img5 from './sevenee.jpg';
import img6 from './eight.png';
import img7 from './nine.jpg';
import img8 from './ten.jpg';
import img9 from './ceo1.jpg';
import img10 from './ceo3.jpg';
import img11 from './ceo8.png';
import 'bootstrap/dist/js/bootstrap.bundle';


export default function Landingpage() {
    return (
        <>
            <div className=' back container-fluid'>
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
                                    <a className="nav-item nav-link text-light" href="/view">Contact us</a>
                                    <a className="nav-item nav-link text-light" href="/add">Category</a>
                                    <button type='submit' className=' btn btn-primary'>Login</button>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-12'></div>
                </div>
                <div className='row'>
                    <div className='col-lg-3'></div>
                    <div className='col-lg-6 text-center'>
                        <h2 className='text'>We bring skills talents to you</h2>
                    </div>
                    <div className='col-lg-3'></div>
                </div>
                <div className='row'>
                    <div className='col-lg-3'></div>
                    <div className='col-lg-6 text-center'>
                        <p className='text1'>Lorem ipsum is simply dummy text of the printing and typresetting industry.</p>
                    </div>
                    <div className='col-lg-3'></div>
                </div>
                <div className='row'>
                    <div className='col-lg-3'></div>
                    <div className=' col-lg-6 row text-center'>
                        <input type="search" id="form1" className=" p-4 col-lg-9 form-control" />
                        <button type="button" class=" col-lg-3 btn btn-primary">Search
                        </button>
                    </div>
                    <div className='col-lg-3'></div>
                </div>
                <div className='row'>
                    <div className='col-lg-3'></div>
                    <div className='col-lg-6 text-center'>
                        <p className='text2'>Popular: Data Analysist Product Designer Java Developer.</p>
                    </div>
                    <div className='col-lg-3'></div>
                </div>
            </div>
            <div className='container-fluid '>
                <div className='row bg-light'>
                    <div className='col-lg-6'>
                        <h1 className='text4 p-4'>Key points to search skills</h1>
                    </div>
                    <div className='col-lg-6'></div>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div id="carouselExampleControls" class="carousel  carousel-dark slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">


                                        <div class="row p-5">

                                            <div class="col-lg-2">
                                                <div class="card col-lg-12 text-center">
                                                    <div class="card-body">
                                                        <img src={img3} className=" col-lg-12 background" />
                                                        <h5 class="card-title"></h5>
                                                        <a href="#" class=" btn btn-primary">Design</a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-lg-2">
                                                <div class="card col-lg-12 text-center">
                                                    <div class="card-body">
                                                        <img src={img4} className=" col-lg-12 background" />
                                                        <h5 class="card-title"></h5>
                                                        <a href="#" class="btn btn-primary">Architecture</a>
                                                    </div>
                                                </div>
                                            </div>


                                            <div class="col-lg-2">
                                                <div class="card col-lg-12">
                                                    <div class="card-body text-center">
                                                        <img src={img5} className=" col-lg-12 background" />

                                                        <h5 class="card-title"></h5>
                                                        <a href="#" class="btn btn-primary">Business</a>
                                                    </div>
                                                </div>
                                            </div>


                                            <div class="col-lg-2">
                                                <div class="card col-lg-12">

                                                    <div class="card-body text-center">
                                                        <img src={img6} className=" col-lg-12 background" />
                                                        <h5 class="card-title"></h5>
                                                        <a href="#" class="btn btn-primary ">Science & Technology</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class=" cd1 col-lg-2 ">
                                                <div class="card col-lg-12">
                                                    <div class="card-body text-center ">
                                                        <img src={img7} className=" col-lg-12 background" />
                                                        <h5 class="card-title"></h5>
                                                        <a href="#" class="btn btn-primary">Entertainment</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-2">
                                                <div class="card col-lg-12 ">
                                                    <div class="card-body text-center">
                                                        <img src={img8} className=" col-lg-12 background" />
                                                        <h5 class="card-title"></h5>

                                                        <a href="#" class="btn btn-primary">Medical</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' p-5 ground'>
                    <div className='row p-5'>
                        <div className='col-lg-1'></div>
                        <div className='col-lg-2 text-left'>
                            <h4 className='text5'>Identify your interest</h4>
                            <p className='text5'>Assess your traits and ability to decide your career path you can write your field of interests and hobbies alongsides your skill set you can write your field of</p>
                        </div>
                        <div className='col-lg-6'></div>
                        <div className='col-lg-2 text-right'>
                            <h4 className='text5'>Take help from online portals</h4>
                            <p className='text5'>Some online platforms can allow you to search for jobs relevent to your skills you can filter your job search depending on a particular skill</p>
                        </div>
                        <div className='col-lg-1'></div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-4'></div>
                        <div className='col-lg-4'>
                            <img src={img2} className="student col-lg-12 background" />
                        </div>
                        <div className='col-lg-4'></div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-1'></div>
                        <div className='col-lg-2 text-left'>
                            <h4 className='text5'>Ask for other's Suggestions</h4>
                            <p className='text5'>When asking others for job Suggestions,be specific about your requirement and the skills your wish to offer it can become easier for others to help you if they know your abilities</p>
                        </div>
                        <div className='col-lg-6'></div>
                        <div className='col-lg-2 text-right'>
                            <h4 className='text5'>Select a job from the list</h4>
                            <p className='text5'>After going through the list of different job positiong find a job that matches your skill look closely and research each job on your own from the list</p>
                        </div>
                        <div className='col-lg-1'></div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-6'>
                        <h1 className='p-4'>Top Job Domain</h1>
                    </div>
                    <div className='col-lg-6'></div>
                </div>

                <div className='row'>
                    <div className='col-lg-12'>
                        <div id="carouselExampleControls" class="carousel carousel-dark slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">


                                    <div class="row p-5">

                                        <div class="col-lg-2 ">
                                            <div class="cloud col-lg-12 text-center">
                                                <div class="card-body">
                                                    <h5 class="card-title"></h5>
                                                </div>
                                                <div class="card-subtitle text-light ">
                                                    <h4 className='mt-5 p-4'>Cloud Computing</h4>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-lg-2 ">
                                            <div class="ai col-lg-12 text-center">
                                                <div class="card-body">
                                                    <h5 class="card-title"></h5>
                                                </div>
                                                <div class="card-footer text-light mt-4">
                                                    <h4 className='mt-5'>Ai and Data Science</h4>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="col-lg-2 ">
                                            <div class="cyber col-lg-12 text-center">
                                                <div class="card-body">
                                                    <h5 class="card-title"></h5>
                                                </div>
                                                <div class="card-footer text-light mt-2">
                                                    <h4 className='mt-5'>Cyber and Network Security</h4>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-lg-2 ">
                                            <div class="project col-lg-12 text-center">
                                                <div class="card-body">
                                                    <h5 class="card-title"></h5>
                                                </div>
                                                <div class="card-footer text-dark mt-5">
                                                    <h4 className=' mt-5 '>Project</h4>
                                                    <h4 className='mb-1'>Management</h4>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-lg-2 ">
                                            <div class="dm col-lg-12 text-center">
                                                <div class="card-body">
                                                    <h5 class="card-title"></h5>
                                                </div>
                                                <div class="card-footer text-dark mt-5">
                                                    <h4 className='mt-5'>Digital Marketing</h4>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-lg-2 ">
                                            <div class="process col-lg-12 text-center">
                                                <div class="card-body">
                                                    <h5 class="card-title"></h5>
                                                </div>
                                                <div class="card-footer text-light mt-5">
                                                    <h4 className='mt-5'>Process Planning</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row bg-primary p-4'>
                    <div className='col-lg-2'></div>
                    <div className='col-lg-2 '>
                        <h1>1M+</h1>
                        <h3>Users</h3>
                    </div>
                    <div className='col-lg-2 '>
                        <h1>2M+</h1>
                        <h3>Profiles</h3>
                    </div>
                    <div className='col-lg-2 '>
                        <h1>5000+</h1>
                        <h3>Skill</h3>
                    </div>
                    <div className='col-lg-2 '>
                        <h1>2M+</h1>
                        <h3>Searches</h3>
                    </div>
                </div>
            </div>
            <div className='row bag '>
                <div className='sm col-lg-12'>
                    <div className='col-lg-12'>
                        <h1 className='te text-center'>Find the skilled person hear</h1>
                    </div>
                    <div className='col-lg-3'></div>
                    <div className='row'>
                        <div className='col-lg-12'>

                        </div>
                    </div>
                    <div className='col-lg-12 '>
                        <p className='para text-center'>Lorem ipsom is simply dummy text of the printing and typesetting industry.Lorem ipsum has been the industry's standerd dummy text over ever since the 1500s when an unknown printer took a gallery of type and scrambled it to make a type specimen book</p>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-6'>
                    <h1 className='ml-5 p-5'>Current Trending Skills</h1>
                </div>
                <div className='col-lg-3'></div>
            </div>
            <div className='row'>
                <div className='col-lg-12'>

                </div>
            </div>
            <div className='row'>
                <div className='col-lg-6'>
                    <h1 className='ml-5 p-5'>Popular Community</h1>
                </div>
                <div className='col-lg-3'></div>
            </div>
            <div className='row'>
                <div className='col-lg-12'>
                    <div id="carouselExampleControls" class="carousel carousel-dark slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="row p-5">
                                    <div className='col-lg-1'></div>
                                    <div class="col-lg-2 ">
                                        <div class=" pop col-lg-12 text-center">
                                            <div class="col-lg-12"></div>
                                            <div class="card-body">
                                                <h5 class="card-title">
                                                    <h4 className='mt-5 p-4'></h4>
                                                </h5>
                                            </div>
                                            <div class="card-footer bg-light  text-dark ">
                                                <h6 className='col-lg-12 text-center'>Cloud Computing</h6>
                                                <a href="#" class="btn btn-primary col-lg-12">Join</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-2 ">
                                        <div class=" pop1 col-lg-12 text-center">
                                            <div class="col-lg-12"></div>
                                            <div class="card-body">
                                                <h5 class="card-title">
                                                    <h4 className='mt-5 p-4'></h4>
                                                </h5>
                                            </div>
                                            <div class="card-footer bg-light  text-dark ">
                                                <h6 className='col-lg-12 text-center'>Architecture Right</h6>
                                                <a href="#" class="btn btn-primary col-lg-12">Join</a>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="col-lg-2 ">
                                        <div class=" pop2 col-lg-12 text-center">
                                            <div class="col-lg-12"></div>
                                            <div class="card-body">
                                                <h5 class="card-title">
                                                    <h4 className='mt-5 p-4'></h4>
                                                </h5>
                                            </div>
                                            <div class="card-footer bg-light mt-3  text-dark ">
                                                <h6 className='col-lg-12 text-center'>Photography</h6>
                                                <a href="#" class="btn btn-primary col-lg-12">Join</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-2 ">
                                        <div class=" pop3  col-lg-12 text-center">
                                            <div class="col-lg-12"></div>
                                            <div class="card-body">
                                                <h5 class="card-title">
                                                    <h4 className='mt-5 p-4'></h4>
                                                </h5>
                                            </div>
                                            <div class="card-footer bg-light mt-3  text-dark ">
                                                <h6 className='col-lg-12 text-center'>UX Marathon</h6>
                                                <a href="#" class="btn btn-primary col-lg-12">Join</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-2 ">
                                        <div class=" pop4  col-lg-12 text-center">
                                            <div class="col-lg-12"></div>
                                            <div class="card-body">
                                                <h5 class="card-title">
                                                    <h4 className='mt-5 p-4'></h4>
                                                </h5>
                                            </div>
                                            <div class="card-footer bg-light mt-3  text-dark ">
                                                <h6 className='col-lg-12 text-center'>UX Marathon</h6>
                                                <a href="#" class="btn btn-primary col-lg-12">Join</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-lg-1'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-12'>

                </div>
            </div>
            <div className='row '>
                <div className='col-lg-7'>
                    <h1 className='ml-5 p-5'>Frequent Profile Serching People</h1>
                </div>
                <div className='col-lg-5'></div>
            </div>
            <div className='container p-5'>
                <div className='row'>
                    <div className='col-lg-4'>
                        <div class="card">
                            <img src={img9} className=" col-lg-12 background" />
                            <div class="card-body">
                                <h5>Pichai Sundararajan</h5>
                                <p>CEO @ Google</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-4'>
                        <div class="card">
                            <img src={img10} className=" col-lg-12 " />
                            <div class="card-body">
                                <h5>Elon Reeve Musk</h5>
                                <p>CEO @ Tesla</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-4 '>
                        <div class="card">
                            <img src={img11} className="ca col-lg-12 " />
                            <div class="card-body ">
                                <h5>Elon Reeve Musk</h5>
                                <p>CEO @ Tesla</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-12'>

                </div>
            </div>
            <div className='footer bg-primary p-5 text-light'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-3'>
                            <h1>Location</h1>
                            <p>Plot No: 824&826</p>
                            <p>Ram Nagar South,3re Main Road,</p>
                            <p>Madippakkam,Chennai - 600081</p>
                            <p>Tamilnadu,India.</p>
                        </div>
                        <div className='col-lg-3'>
                            <h1>Contacts</h1>
                            <p>hi@lentera.in</p>
                            <p>+91-44-4856-3345</p>
                            <p>WWW.lentera.in</p>
                        </div>
                        <div className='col-lg-3'>
                            <h1>Careers</h1>
                        </div>
                        <div className='col-lg-3'>
                            <h1>Follow us</h1>
                        </div>
                    </div>
                </div>
            </div>





        </>
    );
}
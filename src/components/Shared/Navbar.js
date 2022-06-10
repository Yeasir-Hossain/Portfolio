import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
    return (
        <div class="navbar">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <div class="btn-group">
                            <Link to="/"><button class="custom-btn btn-12 my-1 ml-5"><span>Portfolio</span><span>Home</span>
                            </button></Link>
                            <a href="https://drive.google.com/file/d/11TzrM1yE_JCMDtyLx6RGeEKAPDAZ5fQ_/view?usp=sharing">
                                <button class="custom-btn btn-12 my-1 ml-5"><span>Download</span><span>Resume</span></button>
                            </a>
                            <HashLink smooth to="#contact">
                                <button class="custom-btn btn-12 my-1 ml-5"><span>Me</span><span>Contact</span></button>
                            </HashLink>
                            <HashLink smooth to="#about">
                                <button class="custom-btn btn-12 my-1 ml-5"><span>Me</span><span>About</span> </button>
                            </HashLink>
                            <Link to="/blog"><button class="custom-btn btn-12 my-1 ml-5"><span>Blog</span><span>Blog</span>
                            </button></Link>
                        </div>
                    </ul>
                </div>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    <div class="btn-group">
                        <Link to="/"><button class="custom-btn btn-12 my-5 mr-5"><span>Portfolio</span><span>Home</span>
                        </button></Link>
                        <a href="https://drive.google.com/file/d/11TzrM1yE_JCMDtyLx6RGeEKAPDAZ5fQ_/view?usp=sharing" target="_blank" rel='noreferrer'>
                            <button class="custom-btn btn-12 my-5"><span>Download</span><span>Resume</span>
                            </button>
                        </a>
                        <HashLink smooth to="#contact">
                            <button class="custom-btn btn-12 my-5 ml-5"><span>Me</span><span>Contact</span>
                            </button>
                        </HashLink>
                        <HashLink smooth to="#about">
                            <button class="custom-btn btn-12 my-5 ml-5"><span>Me</span><span>About</span>
                            </button>
                        </HashLink>
                        <Link to="/blog"><button class="custom-btn btn-12 my-5 ml-5"><span>Blog</span><span>Blog</span>
                        </button></Link>
                    </div>
                </ul>
            </div>
            <div class="navbar-end">
            </div>
        </div>
    );
};

export default Navbar;
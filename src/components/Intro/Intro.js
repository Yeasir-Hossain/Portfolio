import React from 'react';
import './Intro.css'
import Typewriter from 'typewriter-effect';
import { BsFillArrowDownCircleFill } from 'react-icons/bs';
import Jump from 'react-reveal/Jump';
const Intro = () => {
    return (
        <div>
            <div class="hero min-h-screen">
                <div class="hero-content text-center">
                    <div class="max-w-full">
                        <h1 class="name text-[190px]">
                            <Typewriter
                                options={{
                                    strings: ['Yeasir Hossain'],
                                    autoStart: true,
                                    pauseFor: 10000,
                                    loop: true,
                                    cursor: ""
                                }}
                            /></h1>
                        <a href="https://drive.google.com/file/d/1vIZ5aEvKnnY1cM68ABrIMhKEV7us7ynJ/view?usp=sharing" target="_blank" rel='noreferrer'>
                            <button class="custom-btn btn-12 my-5"><span>Download</span><span>Resume</span>
                            </button>
                        </a>
                        <a href="#contact">
                            <button class="custom-btn btn-12 my-5 ml-5"><span>Me</span><span>Contact</span>
                            </button>
                        </a>
                    </div>
                </div>
                <Jump appear>
                    <p className='text-5xl mt-auto'><BsFillArrowDownCircleFill /></p>
                </Jump>

            </div>
        </div>


    );
};

export default Intro;
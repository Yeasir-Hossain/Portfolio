import React from 'react';
import './Intro.css'
import Typewriter from 'typewriter-effect';
import { BsFillArrowDownCircleFill } from 'react-icons/bs';
import Jump from 'react-reveal/Jump';
const Intro = () => {
    return (
        <div>
            <div class="hero min-h-screen">
                <div class="hero-content text-center flex-col ">
                    <div class="max-w-full">
                        <h1 class="name text-9xl ">
                            <Typewriter
                                options={{
                                    strings: ['Yeasir Hossain'],
                                    autoStart: true,
                                    pauseFor: 10000,
                                    loop: true,
                                    cursor: ""
                                }}
                            /></h1>
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
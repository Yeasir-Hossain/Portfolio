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
                        <h1 class="name">
                            <Typewriter
                                options={{
                                    strings: ['Yeasir Hossain'],
                                    autoStart: true,
                                    pauseFor: 5000,
                                    loop: true
                                }}
                            /></h1>
                    </div>
                </div>
                <Jump appear>
                    <p className='text-5xl mt-auto p-10'><BsFillArrowDownCircleFill /></p>
                </Jump>

            </div>
        </div>


    );
};

export default Intro;
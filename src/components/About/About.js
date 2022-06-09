import React from 'react';
import me from '../../images/me.png'
import Fade from 'react-reveal/Fade'
import Pulse from 'react-reveal/Pulse';
import './About.css'


const About = () => {
    return (
        <div class="hero min-h-screen mt-[-150px]">
            <div class="hero-content flex-col lg:flex-row">
                <img src={me} alt="Yeasir" />
                <div>
                    <Fade left cascade>
                        <div>
                            <Pulse>
                            <h2 className='text-4xl font-bold p-3'>FULLSTACK DEVELOPER</h2>
                            </Pulse>
                            <h2 className='text-2xl p-3'>Punctual, self-taught, persistent, genuine, patient, fearless</h2>
                            <h2 className='text-xl p-3'>I like to communicate with people. I can adapt myself to any environment. I can work under pressure.</h2>
                            <h2 className='text-xl p-3'>People don't care about what we say, they care about what we build. So I am always energetic to create something extraordinary.</h2>
                        </div>
                    </Fade>
                    <a href="https://drive.google.com/file/d/11TzrM1yE_JCMDtyLx6RGeEKAPDAZ5fQ_/view?usp=sharing" target="_blank" rel='noreferrer'>
                        <button class="custom-btn btn-12 my-5"><span>Download</span><span>Resume</span>
                        </button>
                    </a>
                    <a href="https://github.com/Yeasir-Hossain" target="_blank" rel='noreferrer'>
                        <button class="custom-btn btn-12 ml-5 my-5"><span>Go visit</span><span>Git Hub</span>
                        </button>
                    </a>
                </div>
            </div>
        </div>

    );
};

export default About;
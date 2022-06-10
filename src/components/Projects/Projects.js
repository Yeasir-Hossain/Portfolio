import React from 'react';
import bike from '../../images/bikehub.png'
import writer from '../../images/writer.png'
import electronics from '../../images/electronics.png'
import Fade from 'react-reveal/Fade';
import Pulse from 'react-reveal/Pulse';
import { Link } from "react-router-dom";

const Projects = () => {
    return (
        <div className='p-2'>
            <h1 className="text-4xl font-bold text-center mb-10">My Recent Projects</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
                <Fade left>
                    <div className="card shadow-xl image-full">
                        <figure><img src={electronics} alt="electronics" /></figure>
                        <div className="card-body">
                            <h2 className="card-title justify-end">Electronics Lab</h2>
                            <div className="card-actions justify-end">
                                <Link to="/project1">Details</Link>
                            </div>
                        </div>
                    </div>
                </Fade>
                <Pulse>
                    <div className="card shadow-xl image-full">
                        <figure><img src={writer} alt="Writer" /></figure>
                        <div className="card-body">
                            <h2 className="card-title justify-end">The Writer</h2>
                            <div className="card-actions justify-end">
                                <Link to="/project2">Details</Link>
                            </div>
                        </div>
                    </div>
                </Pulse>
                <Fade right>
                    <div className="card shadow-xl  image-full">
                        <figure><img src={bike} alt="Bike" /></figure>
                        <div className="card-body">
                            <h2 className="card-title justify-end">Bike Hub</h2>
                            <div className="card-actions justify-end">
                                <Link to="/project3">Details</Link>
                            </div>
                        </div>
                    </div></Fade>

            </div>
        </div>
    );
};

export default Projects;
import React from 'react';
import bike from '../../images/bikehub.png'
import writer from '../../images/writer.png'
import electronics from '../../images/electronics.png'
import Fade from 'react-reveal/Fade';

const Projects = () => {
    return (
        <div className='p-2'>
            <h1 className="text-4xl font-bold text-center mb-10">My Recent Projects</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
                <Fade left>
                    <div className="card shadow-xl image-full">
                        <figure><img src={electronics} alt="bike" /></figure>
                        <div className="card-body">
                            <h2 className="card-title justify-end">Electronics Lab</h2>
                            <div className="card-actions justify-end">
                                <a href="https://electronics-lab-b1944.web.app/"><button className="btn btn-ghost">Live Site</button></a>
                            </div>
                            <div className="card-actions justify-end">
                                <a href="https://github.com/Yeasir-Hossain/electronic-parts-manufacturer"><button className="btn btn-ghost">Client Code</button></a>
                            </div>
                            <div className="card-actions justify-end">
                                <a href="https://github.com/Yeasir-Hossain/electronic-parts-manufacturer-server"><button className="btn btn-ghost">Server Code</button></a>
                            </div>
                        </div>
                    </div>
                </Fade>
                <div className="card shadow-xl image-full">
                    <figure><img src={writer} alt="Writer" /></figure>
                    <div className="card-body">
                        <h2 className="card-title justify-end">The Writer</h2>
                        <div className="card-actions justify-end">
                            <a href="https://isp-website-for-writer.web.app/"><button className="btn btn-ghost">Live Site</button></a>
                        </div>
                        <div className="card-actions justify-end">
                            <a href="https://github.com/Yeasir-Hossain/the-writer"><button className="btn btn-ghost">Code</button></a>
                        </div>
                    </div>
                </div>
                <Fade right>
                    <div className="card shadow-xl  image-full">
                        <figure><img src={bike} alt="Bike" /></figure>
                        <div className="card-body">
                            <h2 className="card-title justify-end">Bike Hub</h2>
                            <div className="card-actions justify-end">
                                <a href="https://bike-hub-b9899.web.app/"><button className="btn btn-ghost">Live Site</button></a>
                            </div>
                            <div className="card-actions justify-end">
                            <a href="https://github.com/Yeasir-Hossain/bike-warehouse-client"><button className="btn btn-ghost">Client Code</button></a>
                        </div>
                        <div className="card-actions justify-end">
                            <a href="https://github.com/Yeasir-Hossain/bike-warehouse-server"><button className="btn btn-ghost">Server Code</button></a>
                        </div>
                        </div>
                    </div></Fade>

            </div>
        </div>
    );
};

export default Projects;
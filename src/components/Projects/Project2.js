import React from 'react';
import P2_1 from '../../images/P2-1.png'
import P2_2 from '../../images/P2-2.png'
import P2_3 from '../../images/P2-3.png'
import P2_4 from '../../images/P2-4.png'
import Fade from 'react-reveal/Fade';

const Project2 = () => {
    const tools_used=['React', 'JavaScript', 'Bootstrap', 'Firebase']
    return (
        <Fade left cascade>
            <div className='max-w-screen'>
                <h1 className="text-3xl text-center">The Writer</h1>
                <div class="grid grid-cols-1 lg:grid-cols-2  gap-4 p-10">
                    <div class="card card-compact max-w-fit shadow-xl">
                        <figure><img className='w-fit' src={P2_1} alt="Shoes" /></figure>
                    </div>
                    <div class="card card-compact max-w-fit shadow-xl">
                        <figure><img className='w-fit' src={P2_2} alt="Shoes" /></figure>
                    </div>
                    <div class="card card-compact max-w-fit bg-base-100 shadow-xl">
                        <figure><img className='w-fit' src={P2_3} alt="Shoes" /></figure>
                    </div>
                    <div class="card card-compact max-w-fit bg-base-100 shadow-xl">
                        <figure><img className='w-fit' src={P2_4} alt="Shoes" /></figure>
                    </div>
                    <a href="https://isp-website-for-writer.web.app/" className='mx-auto'><button className="btn btn-outline brightness-50 hover:brightness-100">Live Site</button></a>
                            <a href="https://github.com/Yeasir-Hossain/the-writer" className='mx-auto'><button className="btn btn-outline brightness-50 hover:brightness-100">Code</button></a>
                </div>
                <div class="hero">
                    <div class="hero-content flex-col-reverse lg:flex-row-reverse">
                        <div className=' justify-center gap-5'>
                        <h1 class="text-3xl text-center font-bold mb-7">Tools I've used</h1>
                            <div className="grid lg:grid-cols-4 grid-cols-2 gap-4">
                                {tools_used.map((tool) => (
                                    <div className="btn btn-outline brightness-50 hover:brightness-100">{tool}</div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h1 class="text-5xl font-bold">Features</h1>
                            <p className="text-3xl">Frontend Website for an independent service provider.</p>
                            <ul className='text-2xl text-left'>
                                <li>1. Navbar is responsive and in mobile devices show hamburger menu</li>
                                <li>2. The site is responsive</li>
                                <li>3. Have checkout form in a private route</li>
                                <li>4. Signin with email and password and google</li>
                                <li>5. Have a list of services provided and the price</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default Project2;
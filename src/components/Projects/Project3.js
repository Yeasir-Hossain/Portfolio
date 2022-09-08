import React from 'react';
import P3_1 from '../../images/P3-1.png'
import P3_2 from '../../images/P3-2.png'
import P3_3 from '../../images/P3-3.png'
import P3_4 from '../../images/P3-4.png'
import P3_5 from '../../images/P3-5.png'
import P3_6 from '../../images/P3-6.png'
import Fade from 'react-reveal/Fade';


const Project3 = () => {
    const tools_used = ['React', 'JavaScript', 'Bootstrap', 'NodeJs', 'MongoDB', 'Express', 'Firebase', 'React authentication hook', 'React hook form', 'Font Awesome', 'React Toastify']
    return (
        <Fade left cascade>
            <div className='max-w-screen'>
                <h1 className="text-3xl text-center">Bike Hub</h1>
                <div class="grid grid-cols-1 lg:grid-cols-3  gap-4 p-10">
                    <div class="card card-compact max-w-fit shadow-xl">
                        <figure><img className='w-fit' src={P3_1} alt="Shoes" /></figure>
                    </div>
                    <div class="card card-compact max-w-fit shadow-xl">
                        <figure><img className='w-fit' src={P3_2} alt="Shoes" /></figure>
                    </div>
                    <div class="card card-compact max-w-fit bg-base-100 shadow-xl">
                        <figure><img className='w-fit' src={P3_3} alt="Shoes" /></figure>
                    </div>
                    <div class="card card-compact max-w-fit bg-base-100 shadow-xl">
                        <figure><img className='w-fit' src={P3_4} alt="Shoes" /></figure>
                    </div>
                    <div class="card card-compact max-w-fit bg-base-100 shadow-xl">
                        <figure><img className='w-fit' src={P3_5} alt="Shoes" /></figure>
                    </div>
                    <div class="card card-compact max-w-fit bg-base-100 shadow-xl">
                        <figure><img className='w-fit' src={P3_6} alt="Shoes" /></figure>
                    </div>
                    <a href="https://bike-hub-b9899.web.app/" className='mx-auto'><button className="btn btn-outline brightness-50 hover:brightness-100">Live Site</button></a>
                    <a href="https://github.com/Yeasir-Hossain/bike-warehouse-client" className='mx-auto'><button className="btn btn-outline brightness-50 hover:brightness-100">Client Code</button></a>
                    <a href="https://github.com/Yeasir-Hossain/bike-warehouse-server" className='mx-auto'><button className="btn btn-outline brightness-50 hover:brightness-100">Server Code</button></a>
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
                            <p className="text-3xl">Fullstack website for managing warehouse stocks and keeping track of sales</p>
                            <ul className='text-2xl text-left'>
                                <li>1. Authentication for user integrated using firebase</li>
                                <li>2. Restock items and also reduce the quantity of stock after delivery</li>
                                <li>3. Inventory and management of products is in private route</li>
                                <li>4. Items can removed</li>
                                <li>5. Users can see products added by them</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default Project3;
import React from 'react';
import P1_1 from '../../images/P1-1.png'
import P1_2 from '../../images/P1-2.png'
import P1_3 from '../../images/P1-3.png'
import P1_4 from '../../images/P1-4.png'
import P1_5 from '../../images/P1-5.png'
import P1_6 from '../../images/p1-6.png'
import Fade from 'react-reveal/Fade';

const Project1 = () => {
    const tools_used=['React', 'JavaScript', 'Tailwind', 'DaisyUI', 'NodeJs', 'MongoDB', 'Express', 'Firebase', 'React authentication hook', 'React-Query', 'React hook form', 'Font Awesome', 'React Toastify', 'React Reveal']
    return (
        <Fade left cascade>
            <div className='max-w-screen'>
                <h1 className="text-3xl text-center">Electronics Lab</h1>
                <div class="grid grid-cols-1 lg:grid-cols-3  gap-4 p-10">
                    <div class="card card-compact max-w-fit shadow-xl">
                        <figure><img className='w-fit' src={P1_1} alt="Shoes" /></figure>
                    </div>
                    <div class="card card-compact max-w-fit shadow-xl">
                        <figure><img className='w-fit' src={P1_2} alt="Shoes" /></figure>
                    </div>
                    <div class="card card-compact max-w-fit bg-base-100 shadow-xl">
                        <figure><img className='w-fit' src={P1_3} alt="Shoes" /></figure>
                    </div>
                    <div class="card card-compact max-w-fit bg-base-100 shadow-xl">
                        <figure><img className='w-fit' src={P1_4} alt="Shoes" /></figure>
                    </div>
                    <div class="card card-compact max-w-fit bg-base-100 shadow-xl">
                        <figure><img className='w-fit' src={P1_5} alt="Shoes" /></figure>
                    </div>
                    <div class="card card-compact max-w-fit bg-base-100 shadow-xl">
                        <figure><img className='w-fit' src={P1_6} alt="Shoes" /></figure>
                    </div>
                    <a href="https://electronics-lab-b1944.web.app/" className='mx-auto'><button className=" btn btn-outline brightness-50 hover:brightness-100">Live Site</button></a>
                            <a href="https://github.com/Yeasir-Hossain/electronic-parts-manufacturer"  className='mx-auto'><button className="btn btn-outline brightness-50 hover:brightness-100">Client Code</button></a>
                            <a href="https://github.com/Yeasir-Hossain/electronic-parts-manufacturer-server" className='mx-auto'><button className="btn btn-outline brightness-50 hover:brightness-100">Server Code</button></a>
                </div>
                <div class="hero">
                    <div class="hero-content flex-col-reverse lg:flex-row-reverse">
                        <div className='justify-center gap-5'>
                            
                            <h1 class="text-3xl text-center font-bold mb-7">Tools I've used</h1>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-4">
              {tools_used.map((tool) => (
                <div className="btn btn-outline brightness-50 hover:brightness-100">{tool}</div>
              ))}
            </div>
                        </div>
                        <div>
                            <h1 class="text-5xl font-bold">Features</h1>
                            <p className="text-3xl">Fullstack website for a manufacturer</p>
                            <ul className='text-2xl text-left'>
                                <li>1. Authentication for user and admin integrated using firebase</li>
                                <li>2. Users can see the product detalis</li>
                                <li>3. Payment method is added using Stripe</li>
                                <li>4. Both user and admin can update profile</li>
                                <li>5. Users can manage orders and also cancel them</li>
                                <li>6. Reviews by the users can be added</li>
                                <li>7. Admin can give set the role of other users to admin</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default Project1;
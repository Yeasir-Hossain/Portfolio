import React from 'react';
import { BiMailSend } from 'react-icons/bi';
const Contact = () => {
    return (
        <div class="hero">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="text-center lg:text-left ml-4">
                    <h1 class="text-6xl font-bold">Contact Me</h1>
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                    <div class="form-control">
                            <label class="input-group">
                                <span>Name</span>
                                <input type="text" placeholder="Name" class="input input-bordered" />
                            </label>
                        </div>
                        <div class="form-control">
                            <label class="input-group">
                                <span>Email</span>
                                <input type="text" placeholder="Email" class="input input-bordered" />
                            </label>
                        </div>
                        <div class="form-control">
                            <label class="input-group">
                                <span>Phone</span>
                                <input type="text" placeholder="Phone" class="input input-bordered" />
                            </label>
                        </div>
                        <div class="form-control">
                            <label class="input-group">
                                <span>Message</span>
                                <textarea class="textarea" placeholder="Message"></textarea>
                            </label>
                        </div>
                        <div class="form-control mt-6">
                            <button class="btn text-3xl"><BiMailSend /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Contact;
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { BiMailSend } from 'react-icons/bi';
import Fade from 'react-reveal/Fade';
import { toast } from 'react-toastify';


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_jytcqqo', 'template_zzwlj1e', form.current, 'C3VLFtX2oBtdfiIo1')
            .then((result) => {
                toast.success("Mail sent.I will reply to you shortly")
            }, (error) => {
                toast.error("Mail not sent.Please try again later")
            });
        e.target.reset();
    };

    return (
        <div id='contact' class="hero">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <Fade right cascade>
                    <div class="text-center lg:text-left ml-4">
                        <h1 class="text-6xl font-bold">Contact Me</h1>
                    </div>
                </Fade>
                <Fade left cascade>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                        <div class="card-body">
                            <form ref={form} onSubmit={sendEmail}>
                                <div class="form-control">
                                    <label class="input-group my-2">
                                        <span>Name</span>
                                        <input type="text" placeholder="Name" name='fullName' class="input input-bordered" />
                                    </label>
                                </div>
                                <div class="form-control">
                                    <label class="input-group my-2">
                                        <span>Email</span>
                                        <input type="text" placeholder="Email" name='email' class="input input-bordered" />
                                    </label>
                                </div>
                                <div class="form-control">
                                    <label class="input-group my-2">
                                        <span>Phone</span>
                                        <input type="text" placeholder="Phone" name="phone" class="input input-bordered" />
                                    </label>
                                </div>
                                <div class="form-control">
                                    <label class="input-group my-2">
                                        <span>Message</span>
                                        <textarea class="textarea input-bordered" name='message' placeholder="Message"></textarea>
                                    </label>
                                </div>
                                <div class="form-control mt-6">
                                    <button class="btn text-3xl"><BiMailSend /></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </Fade>
            </div>
        </div >
    );
};

export default Contact;
import React, { useRef } from 'react';
import { BiSolidContact } from 'react-icons/bi';
import { BsSendFill } from 'react-icons/bs';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_xf2r2mp',
            'template_bjhtqjr',
            form.current,
            'wkqmGMaz1204H7Pz9')
            .then((result) => {
                console.log(result);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Your mail has been send',
                    showConfirmButton: false,
                    timer: 1500
                })
            },
                (error) => {
                    console.log(error);
                });
    };



    return (
        <div className='my-16'>
            <div className='flex items-center justify-center gap-5'>
                <BiSolidContact className='text-4xl  mt-2' />
                <h3 className='text-center text-4xl font-bold font-serif'>Contact Us
                </h3>
            </div>
            <p className='my-5 mx-10'>
                If you need any assistance, have questions, or require any support, don't hesitate to reach out to me! Whether it's about a project, a problem, or just a friendly chat, I'm here to help. Feel free to contact me through this platform, and I'll get back to you as soon as possible. Your feedback and inquiries are valuable to me, so don't hesitate to get in touch. Looking forward to connecting with you!
            </p>
            <div>
                <div className="hero flex flex-col md:flex-row my-10">
                    <div className='md:w-[50%] mx-5'>
                        <Player
                            className='md:w-[80%]'
                            autoplay
                            loop
                            src="https://assets9.lottiefiles.com/packages/lf20_in4cufsz.json"

                        >
                            <Controls visible={!true} buttons={['play', 'repeat', 'frame', 'debug']} />
                        </Player>
                    </div>
                    <div className="hero-content md:w-[45%]">
                        <div className="card w-full shadow-2xl bg-neutral-300 rounded-2xl">
                            <form ref={form} onSubmit={sendEmail} className="card-body">
                                <div className='flex flex-col md:flex-row justify-between items-center gap-5'>
                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className=" label-text font-serif font-bold">Your Name</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Enter your name"
                                            className="input input-bordered rounded-xl" />
                                    </div>

                                    <div className="form-control  w-1/2">
                                        <label className="label">
                                            <span className=" label-text font-serif font-bold">Email</span>
                                        </label>
                                        <input type="email"
                                            name="email"
                                            placeholder="Enter your email"
                                            className="input input-bordered rounded-xl" />
                                    </div>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-serif font-bold">Message</span>
                                    </label>
                                    <textarea
                                        name="message"
                                        placeholder="Type here..."
                                        className="input input-bordered rounded-xl h-56  p-5" />
                                </div>
                                <div className="form-control mt-6 md:w-1/2 mx-auto">
                                    <label className="btn bg-cyan-400 border-transparent text-lg rounded-xl">
                                        <input
                                            type='submit'
                                            value='Send' />
                                        <BsSendFill />
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
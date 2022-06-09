import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_qlc5sdk', form.current, 'UDbBelrUu0lOocw5H')
            .then((result) => {
                console.log(result);
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };

    return (
        <div className='my-10 lg:w-96 mx-auto'>
            <h2 className='mb-10 text-3xl font-bold text-secondary text-center'>Contact Me</h2>
            <div className=''>
                <form className='w-full' ref={form} onSubmit={sendEmail}>

                    <div className='my-2'>
                        <input type="text" name='name' placeholder="Type your name" class="input w-full max-w-xs" />
                    </div>

                    <div className='my-2'>
                        <input type="email" name='email' placeholder="Type your email" class="input w-full max-w-xs" />
                    </div>

                    <div className='my-2'>
                        <input type="text" name='subject' placeholder="subject" class="input w-full max-w-xs" />
                    </div>

                    <div className='my-2'>
                        <textarea class="textarea w-full max-w-xs" name='message' placeholder="message"></textarea>
                    </div>

                    <div class="mt-6">
                        <input type="submit" class="input w-full max-w-xs btn btn-primary text-white" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
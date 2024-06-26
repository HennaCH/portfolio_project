import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser'
import './contact.css'
import {Link} from "react-router-dom";

const ContactForm = () => {
    const form = useRef();
    const [send, setSend] = useState({
        subject: '',
        name: '',
        email: '',
        message: ''
    })

    const [isDisabled, setIsDisabled] = useState(false);
    const valid = {
        email: false,
        rest: false
    }

    const error = useRef()
    const formResMsg = useRef()

    const validation = (email, name, message, subject) => {
        if (email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
            valid.email = true;
        } else {
            valid.email = false;
        }

        if (name !== '' && subject !== '' && message !== '') {
            valid.rest = true;
        } else {
            valid.rest = false;
        }
    }
    const reset = () => {
        setSend({
            subject: '',
            name: '',
            email: '',
            message: ''
        })
    }

    const changeInfo = (e) => {
        setSend({ ...send, [e.target.name]: e.target.value });
    };

    const consoleTest = () => {
        console.log("hey you sent an email")
    }

    const sendEmail = (e) => {
       e.preventDefault();
        //validation(send.email, send.name, send.message, send.subject);

        emailjs
            .sendForm('service_tm9rp3p', 'template_zy8lf7p', form.current, {
                publicKey: 'qSym0XF-bXjVpzPAa',
            })
            .then(
                () => {
                    e.target.reset()
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry)
            if(entry.isIntersecting){
                entry.target.classList.add('show');
            }
        });
    });

    const hiddentElements = document.querySelectorAll('.hidden');
    hiddentElements.forEach((el) => observer.observe(el));

    return(

        <div className="body ">


            <h1 className="contactTitle ">Contact Me</h1>

            <div className="col-lg-3 col-sm-3"/>

            <div className="circle container col-lg-6 col-sm-6">
                <div className="col-8" style={{alignContent: "center"}}>
                    <form ref={form} onSubmit={sendEmail}
                          className="form col-12 contactForm">
                        <div className="row">

                            <div className="col-6 text-start">
                                <label className="inputLabel" htmlFor="user_name">Name</label>
                                <input type="text" name="user_name" className="inputField col-12"/>
                                {/*name needs to be the same as in default template*/}
                            </div>


                            <div className="text-start col-6">
                                <label className="inputLabel" htmlFor="from_name">Email</label>
                                <input type="email" name="from_name" className="inputField col-12"/>
                            </div>
                        </div>

                        <div className="row mt-4 mb-4">
                            <div className="text-start col-12">
                                <label className="inputLabel" htmlFor="message">Message</label>
                                <textarea name="message" className="inputField col-12"/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-12 me-3">
                                <input type="submit" value="Send" className="col-sm-12"/>
                            </div>
                        </div>
                    </form>
                    {/*<div className="row">
                        <h1 className="col-12 pt-5">Contact</h1>
                        <Link className="email col-7"
                              onClick={() => window.location = 'mailto:hennacheung@gmail.com'}>hennacheung@gmail.com</Link>
                    </div>*/}
                </div>
            </div>
            <div className="col-lg-3 col-sm-3"/>


        </div>
    )
}

export default ContactForm
import React, {useRef} from 'react'
import styled from "styled-components";
import emailjs from '@emailjs/browser';
import contact from "./contact.css"
import Flower from "../Flower";
import Footer from "../Footer";

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

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

        <div className="body">
            <div className="circle">
                <form ref={form} onSubmit={sendEmail} className="form" style={{
                    backgroundColor: "#f1d2b6",
                    borderRadius: "20px",
                    padding: "2vw",
                    boxShadow: "-1vw 1vw #d9aa90"
                }}>

                    <div>
                        <label className="float-start m-2 inputLabel">Name</label>
                        <input type="text" name="user_name" className="inputFieldNameEmail"/><br/>
                        {/*name needs to be the same as in default template*/}
                    </div>
                    <br/>

                    <div>
                        <label className="float-start m-2 inputLabel">Email</label>
                        <input type="email" name="from_name" className="inputFieldNameEmail"/><br/>
                    </div>
                    <br/>

                    <div>
                        <label className="float-start m-1 inputLabel">Message</label>
                        <textarea name="message" className="inputFieldMessage"/><br/>
                    </div>

                    <div className="inputField">
                        <input type="submit" value="Send" className="border"/>
                    </div>
                </form>
            </div>

            <h1 className="float-end contactTitle">Contact Me</h1>
            <div className="rectangleContact1"></div>
            <div className="rectangleContact2"/>

          <Footer/>
        </div>
    )
}

export default ContactForm
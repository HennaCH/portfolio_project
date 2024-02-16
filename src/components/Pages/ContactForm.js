import React, {useRef} from 'react'
import styled from "styled-components";
import emailjs from '@emailjs/browser';
import contact from "./contact.css"
import Flower from "../Flower";


const FormStyle = styled.form`
    width: 100%;
    .form-group{
        width: 100%;
        margin-bottom: 2rem;
        
        label{
            font-size: 1.8rem;
        }
        
        input, textarea{
            width: 100%;
            font-size: 2rem;
            padding: 1.2rem;
            color: var(--bs-border-radius-pill);
            background-color: var(--bs-link-decoration);
            outline: none;
            border: none;
            border-radius: 8px;
            margin-top: 1rem;
        }
        
        textarea{
            min-height: 250px;
            resize: vertical;
        }
        
        button[type="submit"]{
        background-color: #b30000;
        color: #282c34;
        font-size: 2rem;
        display: inline-block;   
        outline: none;
        border: none;
        padding: 1rem 4rem;   
        border-radius: 8px;
        cursor: pointer;    
        }
    }
`
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




    return(
        <div className="body">
        <div className="circle"></div>
        <div className="form">
            <div className="d-flex align-content-center">
            <form ref={form} onSubmit={sendEmail} >
                <label>Name</label>
                <input type="text" name="user_name" className="border rounded-5 mb-3"/><br/>
                {/*name needs to be the same as in default template*/}

                <label>Email</label>
                <input type="email" name="from_name"  className="border rounded-5 mb-3"/><br/>

                <label>Message</label>
                <input name="message" className="border rounded-5 mb-3"/><br/>
                <input type="submit" value="Send" className="border rounded-5 mb-3"/>
            </form>
            </div>
        </div>

            <footer className="p-3">hennacheung@gmail.com</footer>
            {/*<Flower/>*/}
        </div>
    )
}

export default ContactForm
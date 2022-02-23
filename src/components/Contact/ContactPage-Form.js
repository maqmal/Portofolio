import React from "react";
import styled from "styled-components";
import { MainLayout } from '../../styles/Layout';
import Title from "../Title/Title";

import PrimaryButton from "./PrimaryButton";

const ContactForm = () => {
    return (
        <MainLayout>
            <ContactStyled>
                <Title title={'Contact'} span={'contact'} />
                <div className={'contact-section'}>
                    <div className="left-content">
                        <div className="contact-title">
                            <h6>Get in Touch!</h6>
                        </div>
                        <form className="form">
                            <div className="form-field">
                                <label htmlFor="name"  >Enter your name*</label>
                                <input type="text" id="name" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="email"  >Enter your email*</label>
                                <input type="email" id="email" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="subject"  >Enter your subject</label>
                                <input type="text" id="subject" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="text-area">Enter your Message*</label>
                                <textarea name="textarea" id="textarea" cols="30" rows="10"></textarea>
                            </div>
                            <div className="form-field f-button">
                                <PrimaryButton title={'Send Email'} />
                            </div>
                        </form>
                    </div>
                </div>
            </ContactStyled>

        </MainLayout>
    )
}

const ContactStyled = styled.section`
.contact-section{
    margin-top: 5%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    .left-content{
        margin-right: -200px;
    }
    @media screen and (max-width: 978px){
        grid-template-columns: repeat(1, 1fr);
        .f-button{
            margin-bottom: 3rem;
        }
    }
    .contact-title{
        h4{
            color: var(--white-color);
            padding: 1rem 0;
            font-size: 1.8rem;
        }
    }
    .form{
        width: 100%;
        @media screen and (max-width: 502px){
            width: 100%;
        }
        .form-field{
            margin-top: 2rem;
            position: relative;
            width: 100%;
            label{
                position: absolute;
                left: 20px;
                top: -19px;
                display: inline-block;
                background-color: var(--background-dark-color);
                padding:0 .5rem;
                color: inherit;
            }
            input{
                border: 1px solid var(--border-color);
                outline: none;
                background: transparent;
                height: 50px;
                padding:0 15px;
                width: 100%;
                color: inherit;
            }
            textarea{
                background-color: transparent;
                border: 1px solid var(--border-color);
                outline: none;
                color: inherit;
                width: 100%;
                padding: .8rem 1rem;
            }
        }
        
    }
}
`

export default ContactForm
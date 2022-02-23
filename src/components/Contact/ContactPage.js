import React from "react";
import styled from "styled-components";
import { MainLayout } from '../../styles/Layout';
import Title from "../Title/Title";

import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ContactItem from './ContactItem';


const Contact = () => {
    const phone = <PhoneIcon />
    const email = <EmailIcon />
    const location = <LocationOnIcon />
    return (
        <MainLayout>
            <ContactStyled>
                <Title title={'Contact'} span={'contact'} />
                <section className='contact-section'>
                    
                    <div className="right-content">
                        <ContactItem title={'Phone'} icon={phone} cont1={'+62-8213-439-6679'}/>
                        <ContactItem title={'Email'} icon={email} cont1={'pangestu@gmail.com'}/>
                        <ContactItem title={'Address'} icon={location} cont1={'Bandung, West Java, Indonesia'}/>

                    </div>
                </section>
            </ContactStyled>

        </MainLayout>
    )
}

const ContactStyled = styled.section`
.contact-section{
    margin-top: 6%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    @media screen and (max-width: 978px){
        grid-template-columns: repeat(1, 1fr);
        .f-button{
            margin-bottom: 3rem;
        }
    }
    .right-content{
        display: grid;
        grid-template-columns: repeat(1, 1fr);
    }
    .contact-title{
        h4{
            color: var(--white-color);
            padding: 1rem 0;
            font-size: 1.8rem;
        }
    }
}

@media screen and (max-width:1200px){
    .contact-section{
        margin-left: -1%;
        margin-top: 10%;
        margin-bottom: 15%;
        margin-right: 7%;
    }
}
`

export default Contact;
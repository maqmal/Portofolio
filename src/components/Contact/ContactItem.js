import React from 'react';
import styled from 'styled-components';

function ContactItem({title, icon, cont1}) {
    return (
        <ContactItemStyled>
            <div className="left-content">
                {
                    icon
                }
            </div>
            <div className="right-content">
                <h6>{title}</h6>
                <p>{cont1}</p>
            </div>
        </ContactItemStyled>
    )
}

const ContactItemStyled = styled.div`
padding: 1.5rem 2rem;
margin-top: -2%;

background-color: var(--background-dark-grey);
display: flex;
align-items: center;
&:not(:last-child){
    margin-bottom: 2.5rem;
}
.left-content{
    padding: .5rem;
    border: 1px solid var(--border-color);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1.5rem;
    svg{
        font-size: 1.2rem;
    }
}
.right-content{
    h6{
        color: var(--white-color);
        font-size: 1rem;
        margin-bottom: -.1rem;
        margin-top: 1rem;
    }
    p{
        padding: .1rem 2;
        background: var(--grad); /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, var(--grad), #b354d9); /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, var(--grad), #b354d9); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
    }
}
@media screen and (max-width:1200px){
    padding: .9rem 2rem;
}

@media screen and (max-width:360px){
    padding: .7rem 1rem;
}
`;

export default ContactItem;
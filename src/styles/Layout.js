import styled from "styled-components";


export const MainLayout = styled.div`
    animation: fadeIn .4s;
    -webkit-animation: fadeIn .4s;
    -moz-animation: fadeIn .4s;
    -o-animation: fadeIn .4s;
    -ms-animation: fadeIn .4s;

    @keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
    }

    @-moz-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
    }

    @-webkit-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
    }

    @-o-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
    }

    @-ms-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
    }


    padding-top: 4rem;
    padding-left: 3rem;
    padding-bottom: 2rem;
    
    @media screen and (max-width: 642px){
        padding: 4rem;
    }
    @media screen and (max-width: 571px){
        padding: 2rem 1rem;
    }
`;
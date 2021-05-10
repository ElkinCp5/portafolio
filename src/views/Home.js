import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import data from '../data';

const Styled = styled.div`
    display: flex;
    align-items: stretch;
    height: 100%;
    .info, .avatar-lg{ 
        height: 100%;
        background-repeat: no-repeat;
        background-position: center bottom;
    }
    .info{
        width: calc(100% - 300px);
        background-size: 70%;
        padding: 0 15px ;
        overflow-y: auto;
        .greetings {
            margin: 0 0 10px;
        }
        .name {
            margin: 0 0 10px;
        }
        .occupation {
            margin: 0 0 10px;
        }
        .description{
            line-height: 1.4;
            font-weight: 400;
            border-bottom: 2px solid white;
            padding: 10px 0;
            margin-bottom: 20px;
        }
        @media screen and (max-height: 500px) {
            /*overflow-y: auto;*/
        }
    }
    .avatar-lg{
        width: 300px;
        background-size: 90%;
        /*background-image: url(${data.avatar});*/
    }
    background-repeat: no-repeat;
    background-position: 98% bottom;
    background-size: 280px;
    background-image: url(${data.avatar});
`;

const Home =()=> 
<Styled>
    <div className={'info'}>
        <h3 className={'greetings color2'}>{data.greetings}</h3>
        <h1 className={'name'}>{data.name}</h1>
        <span className={'occupation color2'}>{data.occupation}</span>
        <div className={'description'}>{data.description}</div>
        <Link to={'/contact'} className={'btn border-t-point border color2'}>
            Contacto
        </Link>
    </div>
    <div className={'avatar-lg'}>

    </div>
</Styled>
export default Home;
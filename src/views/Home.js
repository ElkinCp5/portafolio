import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import data from '../data';

const screen_data_info = '600px';
const Styled = styled.div`
    display: flex;
    align-items: stretch;
    &.header-info{
        height: 160px;
        background-color: rgba(0,0,0, .3);
        @media screen and (min-width: ${screen_data_info}) {
            opacity: 0;
            height: 0;
        }
        .info, .avatar-sm{ width: 50%;}
        .avatar-sm{
            background-size: 150px;
            background-position: 95% bottom;
            background-image: url(${data.avatar});
            @media screen and (min-width: ${screen_data_info}) {
                opacity: 0;
                width: 0;
            }
            @media screen and (max-width: 425px) {
                width: 150px;
                background-size: 75%;
            }
        }
        .info{
            background-size: 70%;
            padding: 15px;
            
            @media screen and (max-width: 425px) {
                width: calc(100% - 150px);
            }
        }
    }
    .info, .avatar-lg, .avatar-sm{ 
        //height: 100%;
        background-repeat: no-repeat;
        background-position: center bottom;
        transition: all .3s;
        opacity: 1;
    }
    .info{
        width: calc(100% - 300px);
        background-size: 70%;
        padding: 15px;
        
        @media screen and (max-width: ${screen_data_info}) {
            width: 100%;
        }
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
    @media screen and (max-width: 750px) {
        // background-color: red;
    }
    .avatar-lg{
        width: 300px;
        background-size: 280px;
        background-image: url(${data.avatar});
        @media screen and (max-width: ${screen_data_info}) {
            opacity: 0;
            width: 0;
        }
    }
    background-repeat: no-repeat;
    background-position: 98% calc(100% + 0px);
    //background-image: url(${data.avatar});
`;

const Home =()=>
<React.Fragment>
    <Styled className='header-info flex flec-jst'>
        <div className={"avatar-sm"}>

        </div>
        <div className={'info'}>
            <h3 className={'greetings color2'}>Bienvenido a mi</h3>
            <h1 className={'name'}>Portafolio</h1>
            <span className={'occupation color2'}>{data.occupation}</span>
        </div>
    </Styled>
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
</React.Fragment> 
export default Home;
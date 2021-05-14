import React from "react";
import { Switch } from "react-router-dom";
import styled from "styled-components";
import Nav from "../components/Nav";
import data from "../data";

const coord = '-5%';
const Container = styled.div`
    width: 700px;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    position: relative;
    background-image: radial-gradient(circle at 138.56% 165.92%, #781C41 0, #490E2E 100%);
    box-shadow: 0px 0px 53px 9px rgba(0,0,0,0.29);
    overflow: hidden;

    .vector{
        display: block;
        position: absolute;
        top: ${coord};
        left: ${coord};
        bottom: ${coord};
        right: ${coord};
        z-index: ${coord};
        background-position: center;
        background-size: cover;
    }

    .nav, .body{
        width: 100%;
        padding: 0; 
        z-index: 1;
    }
    .nav{
        ul{
            margin: 0;
            li {
                list-style: none;
            }
        }
    }
    .body{
        width: calc(100%);
        height: calc(500px - 84px);
        position: relative;
        margin: 20px 0 0;
        overflow-y: auto;
    }

    @media screen and (max-width: 750px) {
        height: 100%;
        width: 100%;
        .body{
            overflow-y: auto;
            height: 100%;
        }
    }

    @media screen and (max-height: 500px) {
        height: 100%;
        .body{
            overflow-y: auto;
        }
    }
`;

const Layout =({routes = [], config})=> {
    const Config = config;
    const Links = routes.filter( route=>( route.name))
    return (
    <Container>
        <div className={'nav'}>
            <Nav Links={Links} />
        </div>
        <div className={'body'}>
            <Switch>
                {
                    routes.map(route => 
                        <Config 
                        ke={route.path} 
                        {...route} 
                        />
                    )
                }
            </Switch>
        </div>
        <div className={'vector'} style={{ backgroundImage:`url(${data.vactor})` }}/>
    </Container>
    );
}

export default Layout;
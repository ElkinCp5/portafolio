import React from "react";
import { Switch } from "react-router-dom";
import styled from "styled-components";
import Nav from "../components/Nav";
import data from "../data";

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
    .vector{
        display: block;
        top: 0;
        left: 0;
        bottom: 0;
        right:0;
        position: absolute;
        z-index: 0;
        background-image: url(${data.vactor});
        background-position: center;
        background-size: cover;
    }

    .nav, .body{
        width: 100%; 
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
        height: calc(100% - 60px);
        position: relative;
    }

    @media screen and (max-width: 750px) {
        width: 100%;
    }
    @media screen and (max-width: 500px) {
        height: 100%;
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
        <div className={'vector'} />
    </Container>
    );
}

export default Layout;
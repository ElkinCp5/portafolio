import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const SNav = styled.nav`
    &, ul, li{
        height: 64px;
    } 
    ul{ 
        padding: 0 10px;
        display: flex;
        justify-content: flex-end;
        li{
            a{
                display: block;
                height: 64px;
                font-size: 1rem;
                color: white;
                padding: 0 15px;
                cursor: pointer;
                transition: all .3s;
                line-height: 60px;
                text-decoration: none;
                font-weight: 500;
                border: 0;
                &:-webkit-any-link:active,
                &:hover, &:focus, &.active {
                    color: #C9472D;
                    background-color: rgba(0, 0, 0, 0.1) ;
                    border-bottom: 2px solid #C9472D;
                }
                &:focus-visible {
                    outline: white auto 1px;
                }
            }
        }
    }
`;

const Nav =({Links = []})=> {
  return (
      <SNav>
        <ul>
          {
            Links.map( link => 
                <li ke={link.path} >
                    <NavLink exact to={link.path} activeClassName="active">{link.name}</NavLink>
                </li>
            )
          }
        </ul>
      </SNav>
  );
}

export default Nav;
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
                transition: background-color .3s;
                font-size: 1rem;
                color: white;
                padding: 0 15px;
                cursor: pointer;
                line-height: 60px;
                text-decoration: none;
                font-weight: 500;
                &:-webkit-any-link:active {
                    color: #C9472D;
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
            Links.map( Links => 
                <li ke={Links.path} >
                    <NavLink to={Links.path}>{Links.name}</NavLink>
                </li>
            )
          }
        </ul>
      </SNav>
  );
}

export default Nav;
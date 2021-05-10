import React from "react";
import styled from "styled-components";
import data from '../data';

const Styled = styled.div`
    height: 100%;
    h1{margin:0;}
    h2{
        margin-top: 10px;
        margin-bottom: 0;
    }
`;

const Experience =()=> 
<Styled>
    <h1>Experiencia</h1>
    <ul>
        {
            data.Experiences.map(experience=> 
                <React.Fragment>
                    <h2 className={'color2'}>{experience.name}</h2>
                    <li>{experience.tecnology}</li>
                    <li>{experience.url}</li>
                    <li>{experience.position}</li>
                    <li>{experience.date}</li>
                </React.Fragment>
            )
        }
    </ul>
</Styled>
export default Experience;
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

const Studies =()=> 
<Styled>
    <h1>Estudios</h1>
    <ul>
        {
            data.Studies.map(studie=> 
                <React.Fragment>
                    <h2 className={'color2'}>{studie.type}</h2>
                    <li>{studie.title}</li>
                    <li>{studie.modality}</li>
                    <li>{studie.entity}</li>
                </React.Fragment>
            )
        }
    </ul>
</Styled>
export default Studies;
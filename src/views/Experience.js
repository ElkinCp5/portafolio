import React from "react";
import styled from "styled-components";
import { Card } from "../components/Cards";
import data from '../data';

const Styled = styled.div`
    height: 100%;
    padding-bottom: 10px;
    h1{margin:0 0 15px 0;}
    h2{
        margin-top: 10px;
        margin-bottom: 0;
    }
`;

const Experience =()=> 
<Styled>
    <h1>Experiencia</h1>
    {
        data.Experiences.map(experience=> 
            <Card
                style={{backgroundColor: '#d6d6d6'}}
                className={'studie'} 
                >
                    <a href className={'more colorb2'}>Ver</a>
                    <div className={'conten-studie flex flec-jst'}>
                        <div className={'studie-img flex flex-ic flex-jc'}>
                            <img src={experience.src} alt={experience.name} />
                        </div>
                        <div className={'studie-info flex flex-jc flex-dc'}>
                            <p className={'color2'}>{experience.name}</p>
                            <p className={'title'}>{experience.tecnology}</p>
                            <small className={'sub-text'}>{experience.dateStart || 'Fecha inicio'} - {experience.dateEnd || 'Fecha final'}</small>
                        </div>
                    </div> 
            </Card>
        )
    }
</Styled>
export default Experience;
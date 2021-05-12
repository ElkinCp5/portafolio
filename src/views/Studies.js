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

const Studies =()=> 
<Styled>
    <h1>Estudios</h1>
    {
            data.Studies.map(studie=> 
                <React.Fragment>
                    <Card
                    style={{backgroundColor: '#d6d6d6'}}
                    className={'studie'} 
                    >
                        <a href className={'more colorb2'}>Ver</a>
                        <div className={'conten-studie flex'}>
                            <div className={'studie-img flex flex-ic flex-jc'}>
                                <img src={studie.src} alt={studie.entity} />
                            </div>
                            <div className={'studie-info flex flex-jc flex-dc'}>
                                <p className={'color2'}>{studie.type}</p>
                                <p className={'title'}>{studie.title}</p>
                                <small className={'sub-text'}>{studie.modality} - {studie.entity}</small>
                            </div>
                        </div> 
                    </Card>
                </React.Fragment>
            )
    }
</Styled>
export default Studies;
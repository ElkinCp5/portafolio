import React from "react";
import styled from "styled-components";

const SCard = styled.div`
    position: relative;
    padding: 20px;
    color: ${ props => props.backgroundColor || '#000000' };
    border-radius: ${ props => props.borderRadius || '8px' };
    background-color: ${ props => props.backgroundColor || '#FFFFFF' };

    &.studie{
        margin-bottom: 15px;
        min-height: 105px;
        padding: 0;
        transition: box-shadow .3s, border-left .3s;
        &:hover{
            border-left: 4px solid #c9472d;
            box-shadow: 1px 6px 12px 2px #731e0d;
        }
        p{ margin: 0; }
        small{ display: block; }
        .more{
            max-width:100px;
            padding: 4px 20px;
            border-radius: 0 0 0 50px;
            background-color: #FFF;
            position: absolute;
            top: 0;
            right: 0;
            text-align: center;
        }
    }
    .conten-studie{
        padding: 0;
        margin: 0;
        min-height: 105px;
        .studie-img{
            width: 70px;
            border-radius: 8px 0 0 8px;
            overflow: hidden;
            background-color: #FFF;
            img{
                width: 150%;
                background-color: #FFF;
            }
        }
        .studie-info{
            width: calc(100% - 80px);
            padding: 5px 20px;
            .title{
                font-size: 25px;
                font-weight: 700;
                @media screen and (max-width: 500px) {
                    font-size: 18px;
                }
            }
            .sub-text{
                color: grey;
            }
        }
    }
`;

const Card = React.memo((
    {
        style, 
        color, 
        borderRadius,
        backgroundColor, 
        className, 
        children
    }
    )=> {
    return (
        <SCard
        style={style}
        color={color}
        borderRadius={borderRadius}
        className={className}
        backgroundColor={backgroundColor}
        >
          {children}
        </SCard>
    );
});
Card.propsDefault={}


export { 
    Card
};
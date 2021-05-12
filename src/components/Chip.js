import React from "react";
import styled from "styled-components";

const SChip = styled.nav`
    padding: 5px 15px;
    border-radius: 50px;
    color: ${ props => props.backgroundColor || '#000000' };
    background-color: ${ props => props.backgroundColor || '#FFFFFF' };
`;

const Chip = React.memo(({style, color, backgroundColor, className, children})=> {
    return (
        <SChip
        style={style}
        color={color}
        className={className}
        backgroundColor={backgroundColor}
        >
          {children}
        </SChip>
    );
});

export default Chip;
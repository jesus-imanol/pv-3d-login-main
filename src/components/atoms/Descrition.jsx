import styled from "styled-components";
const DescriptionStyled = styled.h6 `
    

`;

function H6(props) {
    return ( <>
    
    <DescriptionStyled>
        {props.des}
    </DescriptionStyled>
    </> );
}

export default H6;
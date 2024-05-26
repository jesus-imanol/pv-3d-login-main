import styled from "styled-components";

const TitleStyled = styled.h2 `
    font-size: 30px;
    font-weight: bold;
    color: #715CF8;
    text-align: center;

`;
function Title(props) {
    return ( 
    <>
    <TitleStyled>{props.title}</TitleStyled>
    </> );
}

export default Title;
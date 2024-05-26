import styled from "styled-components";
const ButtonStyled = styled.button`
width: 50%;
    height: 30px;
    background-color: #715CF8;
    border: 1px solid #ffff;
    border-radius: 10px;
    font-size: 14px;
    color: #ffff; 
    width: auto;

    &:hover {
        background-color: #8A50F3;
    }
`;

function Button(props){
    return(
        <ButtonStyled onClick={props.onClick} >{props.text}</ButtonStyled>
    )
}

export default Button;
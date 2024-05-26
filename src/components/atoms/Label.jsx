import styled from "styled-components";

const LabelStyled = styled.label`
    font-size: 14px;
    color: #333;
    
`;

function Label(props) {
    return(
        <LabelStyled>{props.text}</LabelStyled>
    )
}

export default Label;
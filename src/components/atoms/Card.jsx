import styled from "styled-components";
const DivStyled = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 15px;
    margin: 10px;
    width: 90%;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease-in-out;
    background-color: #ffffff;
    
    &:hover {
        box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
    }
`;

function Div(props) {
    return ( <>
    <DivStyled>
        {props.children}
     </DivStyled>
    </> );
}

export default Div;
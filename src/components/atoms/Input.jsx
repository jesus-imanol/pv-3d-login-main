import styled from "styled-components";

const InputStyled = styled.input`
    width: 100%;
    height: 40px;
    border-radius: 5px;
    font-size: 16px;
    padding: 10px 15px;
    border: 1px solid #ccc;
    outline: none;
    transition: border-color 0.3s;

    &:focus {
        border-color: #007BFF;
    }


`;

function Input(props) {
    const handlerOnChange = (event) => {
        props.fnVal(event.target.value)
    }
    return(
        <InputStyled 
        id={props.id} 
        type={props.type} 
        placeholder={props.placeholder} 
        value={props.val} onChange={handlerOnChange}
        />
    )
}

export default Input;
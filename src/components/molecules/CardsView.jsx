import Label from "../atoms/Label";
import Div from "../atoms/Card";

function CardsView(props) {
    return ( <>
        <Div key={props.key}>
        <Label text={props.user}></Label>
        <Label text={props.email}></Label>
        <Label text={props.password}></Label>
        </Div>
    </> );
}

export default CardsView;
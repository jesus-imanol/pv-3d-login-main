import React, { useState } from 'react';
import FieldViewParticipants from "../molecules/FieldViewParticipants";
import './SectionView.css';
import { getParticipants } from "../../data/BD";
import Button from "../atoms/Button";
import Label from '../atoms/Label';
import H6 from '../atoms/Descrition';
import CardsView from '../molecules/CardsView';

function SectionView() {
    const [participantsView, setParticipantsView] = useState([]);

    const handleView = (event) => {
        let participantsCards = [];
        for (let i = getParticipants().length - 1; i >= 0; i--) {
            let participant = getParticipants()[i];
            participantsCards.push(
                <CardsView key={participant.user}  
                user={participant.user} 
                email={participant.email} 
                password={participant.password}>
                </CardsView>
            );
        }

        setParticipantsView(participantsCards);
    };

    return (
        <div className='view_participants'>
            <FieldViewParticipants title={"Registers of users"}></FieldViewParticipants>
            <div>{participantsView}</div>
            <Button text={"View Participants"} onClick={handleView}></Button>
            <img className="img_decoration" src="decoration_lu.png" alt="" />
        </div>
    );
}


export default SectionView;

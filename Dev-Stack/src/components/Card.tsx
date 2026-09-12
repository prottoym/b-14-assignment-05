import type {Icard} from "../types/CardType";
import React, {use} from 'react';
import Tech from "./Tech";

interface CardProps{
    cardPromise : Promise<Icard[]>
}

const Card = ({cardPromise} : CardProps) => {
     console.log(cardPromise);
     const card = use(cardPromise);
     console.log(card);
    return (
        <div>
            <Tech card= {card}></Tech>
        </div>
    );
};

export default Card;
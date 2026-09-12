import type {Icard} from "../types/CardType";
import React, {use} from 'react';

interface CardProps{
    cardPromise : Promise<Icard[]>
}

const Card = ({cardPromise} : CardProps) => {
     console.log(cardPromise);
     const card = use(cardPromise);
     console.log(card);
    return (
        <div>
            
        </div>
    );
};

export default Card;
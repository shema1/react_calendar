import React from 'react';
import { generateNumbersRange } from '../../utilites';


export const timeOptions = () => {

    generateNumbersRange
    return generateNumbersRange(0, 23).map(elem => {
        const hours = `0${elem}`.slice(-2);
        let increase = 0;
        let minutes = `0${increase}`;
        let optionArr = [];

        for (let i = 0; i < 4; i++) {
            optionArr.push(
                <option
                    key={elem + i}
                    value={`${hours}:${minutes.slice(-2)}`}
                >{`${hours.slice(-2)}:${minutes.slice(-2)}`}</option>
            );
            increase += 15;
            minutes = `0${increase}`;
        }
        return optionArr;
    });
}
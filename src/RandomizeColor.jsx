import React from "react";

export default function RandomizeColor() {

    function RandomColor() {
        const number = '0123456789ABCDEF';
        let color = '#';

        for (let i = 0; i < 6; i++) {
            color += number[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function BgEventHandler(e) {
        const currentcolor = document.querySelector('body');

        currentcolor.style.background = RandomColor();
    }

    function TitleEventHandler(e) {
        const currentcolor = document.querySelector('h1');

        currentcolor.style.color = RandomColor();
    }

    function ButtonEventHandler(e) {
        const currentcolor = document.querySelectorAll('button');

        for (let i = 0; i < 3; i++) {
            currentcolor[i].style.background = RandomColor();
            currentcolor[i].style.color = 'white';
        }

    }


    return (
        <div>
            <h1>Randomize color</h1>
            <div className="button">
                <button onClick={(e) => { BgEventHandler(e); }}>BG Color</button>
                <button onClick={(e) => { TitleEventHandler(e); }}>Title Color</button>
                <button onClick={(e) => { ButtonEventHandler(e); }}>Button Color</button>
            </div>
        </div>
    )
}
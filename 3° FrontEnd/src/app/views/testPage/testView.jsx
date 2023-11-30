import React, { useEffect, useRef, useState } from 'react';
import './testStyle.css';

const TestViewComponent = () => {

    const ref = useRef()
    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '0123456789';
    const alphabet = katakana + letters + nums;
    const fontSize = 16;

    const [columns, setColumns] = useState()
    const [context, setContext] = useState()
    const [rainDrops, setRainDrops] = useState([])

    useEffect(() => {
        ref.current.width = window.innerWidth;
        ref.current.height = 700;
        setColumns(ref.current.width/fontSize)
        setContext(ref.current.getContext('2d'))
    }, [])

    useEffect(() => {
        if (columns != undefined) {
            for( let x = 0; x < columns; x++ ) {
                rainDrops[x] = 1;
            }

            const draw = () => {
                context.fillStyle = 'rgba(0, 0, 0, 0.05)';
                context.fillRect(0, 0, ref.current.width, ref.current.height);
                
                context.fillStyle = '#0F0';
                context.font = fontSize + 'px monospace';
            
                for(let i = 0; i < rainDrops.length; i++)
                {
                    const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
                    context.fillText(text, i*fontSize, rainDrops[i]*fontSize);
                    
                    if(rainDrops[i]*fontSize > ref.current.height && Math.random() > 0.975){
                        rainDrops[i] = 0;
                    }
                    rainDrops[i]++;
                }
            };

            setInterval(draw, 70);
        }
    }, [columns])

    return (
        <div id='test'>
            <canvas ref={ref} id="matrix"></canvas>
        </div>
    );
};

export default TestViewComponent;

import React from "react";
import { useEffect, useState } from 'react';
import './Clock.css';

export default function Clock({ resource, targetDate }) {
    const [timeLeft, setTimeLeft] = useState({
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00',
    });

    useEffect(() => {
        const updateCountdown = () => {
            const now = new Date();
            const difference = targetDate - now;

            if (difference <= 0) {
                clearInterval(interval);
                setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
                return;
            }

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((difference / (1000 * 60)) % 60);
            const seconds = Math.floor((difference / 1000) % 60);

            setTimeLeft({
                days: days < 10 ? `0${days}` : days,
                hours: hours < 10 ? `0${hours}` : hours,
                minutes: minutes < 10 ? `0${minutes}` : minutes,
                seconds: seconds < 10 ? `0${seconds}` : seconds,
            });

            // Atualização dos círculos animados para contagem regressiva
            document.getElementById(`dd-${resource}`).style.strokeDashoffset = 440 - (440 * days) / 365;
            document.getElementById(`hh-${resource}`).style.strokeDashoffset = 440 - (440 * hours) / 24;
            document.getElementById(`mm-${resource}`).style.strokeDashoffset = 440 - (440 * minutes) / 60;
            document.getElementById(`ss-${resource}`).style.strokeDashoffset = 440 - (440 * seconds) / 60;

            // Atualização das rotações dos dots
            document.querySelector(`.day_dot-${resource}`).style.transform = `rotate(${(days * 360) / 365}deg)`;
            document.querySelector(`.hora_dot-${resource}`).style.transform = `rotate(${hours * 15}deg)`;
            document.querySelector(`.min_dot-${resource}`).style.transform = `rotate(${minutes * 6}deg)`;
            document.querySelector(`.seg_dot-${resource}`).style.transform = `rotate(${seconds * 6}deg)`;
        };

        const interval = setInterval(updateCountdown, 1000);
        return () => clearInterval(interval);
    }, [targetDate, resource]);

    return (
        <div id="time">
            <div className="circle" style={{ '--clr': '#ff0000' }}>
                <div className={`dot day_dot-${resource}`}></div>
                <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70" id={`dd-${resource}`}></circle>
                </svg>
                <div>{timeLeft.days}<br/><span>Dias</span></div>
            </div>
            <div className="circle" style={{ '--clr': '#ff2972' }}>
                <div className={`dot hora_dot-${resource}`}></div>
                <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70" id={`hh-${resource}`}></circle>
                </svg>
                <div>{timeLeft.hours}<br/><span>Horas</span></div>
            </div>
            <div className="circle" style={{ '--clr': '#fee800' }}>
                <div className={`dot min_dot-${resource}`}></div>
                <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70" id={`mm-${resource}`}></circle>
                </svg>
                <div>{timeLeft.minutes}<br/><span>Minutos</span></div>
            </div>
            <div className="circle" style={{ '--clr': '#04fc43' }}>
                <div className={`dot seg_dot-${resource}`}></div>
                <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70" id={`ss-${resource}`}></circle>
                </svg>
                <div>{timeLeft.seconds}<br/><span>Segundos</span></div>
            </div>
        </div>
    );
}
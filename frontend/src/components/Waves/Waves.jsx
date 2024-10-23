import React from 'react';
import './Waves.css';

export default function Waves( { children } ) {
    return (
        <>
            <div className="waveContainer w-100">
                <svg
                    className="waves"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 24 150 28"
                    preserveAspectRatio="none"
                    shapeRendering="auto"
                >
                    <defs>
                        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                    </defs>
                    <g className="parallax">
                        <use xlinkHref="#gentle-wave" x="48" y="0" fill="#2c88512d" />
                        <use xlinkHref="#gentle-wave" x="48" y="3" fill="#2c885160" />
                        <use xlinkHref="#gentle-wave" x="48" y="5" fill="#2c885193" />
                        <use xlinkHref="#gentle-wave" x="48" y="7" fill="#2C8851" />
                    </g>
                </svg>

                <div className="waveContent w-100">
                    <div className='container py-5'>
                        { children }
                    </div>
                </div>
            </div>
        </>
    )
}

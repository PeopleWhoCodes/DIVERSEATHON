import React from 'react'

const Heading = ({ text, invertColor }) => {
    return (
        <h1
            className={`text-5xl tracking-widest font-bold screen4:text-4xl ${
                invertColor ? 'text-ButtonBg' : 'text-Primary'
            }`}
        >
            {text}
        </h1>
    )
}

export default Heading

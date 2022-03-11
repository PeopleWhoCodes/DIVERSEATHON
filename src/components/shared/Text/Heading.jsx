import React from 'react'

const Heading = ({ text, invertColor, HomeCARDText }) => {
    return (
        <h1
            className={`text-5xl tracking-widest font-bold screen4:text-4xl ${
                invertColor
                    ? 'text-ButtonBg'
                    : HomeCARDText
                    ? 'text-HomeCardHeading '
                    : 'text-Primary'
            }`}
        >
            {text}
        </h1>
    )
}

export default Heading

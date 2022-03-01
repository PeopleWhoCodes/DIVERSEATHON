import React from 'react'

const Anouncement = ({ text, invert }) => {
    return (
        <h1
            className={`text-4xl screen4:text-3xl ${
                invert ? 'text-ButtonBg' : 'text-white'
            } font-bold`}
        >
            {text ? text : 'ANOUNCING SOON'}
        </h1>
    )
}

export default Anouncement

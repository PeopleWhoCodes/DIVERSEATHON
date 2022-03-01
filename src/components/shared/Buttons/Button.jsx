import React from 'react'

const Button = ({ text, transparent, more, navbar, hero }) => {
    return (
        <button
            className={`font-medium rounded-full text-xl
            transition hover:delay-200 hover:transition-color
            ${navbar ? 'px-5' : 'px-8'}
            ${more ? 'py-2' : 'py-1'}
            ${
                transparent
                    ? 'border-2 hover:border-Gray hover:bg-ButtonBg border-ButtonBg text-ButtonBg hover:text-white'
                    : 'bg-ButtonBg text-white'
            }
            ${
                hero
                    ? 'screen5:text-base screen5:px-6'
                    : 'screen3:py-2 screen3:px-10 screen5:text-lg screen5:px-0 screen5:w-full'
            }
            `}
        >
            {text}
        </button>
    )
}

export default Button

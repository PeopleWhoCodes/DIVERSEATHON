import React from 'react'

const Paragraph = ({ text }) => {
    return (
        <p className='text-2xl text-TextPassage w-[80%] text-center screen2:w-[100%] screen2:text-xl screen4:text-lg'>
            {text}
        </p>
    )
}

export default Paragraph

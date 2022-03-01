import React from 'react'
import Heading from '../shared/Text/Heading'
import Button from './../shared/Buttons/Button'

const Registeration = () => {
    return (
        <div className='flex flex-col gap-y-8 items-center justify-center py-20 px-20'>
            <Heading text={'REGISTRATION'} />
            <p className='text-2xl text-TextPassage w-[70%] text-center'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                felis, nisl eleifend mauris, eu nunc tincidunt. Amet et tellus
                accumsan,.
            </p>
            <div className='buttonWrapper flex px-12 gap-x-8 text-white'>
                <Button text={'Apply as Participant'} />
                <Button text={'Apply for Mentor'} transparent />
            </div>
        </div>
    )
}

export default Registeration

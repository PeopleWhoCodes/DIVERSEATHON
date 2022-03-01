import React from 'react'
import Heading from '../shared/Text/Heading'
import Button from './../shared/Buttons/Button'

const Guide = () => {
    return (
        <div className='flex flex-col gap-y-8 items-center justify-center py-20 px-20'>
            <Heading text={'GUIDE & RULES'} />
            <p className='text-2xl text-TextPassage w-[70%] text-center'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                felis, nisl eleifend mauris, eu nunc tincidunt. Amet et tellus
                accumsan,.
            </p>
            <div className='buttonWrapper flex px-12 gap-x-8 text-white'>
                <Button text={''} />
                <Button text={''} transparent />
            </div>
        </div>
    )
}

export default Guide

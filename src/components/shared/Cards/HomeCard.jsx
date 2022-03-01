import React from 'react'
import Heading from '../Text/Heading'
import Paragraph from '../Text/Paragraph'
import Button from './../Buttons/Button'

const HomeCard = ({ HeadingText, text1, text2, Children }) => {
    return (
        <div className='flex flex-col gap-y-8 items-center justify-center py-20 px-20 screen2:px-14 screen4:px-4'>
            <Heading text={HeadingText} />
            <Paragraph
                text={
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae felis, nisl eleifend mauris, eu nunc tincidunt. Amet et tellus accumsan,.'
                }
            />
            <div className='buttonWrapper flex px-12 gap-x-8 text-white screen1:px-4 screen2:justify-between screen3:flex-col screen3:gap-y-4 screen5:px-0 screen5:w-full'>
                <Button text={text1} />
                <Button text={text2} transparent />
            </div>
            {Children ? <Children /> : ''}
        </div>
    )
}

export default HomeCard

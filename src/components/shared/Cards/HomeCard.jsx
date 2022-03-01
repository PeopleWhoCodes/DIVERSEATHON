import React from 'react'
import Heading from '../Text/Heading'
import Paragraph from '../Text/Paragraph'
import Button from './../Buttons/Button'

const HomeCard = ({ HeadingText, Children, data, id }) => {
    return (
        <div
            id={id ? id : ''}
            className='flex flex-col gap-y-8 items-center justify-center py-20 px-20 screen2:px-14 screen4:px-4'
        >
            <Heading text={HeadingText} />
            <Paragraph text={data?.Info} />
            <div className='buttonWrapper flex px-12 gap-x-8 text-white screen1:px-4 screen2:justify-between screen3:flex-col screen3:gap-y-4 screen5:px-0 screen5:w-full'>
                {data?.buttons.map((btn) => (
                    <Button
                        data={btn}
                        text={btn.name}
                        key={btn._id}
                        transparent={btn.transparent}
                    />
                ))}
            </div>
            {Children ? <Children data={data?.data} /> : ''}
        </div>
    )
}

export default HomeCard

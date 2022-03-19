import React from 'react'
import Heading from '../Text/Heading'
import Paragraph from '../Text/Paragraph'
import Button from './../Buttons/Button'

const HomeCard = ({ HeadingText, Children, data, id, bgImage }) => {
    return (
        <div
            id={id ? id : ''}
            className={`flex flex-col gap-y-8 items-center justify-center px-20 screen2:px-14 screen4:px-4  ${
                Children ? 'py-8' : 'py-20'
            } ${
                id === 'SPONSORS' || id === 'CONTACT'
                    ? ''
                    : bgImage
                    ? `${bgImage} bg-cover opacity-90`
                    : 'bg-backgroundHomeCard bg-cover opacity-90'
            }`}
        >
            <Heading text={HeadingText} HomeCARDText />
            <Paragraph text={data?.Info} color={`text-TextPassageLight`} />
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

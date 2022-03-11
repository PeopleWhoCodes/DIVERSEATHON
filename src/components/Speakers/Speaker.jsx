import React, { useState, useEffect } from 'react'
import ImageCard from '../shared/Image/ImageCard'
import Button from './../shared/Buttons/Button'
import Heading from '../shared/Text/Heading'
import Paragraph from './../shared/Text/Paragraph'
import Anouncement from '../shared/Text/Anouncement'

const Speakers = ({ data }) => {
    const [dataPerPage, setDataPerPage] = useState(4)
    const [currentData, setCurrentData] = useState([])
    const NEW_DATA = data?.data
    useEffect(() => {
        setCurrentData(NEW_DATA.slice(0, dataPerPage))
    }, [dataPerPage, NEW_DATA])

    const viewMore = () => {
        setDataPerPage((prev) => prev + 3)
    }

    return (
        <div
            id='SPEAKERS'
            className='flex flex-col gap-y-8 items-center justify-center px-20 screen2:px-14 screen4:px-10'
        >
            <Heading text={'SPEAKERS'} invertColor />
            <Paragraph text={data?.Info} color={`text-TextPassageLight`} />
            <div className='speaker-wrapper flex items-center justify-center gap-x-14 gap-y-8 flex-wrap my-10'>
                {currentData.length > 0 ? (
                    currentData.map((speaker) => (
                        <ImageCard key={speaker._id} data={speaker} />
                    ))
                ) : (
                    <Anouncement invert />
                )}
            </div>
            <div className='buttonWrapper flex px-12 gap-x-8 text-white screen5:px-0 screen5:w-full'>
                {data?.buttons.map((btn) => (
                    <Button
                        data={btn}
                        text={'View More'}
                        more={btn.more}
                        key={btn._id}
                        transparent={data?.transparent}
                        onClickEvent={viewMore}
                        hidden={currentData.length === NEW_DATA.length}
                    />
                ))}
            </div>
        </div>
    )
}

export default Speakers

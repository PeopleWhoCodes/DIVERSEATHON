import React, { useEffect, useState } from 'react'
import EventBox from '../shared/Event/EventBox'
import Heading from '../shared/Text/Heading'
import Button from './../shared/Buttons/Button'
import Paragraph from './../shared/Text/Paragraph'
import Anouncement from './../shared/Text/Anouncement'

const Event = ({ data }) => {
    const [dataPerPage, setDataPerPage] = useState(3)
    const [currentData, setCurrentData] = useState([])
    const NEW_DATA = data?.data
    useEffect(() => {
        setCurrentData(NEW_DATA.slice(0, dataPerPage))
    }, [dataPerPage, NEW_DATA])

    const viewMore = () => {
        setDataPerPage((prev) => prev + 3)
    }

    return (
        <div id='EVENT' className='px-5'>
            <div className='innerTrackBox px-20 py-20 shadow bg-Primary rounded-lg flex flex-col items-center gap-y-14 screen2:px-14 screen4:px-4'>
                <Heading text={'EVENTS'} invertColor />
                <Paragraph text={data?.Info} />
                <div className='flex w-full gap-x-16 flex-wrap items-center justify-center gap-y-10'>
                    {currentData.length > 0 ? (
                        currentData.map((event) => (
                            <EventBox key={event._id} data={event} />
                        ))
                    ) : (
                        <Anouncement />
                    )}
                </div>
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

export default Event

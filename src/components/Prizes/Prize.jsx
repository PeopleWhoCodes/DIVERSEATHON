import React, { useEffect, useState } from 'react'
import PrizeBox from './PrizeBox'
import Button from './../shared/Buttons/Button'
import Heading from '../shared/Text/Heading'
import Paragraph from './../shared/Text/Paragraph'
import Anouncement from './../shared/Text/Anouncement'

const Prize = ({ data }) => {
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
        <div id='PRIZE' className='px-5'>
            <div className='innerTrackBox px-20 py-20 shadow bg-TrackBack rounded-lg flex flex-col items-center gap-y-14 screen2:px-14 screen4:px-4'>
                <Heading text={'PRIZES'} />
                <Paragraph text={data?.Info} />
                <div className='flex w-full gap-x-16 flex-wrap items-center justify-center gap-y-10'>
                    {currentData.length > 0 ? (
                        currentData.map((prize) => (
                            <PrizeBox key={prize._id} data={prize} />
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

export default Prize

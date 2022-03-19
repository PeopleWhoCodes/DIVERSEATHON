import React from 'react'
import Heading from '../shared/Text/Heading'
import Paragraph from '../shared/Text/Paragraph'
import TrackBox from './TrackBox'
import Anouncement from './../shared/Text/Anouncement'

const Track = ({ data }) => {
    return (
        <div id='TRACK' className='px-5'>
            <div
                className='innerTrackBox px-20 py-14 shadow bg-TrackBack rounded-lg flex flex-col items-center gap-y-14 screen2:px-14 screen4:px-4'
                style={{
                    boxShadow:
                        '0px 0px 10px 5px #2B2B2B, inset 0px 0px 7px 10px #C9C9C9',
                    border: '3px solid',
                    borderImageSource:
                        'linear-gradient(129.27deg, #8B48FE 0%, #02DEB9 100%)',
                }}
            >
                <Heading text={'TRACKS'} />
                <Paragraph text={data.Info} color={`text-TextPassageDark`} />
                <div className='flex gap-x-24 flex-wrap items-center justify-center gap-y-10'>
                    {data?.data.length > 0 ? (
                        data?.data.map((track) => (
                            <TrackBox data={track} key={track._id} />
                        ))
                    ) : (
                        <Anouncement text={'COMMING SOON'} invert />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Track

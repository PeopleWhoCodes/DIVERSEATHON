import React from 'react'
import PrizeBox from './PrizeBox'
import Button from './../shared/Buttons/Button'
import Heading from '../shared/Text/Heading'
import Paragraph from './../shared/Text/Paragraph'

const Prize = () => {
    return (
        <div>
            <div className='px-5'>
                <div className='innerTrackBox px-20 py-14 shadow bg-Primary rounded-lg min-h-[600px] flex flex-col items-center gap-y-14 screen2:px-14 screen4:px-4'>
                    <Heading text={'PRIZES'} invertColor />
                    <Paragraph
                        text={
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae felis, nisl eleifend mauris, eu nunc tincidunt. Amet et tellus accumsan,.'
                        }
                    />
                    <div className='flex w-full gap-x-16 flex-wrap items-center justify-center gap-y-10'>
                        <PrizeBox />
                        <PrizeBox />
                        <PrizeBox />
                        {/* <PrizeBox /> */}
                    </div>
                    <Button text={'View More'} more />
                </div>
            </div>
        </div>
    )
}

export default Prize

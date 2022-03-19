import React from 'react'
import FaqBox from './FaqBox'
import styles from './Faq.module.css'
import Heading from '../shared/Text/Heading'
import Paragraph from './../shared/Text/Paragraph'
import Button from '../shared/Buttons/Button'

const Faq = ({ data }) => {
    return (
        <div id='FAQ'>
            <div className='innerTrackBox px-20 py-14 shadow bg-backgroundHomeFAQ bg-cover min-h-[600px] flex flex-col items-center gap-y-14 screen2:px-16 screen4:px-10'>
                <Heading text={'FAQs'} invertColor />
                <Paragraph text={data?.Info} color={'text-TextPassageLight'} />
                {/* <PrizeBox /> */}
                <div className='flex w-[100%] flex-col flex-wrap items-center justify-center gap-y-10 select-none'>
                    <ul
                        className={`${styles.list__markerr} w-full list-disc marker:text-white marker:text-xl`}
                    >
                        {data?.data.map((faq) => (
                            <li key={faq._id}>
                                <FaqBox text1={faq.ques} text2={faq.ans} />
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='buttonWrapper flex px-12 gap-x-8 text-white screen1:px-4 screen2:justify-between screen3:flex-col screen3:gap-y-4 screen5:px-0 screen5:w-full'>
                    {/* {data?.buttons.map((btn) => ( */}
                    <Button
                        // data={btn}
                        text={'Contact Us on Mail'}
                        key={''}
                        transparent={false}
                    />
                    <Button
                        // data={btn}
                        text={'Join Discord'}
                        key={''}
                        transparent={true}
                    />
                    {/* ))} */}
                </div>
            </div>
        </div>
    )
}

export default Faq

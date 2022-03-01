import React from 'react'
import FaqBox from './FaqBox'
import styles from './Faq.module.css'
import Heading from '../shared/Text/Heading'
import Paragraph from './../shared/Text/Paragraph'

const Faq = ({ data }) => {
    return (
        <div id='FAQ' className='px-5'>
            <div className='innerTrackBox px-20 py-14 shadow bg-TrackBack rounded-lg min-h-[600px] flex flex-col items-center gap-y-14 screen2:px-16 screen4:px-10'>
                <Heading text={'FAQs'} />
                <Paragraph text={data?.Info} />
                {/* <PrizeBox /> */}
                <div className='flex w-[100%] flex-col flex-wrap items-center justify-center gap-y-10 select-none'>
                    <ul className={`${styles.list__markerr} w-full list-disc`}>
                        {data?.data.map((faq) => (
                            <li key={faq._id}>
                                <FaqBox text1={faq.ques} text2={faq.ans} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Faq

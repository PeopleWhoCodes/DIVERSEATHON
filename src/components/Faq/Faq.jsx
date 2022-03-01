import React from 'react'
import FaqBox from './FaqBox'
import styles from './Faq.module.css'
import Heading from '../shared/Text/Heading'
import Paragraph from './../shared/Text/Paragraph'

const Faq = () => {
    return (
        <div>
            <div className='px-5'>
                <div className='innerTrackBox px-20 py-14 shadow bg-TrackBack rounded-lg min-h-[600px] flex flex-col items-center gap-y-14 screen2:px-16 screen4:px-10'>
                    <Heading text={'FAQs'} />
                    <Paragraph
                        text={
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae felis, nisl eleifend mauris, eu nunc tincidunt. Amet et tellus accumsan,.'
                        }
                    />
                    {/* <PrizeBox /> */}
                    <div className='flex w-[100%] flex-col flex-wrap items-center justify-center gap-y-10 select-none'>
                        <ul
                            className={`${styles.list__markerr} w-full list-disc`}
                        >
                            <li>
                                <FaqBox
                                    text1={
                                        'lorem ipsum dolor sit amet, consectetur adip sit lorem ipsum dolor sit amet'
                                    }
                                    text2={
                                        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam earum eius voluptatum quo atque aliquam obcaecati recusandae facere inventore id. lorem ipsum dolor sit amet, consectetur adip sit lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adip sit lorem ipsum dolor sit amet'
                                    }
                                />
                            </li>
                            <li>
                                <FaqBox
                                    text1={
                                        'lorem ipsum dolor sit amet, consectetur adip sit lorem ipsum dolor sit amet'
                                    }
                                    text2={
                                        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam earum eius voluptatum quo atque aliquam obcaecati recusandae facere inventore id.'
                                    }
                                />
                            </li>
                            <li>
                                <FaqBox
                                    text1={
                                        'lorem ipsum dolor sit amet, consectetur adip sit lorem ipsum dolor sit amet'
                                    }
                                    text2={
                                        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam earum eius voluptatum quo atque aliquam obcaecati recusandae facere inventore id.'
                                    }
                                />
                            </li>
                            <li>
                                <FaqBox
                                    text1={
                                        'lorem ipsum dolor sit amet, consectetur adip sit lorem ipsum dolor sit amet'
                                    }
                                    text2={
                                        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam earum eius voluptatum quo atque aliquam obcaecati recusandae facere inventore id.'
                                    }
                                />
                            </li>
                            <li>
                                <FaqBox
                                    text1={
                                        'lorem ipsum dolor sit amet, consectetur adip sit lorem ipsum dolor sit amet'
                                    }
                                    text2={
                                        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam earum eius voluptatum quo atque aliquam obcaecati recusandae facere inventore id.'
                                    }
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq

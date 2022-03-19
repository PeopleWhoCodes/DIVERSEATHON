import React from 'react'
import styles from './Hero.module.css'
import topImg from '../../assets/img/hero2.svg'
import Button from './../shared/Buttons/Button'

const Hero = ({ data }) => {
    return (
        <div
            className={`${styles.heroSection} text-white flex flex-col items-center justify-center bg-backgroundHome bg-cover`}
        >
            <div className='w-full items-center flex flex-col h-[230px] screen1:h-[180px] screen7:h-[150px] screen5:justify-center screen5:items-center screen5:flex-col gap-y-5'>
                {/* <div className='left bg-DarkBack w-full flex flex-col justify-between px-12 py-8 screen6:py-6 screen6:px-8 screen7:py-4'> */}
                <p className='text-white font-medium text-2xl screen1:text-lg screen7:text-base'>
                    {data.date}
                </p>
                <h1 className='text-7xl font-extrabold text-white screen6:text-6xl screen1:text-5xl screen7:text-4xl'>
                    DIVERSEATHON
                </h1>
                <span className='italic text-white screen1:text-lg screen7:text-base max-w-[70%] text-center'>
                    A collaborative Hackathon Developers, designers, scientists,
                    students, entrepreneurs, marketers, writers and educators
                    come together to work on projects like applications,
                    softwares, data visualisation, and platform solutions that
                    address real-world issues.
                </span>
                {/* </div> */}
                {/* <div className='right h-[230px] screen1:h-[180px] screen7:hidden'>
                    <img
                        src={topImg}
                        alt='top'
                        className='h-[230px] screen1:h-[180px] w-full object-cover'
                    />
                </div> */}
            </div>
            <div className='buttonWrapper w-full flex justify-center items-center px-12 gap-x-8 mt-4 screen6:px-8 screen5:gap-x-4'>
                {data.buttons.map((btn) => (
                    <Button
                        data={btn}
                        key={btn._id}
                        text={btn.name}
                        hero={btn.hero}
                        transparent={btn.transparent}
                    />
                ))}
            </div>
        </div>
    )
}

export default Hero

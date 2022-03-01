import React from 'react'
import styles from './Hero.module.css'
import topImg from '../../assets/img/hero2.svg'
import Button from './../shared/Buttons/Button'

const Hero = () => {
    return (
        <div
            className={`${styles.heroSection} text-white flex flex-col items-center justify-center`}
        >
            <div className='w-full flex h-[230px] screen1:h-[180px] screen7:h-[150px] screen5:justify-center screen5:items-center screen5:flex-col'>
                <div className='left bg-DarkBack w-full flex flex-col justify-between px-12 py-8 screen6:py-6 screen6:px-8 screen7:py-4'>
                    <span className='italic text-Gray text-xl screen1:text-lg screen7:text-base'>
                        A global collaborative Hackathon
                    </span>
                    <h1 className='text-7xl font-bold tracking-widest text-ButtonBg screen6:text-6xl screen1:text-5xl screen7:text-4xl'>
                        DIVERSEATHON
                    </h1>
                    <p className='text-Gray font-medium text-xl screen1:text-lg screen7:text-base'>
                        15th May - 16th May, 2022
                    </p>
                </div>
                <div className='right h-[230px] screen1:h-[180px] screen7:hidden'>
                    <img
                        src={topImg}
                        alt='top'
                        className='h-[230px] screen1:h-[180px] w-full object-cover'
                    />
                </div>
            </div>
            <div className='buttonWrapper w-full flex px-12 gap-x-8 mt-4 screen6:px-8 screen5:gap-x-4'>
                <Button text={'Register'} hero />
                <Button text={'Join Discord'} transparent hero />
            </div>
        </div>
    )
}

export default Hero

import React from 'react'
import styles from './Hero.module.css'
import topImg from '../../assets/img/hero2.svg'

const Hero = () => {
    return (
        <div
            className={`${styles.heroSection} text-white flex flex-col items-center justify-center`}
        >
            <div className='w-full flex h-[230px]'>
                <div className='left bg-DarkBack w-full flex flex-col justify-between px-12 py-8'>
                    <span className='italic text-Gray text-xl'>
                        A global collaborative Hackathon
                    </span>
                    <h1 className='text-7xl font-bold tracking-widest text-ButtonBg'>
                        DIVERSEATHON
                    </h1>
                    <p className='text-Gray font-medium text-xl'>
                        15th May - 16th May, 2022
                    </p>
                </div>
                <div className='right h-[230px]'>
                    <img
                        src={topImg}
                        alt='top'
                        className='h-[230px] w-full object-cover'
                    />
                </div>
            </div>
            <div className='buttonWrapper w-full flex px-12 gap-x-8 mt-4'>
                <button className='px-8 font-medium rounded-full py-1 bg-ButtonBg text-xl'>
                    Register
                </button>
                <button className='px-8 font-medium rounded-full py-1 border-2 border-ButtonBg text-ButtonBg hover:text-white text-xl transition hover:delay-200 hover:transition-color hover:border-Gray hover:bg-ButtonBg'>
                    Join Discord
                </button>
            </div>
        </div>
    )
}

export default Hero

import React from 'react'
import sideImg from '../../assets/img/hero2.svg'

const PrizeBox = ({ data }) => {
    return (
        <div>
            <div className='w-[380px] flex flex-col items-center p-4 py-8 bg-[#ccc] rounded-lg shadow-[#13181F] screen4:w-[320px] screen5:w-full screen5:pt-4 screen5:px-2'>
                <h1 className='text-3xl tracking-widest font-bold text-ButtonBg screen5:text-2xl'>
                    {data?.title}
                </h1>
                <p className='text-center text-lg text-TextPassage mt-3 screen5:text-base'>
                    {data?.desc}
                </p>
            </div>
        </div>
    )
}

export default PrizeBox

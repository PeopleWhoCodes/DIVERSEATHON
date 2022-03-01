import React from 'react'
import sideImg from '../../assets/img/hero2.svg'

const PrizeBox = () => {
    return (
        <div>
            <div className='w-[380px] flex flex-col items-center p-4 py-8 bg-CardBack shadow-xl rounded-lg shadow-[#13181F] screen4:w-[320px] screen5:w-full screen5:pt-4 screen5:px-2'>
                <h1 className='text-3xl tracking-widest font-bold text-ButtonBg screen5:text-2xl'>
                    1st Prize
                </h1>
                <p className='text-center text-lg text-TextPassage mt-3 screen5:text-base'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vitae felis, nisl eleifend mauris, eu nunc tincidunt. Amet
                    et tellus accumsan,.
                </p>
            </div>
        </div>
    )
}

export default PrizeBox

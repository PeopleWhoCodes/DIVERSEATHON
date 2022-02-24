import React from 'react'
import PrizeBox from './PrizeBox'

const Prize = () => {
    return (
        <div>
            <div className='px-5'>
                <div className='innerTrackBox px-20 py-14 shadow bg-Primary rounded-lg min-h-[600px] flex flex-col items-center gap-y-14'>
                    <h1 className='text-5xl tracking-widest font-bold text-ButtonBg'>
                        PRIZES
                    </h1>
                    <p className='text-2xl text-TextPassage w-[70%] text-center'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vitae felis, nisl eleifend mauris, eu nunc tincidunt.
                        Amet et tellus accumsan,.
                    </p>
                    <div className='flex w-full gap-x-16 flex-wrap items-center justify-center gap-y-10'>
                        <PrizeBox />
                        <PrizeBox />
                        <PrizeBox />
                        {/* <PrizeBox /> */}
                    </div>
                    <button className='px-8 font-medium rounded-full py-2 bg-ButtonBg text-xl text-white'>
                        View More
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Prize

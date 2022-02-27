import React from 'react'
import SposnorTimeline from './SposnorTimeline'

const Sponsors = () => {
    return (
        <div className='flex flex-col gap-y-8 items-center justify-center py-20 px-20'>
            <h1 className='text-5xl tracking-widest font-bold text-Primary'>
                SPONSORS
            </h1>
            <p className='text-2xl text-TextPassage w-[70%] text-center'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                felis, nisl eleifend mauris, eu nunc tincidunt. Amet et tellus
                accumsan,.
            </p>
            <div className='buttonWrapper flex px-12 gap-x-8 text-white'>
                <button className='px-8 font-medium rounded-full py-1 bg-ButtonBg text-xl'>
                    Sponsor Us
                </button>
                <button className='px-8 font-medium rounded-full py-1 border-2 border-ButtonBg text-xl transition hover:delay-200 hover:transition-color hover:border-Gray hover:bg-ButtonBg text-ButtonBg hover:text-white'>
                    Become Community Partner
                </button>
            </div>
            <div className='sponsor-timeline flex flex-col items-center gap-y-14 mt-16'>
                <div className='flex flex-col items-center'>
                    <div className={`text-Primary italic text-4xl font-bold`}>
                        <p
                            className={` before:bg-[#E8FFFE] before:h-[35px] before:absolute before:mt-4 before:-ml-3 z-[10] before:z-[-1] before:w-[250px]`}
                        >
                            Title Sponsor
                        </p>
                    </div>
                    <SposnorTimeline />
                </div>
                <div className='flex flex-col items-center'>
                    <div className={`text-Primary italic text-4xl font-bold`}>
                        <p
                            className={` before:bg-[#E8FFFE] before:h-[35px] before:absolute before:mt-4 before:-ml-3 z-[10] before:z-[-1] before:w-[330px]`}
                        >
                            Associate Sponsor
                        </p>
                    </div>
                    <SposnorTimeline />
                </div>
                <div className='flex flex-col items-center'>
                    <div className={`text-Primary italic text-4xl font-bold`}>
                        <p
                            className={` before:bg-[#E8FFFE] before:h-[35px] before:absolute before:mt-4 before:-ml-3 z-[10] before:z-[-1] before:w-[320px]`}
                        >
                            Diamond Sponsor
                        </p>
                    </div>
                    <SposnorTimeline />
                </div>
                <div className='flex flex-col items-center'>
                    <div className={`text-Primary italic text-4xl font-bold`}>
                        <p
                            className={` before:bg-[#E8FFFE] before:h-[35px] before:absolute before:mt-4 before:-ml-3 z-[10] before:z-[-1] before:w-[320px]`}
                        >
                            Platinum Sponsor
                        </p>
                    </div>
                    <SposnorTimeline />
                </div>
                <div className='flex flex-col items-center'>
                    <div className={`text-Primary italic text-4xl font-bold`}>
                        <p
                            className={` before:bg-[#E8FFFE] before:h-[35px] before:absolute before:mt-4 before:-ml-3 z-[10] before:z-[-1] before:w-[320px]`}
                        >
                            Platinum Sponsor
                        </p>
                    </div>
                    <SposnorTimeline />
                </div>
                <div className='flex flex-col items-center'>
                    <div className={`text-Primary italic text-4xl font-bold`}>
                        <p
                            className={` before:bg-[#E8FFFE] before:h-[35px] before:absolute before:mt-4 before:-ml-3 z-[10] before:z-[-1] before:w-[400px]`}
                        >
                            Event & Media Partner
                        </p>
                    </div>
                    <SposnorTimeline />
                </div>
                <div className='flex flex-col items-center'>
                    <div className={`text-Primary italic text-4xl font-bold`}>
                        <p
                            className={` before:bg-[#E8FFFE] before:h-[35px] before:absolute before:mt-4 before:-ml-3 z-[10] before:z-[-1] before:w-[330px]`}
                        >
                            Education Partner
                        </p>
                    </div>
                    <SposnorTimeline />
                </div>
                <div className='flex flex-col items-center'>
                    <div className={`text-Primary italic text-4xl font-bold`}>
                        <p
                            className={` before:bg-[#E8FFFE] before:h-[35px] before:absolute before:mt-4 before:-ml-3 z-[10] before:z-[-1] before:w-[360px]`}
                        >
                            Community Partner
                        </p>
                    </div>
                    <SposnorTimeline />
                </div>
            </div>
        </div>
    )
}

export default Sponsors

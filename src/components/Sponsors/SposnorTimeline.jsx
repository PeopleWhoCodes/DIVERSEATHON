import React from 'react'
import SponsorCard from './SponsorCard'

const SposnorTimeline = ({ heading, id, data }) => {
    return (
        <div className='flex flex-col items-center'>
            <div
                className={`text-HomeCardHeading text-4xl font-bold screen3:text-3xl screen5:text-2xl`}
            >
                <p
                    className={` before:bg-[#E8FFFE] before:h-[35px] screen3:before:h-[28px] before:absolute before:mt-4 before:-ml-3 z-[10] before:z-[-1]
                    before:w-sponsor${id} screen3:before:w-sponsor${id}_1  screen5:before:hidden
                    ${
                        id === 1
                            ? 'before:w-sponsor1 screen3:before:w-sponsor1_1'
                            : id === 2
                            ? 'before:w-sponsor2 screen3:before:w-sponsor2_1'
                            : id === 3
                            ? 'before:w-sponsor3 screen3:before:w-sponsor3_1'
                            : id === 4
                            ? 'before:w-sponsor4 screen3:before:w-sponsor4_1'
                            : id === 5
                            ? 'before:w-sponsor5 screen3:before:w-sponsor5_1'
                            : id === 6
                            ? 'before:w-sponsor6 screen3:before:w-sponsor6_1'
                            : id === 7
                            ? 'before:w-sponsor7 screen3:before:w-sponsor7_1'
                            : ''
                    }
                    `}
                >
                    {heading}
                </p>
            </div>
            <div className='sponsorCardWrapper flex items-center justify-center mt-14 flex-wrap gap-x-8 gap-y-5'>
                {data?.map((card) => (
                    <SponsorCard key={card._id} data={card} />
                ))}
            </div>
        </div>
    )
}

export default SposnorTimeline

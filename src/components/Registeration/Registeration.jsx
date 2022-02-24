import React from 'react'

const Registeration = () => {
    return (
        <div className='flex flex-col gap-y-8 items-center justify-center py-20 px-20'>
            <h1 className='text-5xl tracking-widest font-bold text-Primary'>
                REGISTRATION
            </h1>
            <p className='text-2xl text-TextPassage w-[70%] text-center'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                felis, nisl eleifend mauris, eu nunc tincidunt. Amet et tellus
                accumsan,.
            </p>
            <div className='buttonWrapper flex px-12 gap-x-8 text-white'>
                <button className='px-8 font-medium rounded-full py-1 bg-ButtonBg text-xl'>
                    Apply as Participant
                </button>
                <button className='px-8 font-medium rounded-full py-1 border-2 border-ButtonBg text-xl transition hover:delay-200 hover:transition-color hover:border-Gray hover:bg-ButtonBg text-ButtonBg hover:text-white'>
                    Apply as Mentor
                </button>
            </div>
        </div>
    )
}

export default Registeration

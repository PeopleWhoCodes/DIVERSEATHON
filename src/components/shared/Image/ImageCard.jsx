import React from 'react'

const ImageCard = ({ data, speakerCard }) => {
    return (
        <div className='flex flex-col items-center'>
            <div className='rounded-full w-52 h-52 screen3:w-48 screen3:h-48'>
                <img
                    src={data?.img}
                    alt={data?.title}
                    className='w-[inherit] h-[inherit] rounded-full object-cover'
                />
            </div>
            {/* {speakerCard && (
                <> */}
            <h2 className='text-lg font-medium text-TextDarkBlue mt-2'>
                Speaker Name
            </h2>
            <p className='px-3 text-TextPassageLight'>
                Designation of the speaker
            </p>
            {/* </>
            )} */}
        </div>
    )
}

export default ImageCard

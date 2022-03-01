import React from 'react'

const SponsorCard = ({ data }) => {
    return (
        <div className='px-4 py-2 rounded-md w-40 h-14 bg-SponsorCard items-center flex justify-center'>
            <img src={data?.img} alt={data?.title} />
        </div>
    )
}

export default SponsorCard

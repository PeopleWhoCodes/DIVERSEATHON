import React from 'react'

const About = () => {
    return (
        <div className='flex justify-between px-14 my-20 screen1:flex-col screen1:gap-y-5 screen4:px-10'>
            {/* Left Heading */}
            <div className='left'>
                <h2 className='text-TextDarkBlue text-3xl font-bold tracking-wide screen1:text-4xl'>
                    About
                </h2>
                <h3 className='text-3xl font-semibold tracking-wide screen1:text-4xl'>
                    Diverseathon
                </h3>
            </div>
            {/* Right Heading */}
            <div className='right max-w-[75%] screen1:max-w-full'>
                <p className='text-2xl text-TextPassage screen2:text-xl screen4:text-lg'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vitae felis, nisl eleifend mauris, eu nunc tincidunt. Amet
                    et tellus accumsan, lorem dictumst vitae condimentum odio.
                    Tempus. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Vitae felis, nisl eleifend mauris, eu nunc tincidunt.
                    Amet et tellus accumsan, lorem dictumst vitae condimentum
                    odio. Tempus.
                </p>
            </div>
        </div>
    )
}

export default About

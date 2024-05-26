import React from 'react'
import { HoverEffect } from '../components/ui/card-hover-effect'

const page = () => {
    return (
        <>

            <div className='container flex justify-center'>
                <div className='max-w-[70%] max-h-[50vh]  mt-[15%] text-center text-[#a8a8a8] z-20'>
                    <h1 className='techH1 text-[#dfdfdf]'>Revolutionize your digital footprint with&nbsp;<span className='mt-3'>Voxizo</span></h1>
                    <h2 className='text-lg mt-7'>Dive into a realm where technology<br /> precisely orbits your needs.</h2>
                </div>

            </div >
            <div className='cardsContainer max-w-[80%] mt-5 grid place-items-center'>
                <img src='https://assets-global.website-files.com/651b214606318f3be54030a9/6524ee7669591c108c05425c_Ellipse%204-p-800.png' className='absolute ' />
                <HoverEffect items={projects} />
            </div>
        </>

    )
}

export default page





export const projects = [
    {
        title: "React.js",
        description:
            "A technology company that builds economic infrastructure for the internet.",
        link: "https://stripe.com",
    },
    {
        title: "Woo",
        description:
            "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
        link: "https://netflix.com",
    },
    {
        title: "Google Ads",
        description:
            "A multinational technology company that specializes in Internet-related services and products.",
        link: "https://google.com",
    },
    {
        title: "Meta Ads",
        description:
            "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
        link: "https://meta.com",
    },
    {
        title: "Wordpress",
        description:
            "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
        link: "https://amazon.com",
    },
    {
        title: "Next.js",
        description:
            "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
        link: "https://microsoft.com",
    },
];
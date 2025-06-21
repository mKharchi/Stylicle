import React from 'react'

import { BiArrowBack, BiSearch } from 'react-icons/bi'
import { FaLocationPin, FaLocationPinLock } from 'react-icons/fa6'
import { GrLocationPin } from 'react-icons/gr'
import Testimonials from '../components/Testimonials'
import { Navigate, useNavigate } from 'react-router'
const SearchBar = () => {
    return (
        <div className='flex rounded-full items-center justify-center w-full max-w-2xl bg-white text-black shadow-md mt-6  p-4'>
            <input
                type="text"
                placeholder="Search for services."
                className="flex-grow px-4 py-2 border border-gray-300 rounded-full focus:outline-none "
            />
            <a href='#recommended' className="ml-4  px-6 py-2 bg-primary text-white rounded-full hover:opacity-80 transition-all duration-300">
                Search {<BiSearch className='inline ml-2' />}
            </a >
        </div>
    )
}



const Galery = () => {
    return (
        <section className='flex mt-5 py-6 flex-col w-full items-center justify-center gap-6 px-20'>
            <div className='flex flex-col items-center justify-center gap-2 w-full text-center'>
                <h1 className='text-3xl font-bold  text-center w-full'>We are Experienced in making you <br /> very Beautiful</h1>
                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur. Eu quis enim tempor et proin neque.</p></div>

            <div className='grid grid-cols-3 gap-4 w-full  rounded-4xl overflow-hidden '>
                <div className="w-full h-full  row-span-2 overflow-hidden"><img src="/image1.png" className='hover:scale-110 transition ease-in-out object-cover w-full h-full' alt="" /></div>
                <div className='w-full h-full  overflow-hidden'><img src="/image2.png" className='hover:scale-110 transition ease-in-out object-cover w-full h-full' alt="" /></div>
                <div className='w-full h-full  overflow-hidden'><img src="/image3.png" className='hover:scale-110 transition ease-in-out object-cover w-full h-full' alt="" /></div>
                <div className='w-full h-full  overflow-hidden'><img src="/image4.png" className='hover:scale-110 transition ease-in-out object-cover w-full h-full' alt="" /></div>
                <div className='w-full h-full  overflow-hidden'><img src="/image5.png" className='hover:scale-110 transition ease-in-out object-cover w-full h-full' alt="" /></div>
            </div>
        </section>
    )
}

const Services = () => {

    const service = [{
        name: "Makeup-artist", image: "makeup.png"
    }, {
        name: "Wellnesscenter", image: "wellness.png"
    }, {
        name: "Barbersalon", image: "barber.png"
    }, {
        name: "Frisørsalon", image: "firsor.png"
    }, {
        name: "Massageklinik", image: "massage.png"
    }, {
        name: "Fodterapeut", image: "foot.png"
    },]
    return (
        <section className='flex w-full items-center justify-center p-4 px-20 '>

            <div className='flex items-center justify-start gap-18  no-scrollbar w-full overflow-x-scroll' style={{ scrollbarWidth: 'none' }}>
                {service.map((item, index) => (
                    <div key={index} className='flex  flex-col items-center justify-center gap-2 rounded-lg  w-full min-w-[200px] '>
                        <img src={`/${item.image}`} alt={item.name} className='w-16 h-16 object-cover rounded-full mb-2' />
                        <h3 className='text-lg text-center w-full font-semibold'>{item.name}</h3>
                    </div>
                ))}</div>
        </section>
    )
}



const Recommended = () => {
    const navigate = useNavigate()

    const services = [{
        name: "Masseuse", image: "masseuse.jpg", reviews: 4.5, reviewCount: 150, location: "New York"
    }, {
        name: "Beauty Salon", image: "beauty.png", reviews: 4.5, reviewCount: 150, location: "London"
    }, {
        name: "Nail Salon", image: "nails.jpg", reviews: 4.5, reviewCount: 150, location: "Paris"
    }, {
        name: "Spa", image: "spa.jpg", reviews: 4.5, reviewCount: 150, location: "Tokyo"
    }, {
        name: "Barber Shop", image: "hair.png", reviews: 4.5, reviewCount: 150, location: "Berlin"
    }]
    return (
        <section id='recommended' className='flex  flex-col items-center overflow-x-scroll  w-full  px-20 justify-center gap-2 min-h-screen bg-bg-white ' style={{
            scrollbarWidth:'none'
        }}>
            <div className='flex flex-col items-center justify-center gap-2 w-full py-16 px-32'>
                <p className='text-xs font-light text-center w-full max-w-2xl'>Our Services.</p>
                <h1 className='text-3xl font-bold'>Recommended</h1>
                <p className='text-md text-center w-full max-w-2xl'>
                    Lorem ipsum dolor sit amet consectetur. Eu quis enim tempor et proin neque.
                </p>

            </div>
            <div className='flex items-center justify-start gap-10 overflow-x-scroll w-full  ' style={{ scrollbarWidth: 'none' }}>
                {services.map((item, index) => (
                    <div key={index} className='flex flex-col border-[1px] border-primary pb-2 items-center overflow-hidden justify-center gap-1 rounded-lg  min-w-[255px] w-full '>
                        <div className='w-full min-w-42 h-56 object-cover  mb-2 overflow-hidden'><img src={`/${item.image}`} alt={item.name} className='hover:scale-110 ease-in transition-all duration-200 w-full h-full' />
                        </div><div className='flex items-center justify-between w-full px-4 py-2'>
                            <div className='flex text-sm items-center w-full justify-between gap-2'>
                                <span className='text-yellow-500'>{'★' + item.reviews}</span>
                                <span className='text-gray-500'>{item.reviewCount} review</span>
                            </div>

                        </div>
                        <h3 className='text-lg text-left px-4 w-full '>{item.name}</h3>
                        <p className='flex items-center justify-start w-full text-xs text-gray-600 px-4 gap-0 '>{<GrLocationPin className='text-gray-500' />}{item.location}</p>
                        <button onClick={() => navigate(`/contact?service=${encodeURIComponent(item.name)}`)} className='px-4 py-2 w-[88%] border border-primary mt-2 text-black rounded-lg hover:bg-primary hover:text-bg-white transition-all duration-300'>
                            Book Now
                        </button>
                    </div>
                ))}
            </div>


        </section>)
}



const NewsLetter = () => {
    return (
        <div className='min-h-[40vh]   px-40 flex items-center justify-center'>
            <div className='w-full py-12 gap-8 flex items-center justify-center '>
                <img src="/newsletter.png" alt="" className='w-full  h-64 rounded-xl' />
                <div className='w-full flex gap-4 flex-col justify-center items-end'>
                    <div className='flex flex-col gapp-1 justify-center items-start w-full h-full'>
                        <h1 className='text-3xl w-full  '>Subscribe to newsletter</h1>
                        <p className='text-sm w-full max-w-xl'>Sign up for our newsletter to stay up-to-date on the latest promotions, discounts, and new features releases.</p>
                    </div>
                    <div className='w-3/4 flex items-center border p-2 rounded-full overflow-hidden justify-between'>

                        <input className='border-none w-full py-2 active:border-none focus:border-0 open:border-0 enabled:border-0 rounded-l-full border-primary px-2' placeholder='Enter Your Email' type="text" />
                        <button className='py-2 px-4 bg-dark w-fit rounded-full text-white'>Subscribe</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

const Hero = () => {
    return (
        <section className='flex flex-col items-start gap-8 w-full py-16 px-32 justify-center h-full min-h-[82vh]  ' style={{
            backgroundImage: 'url(/hero-bg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'top',
        }}>

            <div className='flex text-light gap-2 flex-col text-left w-full items-start justify-center h-full'>
                <p className='w-full text-lg'>Hair Salon, Masseuse, Beauty Salon</p>
                <h1 className=' w-1/3 text-5xl font-bold mb-4'>Find a service close to you</h1>
                <p className='w-full text-md '>There are many variation of passages are Ipsum available,<br /> majority have suffered alteration in some form.</p>
                <SearchBar />
            </div>
        </section>
    )
}

const Home = () => {

    return (
        <div className='flex flex-col items-center justify-center gap-6 min-h-screen bg-bg-white'>
            <Hero />

            <Services />
            <Galery />
            <Recommended />
            <Testimonials />
            <NewsLetter />
        </div>
    )
}

export default Home

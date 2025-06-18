import React from 'react'

import Testimonials from "../components/Testimonials"
import { RiChatCheckFill } from 'react-icons/ri'
import { CiCircleCheck } from 'react-icons/ci'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import { Link, NavLink } from 'react-router'
const Hero = () => {

  return (
    <div className='w-full flex text-light flex-col gap-4 p-24 pt-36  items-center justify-center text-center bg-secondary '>
      <p className='text-sm  '>SHORT STORY ABOUT US</p>
      <h1 className='text-4xl max-w-lg font-semibold'>The big story behind, our beautyness center</h1>
      <Link to={'/contact'} className='bg-primary px-4 py-2  '>Contact us</Link>

    </div>)
}

const Values = () => {
  /**
   * The work values we thrive for
  Beauty Experts
  Great Services
  100% Genuine
   */
  const val = [{
    title: "Beauty Experts"
    , description: "The majority have suffered alteration in some form, buying to injected humour, or randomised words which desktop publishing packages."
  }, {
    title: "Great Services"
    , description: "The majority have suffered alteration in some form, buying to injected humour, or randomised words which desktop publishing packages."
  }, {
    title: "100% Genuine"
    , description: "The majority have suffered alteration in some form, buying to injected humour, or randomised words which desktop publishing packages."
  },
  ]


  return (
    <div className='w-full flex text-seconday flex-col gap-4 p-24 pt-36  items-center justify-center text-center bg-bg-white '>
      <p className='text-sm  '>OUR VALUES</p>
      <h1 className='text-2xl max-w-lg font-semibold'>The work values we thrive for</h1>
      <div className='w-full mt-4 gap-8 flex flex-col justify-center items-center'>
        {
          val.map((el, index) => (
            <div className='flex w-full items-start justify-center gap-4'>
              <img src={`/icon${index + 1}.png`} className='h-24 w-24 rounded-lg' width={256} height={256}
              />
              <div className='flex flex-col justify-center items-center text-left gap-2'>
                <h1 className='text-xl w-full  text-left font-semibold'>{el.title}</h1>
                <p className='text-sm w-full max-w-md font-extralight'>{el.description}</p>

              </div>
            </div>))
        }

      </div>

    </div>
  )
}

const ABoutUs = () => {


  return (
    <div className='w-full flex items-center justify-center py-16 px-24 relative bg-light'>

      <div className='w-full flex relative bg-secondary text-light items-center justify-center realtive h-[60vh]'>
        <img src="/abus.jpg" className='absolute left-24 w-[30vw] -top-7 h-[68vh]' alt="" />

        <div className='w-full'></div>
        <div className='flex w-full gap-2 flex-col justify-center items-end pr-24'>
          <p className='text-sm w-full '>ABOUT US</p>
          <h1 className='text-3xl w-full max-w-xl font-semibold'>It’s the bridge between service companies and consumers.</h1>
          <p className='w-full text-md font-extralight'>
            ServiceMarket.dk is a Copenhagen-based technology company known for our overview platform. Our aim is to simplify and improve everyday life for citizens in Denmark. One platform that brings together all services in an easy and controlled environment.
          </p>


        </div>

      </div>

    </div>)

}

const Journey = () => {


  const meth = [{
    title: "The Assessment Stage", text: "The point of using Lorem Ipsum is that it has a more-or-less normal letters."
  }, {
    title: "The Initialisation Stage", text: "The point of using Lorem Ipsum is that it has a more-or-less normal letters."
  }, {
    title: "The Treatment Stage", text: "The point of using Lorem Ipsum is that it has a more-or-less normal letters. "
  },]
  return (
    <div className='w-full min-h-screen flex py-24 items-center justify-between'>
      <div className='w-full px-24 flex flex-col gap-2 justify-center items-start'>
        <p className='text-sm w-full '>What Includes?</p>
        <h1 className='text-3xl w-full max-w-xl font-semibold'>The start of the journey</h1>
        <p className='w-full text-md font-extralight'>
          ServiceMarket.dk was founded in 2021 by two young entrepreneurs who saw a problem with the fragmented service industry in Denmark. There were thousands of small businesses offering services, but it was difficult for consumers to find them and know which ones to choose. They developed the idea of creating a platform that would bring all these service providers together in one place, making it easier for consumers to find what they need and get their issues resolved quickly and easily. Without having to go to many different websites, each with their own booking system.
        </p>
        <div className='w-full text-left flex flex-col justify-center items-start'>
          <h3 className='text-2xl font-semibold my-2'>Our Methodology :</h3>
          {meth.map((el, index) => (<div key={index} className='flex items-start justify-start gap-2'>
            <IoMdCheckmarkCircleOutline  height={256} width={256} className='w-10 h-10' />
            <div className='flex flex-col justify-center items-center '>
              <h2 className='text-xl text-left w-full font-semibold'>{el.title}</h2>
              <p className='p-2 max-w-sm'>{el.text}</p>

            </div>
          </div>
          ))}
        </div>
      </div>
      <img src="/spa.jpg" className='h-[80vh] w-[80%]' width={1024} height={1024} alt="" />
    </div>
  )
}

const About = () => {
  return (
    <div className='min-h-screen w-full flex flex-col justify-start items-center'>

      <Hero />
      <Values />
      <ABoutUs />
      <Journey />
      <Testimonials />
    </div>
  )
}

export default About

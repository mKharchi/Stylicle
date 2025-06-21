import React, { useEffect, useState } from 'react'
import { BiUser } from 'react-icons/bi'
import { CiMail } from 'react-icons/ci'
import { FaMailBulk } from 'react-icons/fa'
import { FaHouse, FaUser } from 'react-icons/fa6'
import { IoBookOutline } from 'react-icons/io5'
import { LuHouse } from 'react-icons/lu'
import { MdPhoneCallback } from 'react-icons/md'
import { PiNotePencilLight } from 'react-icons/pi'
import emailJs from "@emailjs/browser"
import { useLocation } from 'react-router'
import Input from '../components/Input'


const Hero = () => {

  return (
    <div className='w-full flex text-light flex-col gap-4 p-24 pt-36  items-center justify-center text-center bg-secondary '>
      <p className='text-sm'>GET IN TOUCH WITH US</p>
      <h1 className='text-4xl max-w-lg font-semibold'>We Are Ready To Assist You In 24x7</h1>

    </div>)
}

const GetInTouch = () => {


  const meth = [{
    title: "Visit Us :", text: "Mariendalsvej 50D 2 2000 Frederiksberg.", icon: <LuHouse height={20} width={20} className='w-6 h-6' />
  }, {
    title: "Drop Us :", text: "support@beautyness.com", icon: <CiMail height={20} width={20} className='w-6 h-6' />
  }, {
    title: "Call Us :", text: "Call: 1-800-123-9999", icon: <MdPhoneCallback height={20} width={20} className='w-6 h-6' />
  },]
  return (
    <div className='w-full min-h-screen gap-12 flex flex-row-reverse p-24 items-center justify-between'>
      <div className='w-full flex flex-col gap-2 justify-center items-start'>
        <p className='text-sm w-full '>Get in Touch!</p>
        <h1 className='text-3xl w-full max-w-xl font-semibold'>We are here to help you always...</h1>
        <p className='w-full text-md font-extralight'>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, buying to many desktop publishing packages.        </p>
        <div className='w-full text-left flex gap-2 flex-col justify-center items-start'>
          {meth.map((el, index) => (<div key={index} className='flex items-center justify-start gap-2'>
            {el.icon && <div className='p-2 rounded-md border '>
              {el.icon}
            </div>
            }
            <div className='flex flex-col gap-1 justify-center items-center '>

              <h2 className='text-xl text-left w-full font-semibold'>{el.title}</h2>
              <p className=' text-sm'>{el.text}</p>

            </div>
          </div>
          ))}
        </div>
      </div>
      <img src="/touch.png" className='h-[80vh] w-[80%]' width={1024} height={1024} alt="" />
    </div>
  )
}

const ContactForm = () => {

  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    note: "",
  })
  const location = useLocation();
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const serviceFromUrl = params.get("service");
    if (serviceFromUrl) {
      setForm(prev => ({ ...prev, service: serviceFromUrl }));
    }
  }, [location.search]);
  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true);
    emailJs.send("service_mnehd7q", "template_kyv9r5p",
      {
        from_name: form.name,
        to_name: "kharchi merouane",
        message: form.note,
        email: form.email,
        phone: form.phone,
      }, "AXN0NM8BSmKr1TVYt").then((data) => {
        setLoading(false)
        alert("message sent")
        setForm({
          email: "",
          name: "",
          note: "",
          phone: "",
          service: ""
        })
      })

  }

  
  return (
    <div className='w-full flex flex-col justify-center items-center p-24 gap-2 min-h-screen bg-[#FBF2E0] text-secondary'>
      <p className='text-sm  '>SCHEDULE YOUR PRESENCE</p>
      <h1 className='text-3xl  max-w-xl font-semibold'>Get in touch</h1>
      <p className='  text-md font-extralight'>
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
      </p>

      <form className='rounded-4xl shadow-2xl mt-6 px-6 py-9 w-[60%] bg-white flex flex-col items-center justify-center gap-3' onSubmit={handleSubmit}>
         {
          [{name:'name'  ,      placeholde:'Enter your name' ,  type:'text'} , 
           {name:'email'  ,     placeholde:'Enter your email' , type:'email'} , 
           {name:'phone'  ,     placeholde:'Enter your phone number ' , type:'text'} , 
           {name:'service'  ,   placeholde:'What service would you like to book' , type:'text'} , 
           {name:'note'  ,      placeholde:'Let us a note' , type:'text'} , 
           ].map((el , index)=><Input placeholder={el.placeholde} name={el.name} type={el.type} onChange={handleChange} value={form[el.name]} className="w-full" key={index}  />)
        }
        <button disabled={loading} className='hover:opacity-80 transition-all duration-300 ease-in-out mt-4 min-w-[800px] py-4 bg-dark text-bg-white text-xl rounded-lg'>{loading ? "Sending" : "Submit"}</button>
      </form>
    </div>
  )
}

const Contact = () => {
  return (
    <div className='min-h-screen overflow-hidden w-full flex flex-col justify-start items-center'>

      <Hero />
      <GetInTouch />
      <ContactForm />
    </div>
  )
}

export default Contact

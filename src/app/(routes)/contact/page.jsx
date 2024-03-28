import Image from 'next/image'
import React from 'react'

const contactPage = () => {
  return (
    <main className='h-screen w-screen flex flex-col md:flex-row'>
      <div className='h-1/2 w-full md:h-full md:w-1/2 p-5 md:p-[80px] flex flex-col justify-end'>
        <h1 className='text-4xl md:text-6xl font-heading mb-8 md:mb-20'>GET IN TOUCH</h1>
        <div className='flex flex-col md:flex-row gap-10'>
          <section className='flex-1 flex flex-col justify-between'>
            <h5 className='text-xl uppercase font-of'>inquiring about an architectural design ?</h5>
            <a href="#" className='underline'>Send us a message</a>
          </section>
          <section className='flex-1 flex flex-col gap-2'>
            <h5 className='text-xl font-of'>DETAILS</h5>
            <address>Daedlus Architexts <br /> 987 Framer St. <br /> Austin, Texas</address>
            <div className='flex flex-col'>
              <p>architect@daedalus.com</p>
              <p>(123) 456-7890</p>
            </div>
          </section>
        </div>
      </div>
      <div className='h-1/2 w-full md:h-full md:w-1/2 relative'>
        <Image className='object-cover' src='/static/contact-images/galleries.webp' alt='contact-image' fill />
      </div>
    </main>
  )
}

export default contactPage
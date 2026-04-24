import React from 'react'
import Breadcrum from '../Components/Breadcrum'
import About from '../Components/About'
import Feature from '../Components/Feature'
import Testimonial from '../Components/Testimonial'
import Faq from '../Components/Faq'

export default function AboutPage() {
  return (
    <>
      <Breadcrum title="About Us" description="Heritage Ally is your trusted destination for timeless craftsmanship and authentic products inspired by rich cultural traditions. We bring together quality, heritage, and modern convenience to offer a unique shopping experience. Our mission is to celebrate artistry, support skilled creators, and deliver products that carry stories, value, and lasting charm."/>
       <About/>
      <Feature/>
       <Testimonial/>
         <Faq/>




    </>
  )
}

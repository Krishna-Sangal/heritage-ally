import React from 'react'
import Breadcrum from "../Components/Breadcrum"
import Testimonial from '../Components/Testimonial'
export default function TestimonialPage() {
  return (
    <>
      <Breadcrum title="Our Customers Reviews " description={"“Working with this team has been an outstanding experience. Their attention to detail, professionalism, and commitment to delivering high-quality results truly set them apart.”"} />
   <Testimonial/>
    </>
  )
}

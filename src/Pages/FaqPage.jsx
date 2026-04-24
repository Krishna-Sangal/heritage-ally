import React from 'react'
import Faq from '../Components/Faq.jsx'
import Breadcrum from '../Components/Breadcrum'

export default function FaqPage() {
  return (
    <>
    <Breadcrum title="Frequently asked questions " description={"Find answers to common questions about shopping with Heritage Ally. Our FAQ section covers everything from orders and payments to shipping, returns, and product details. We aim to make your experience smooth, transparent, and hassle-free, so you can shop with confidence and ease every step of the way."}/>
    <Faq/>
    
    </>
  )
}

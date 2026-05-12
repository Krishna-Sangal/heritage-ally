import React from 'react'
import { BrowserRouter, Route, Routes, unstable_setDevServerHooks } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import AboutPage from './Pages/AboutPage.jsx'
import ShopPage from './Pages/ShopPage.jsx'
import FeaturePage from './Pages/FeaturePage.jsx'
import FaqPage from './Pages/FaqPage.jsx'
import ContactUSPage from './Pages/ContactUSPage.jsx'
import ErrorPage from './Pages/ErrorPage.jsx'
import PrivacyPolicy from './Pages/PrivacyPolicy.jsx'
import TermsAndConditonPolicy from './Pages/TermsAndConditonPolicy.jsx'
import TestimonialPage from './Pages/TestimonialPage.jsx'
import Testimonial from './Components/Testimonial.jsx'

export default function App() {
  return (
    <>   
  
        <BrowserRouter>
        <Navbar/>
        <Routes>
           <Route path='' element={<HomePage />}   />
           <Route path='/about' element={<AboutPage/>} />
           <Route path='/shop' element={<ShopPage/>} />
           <Route path='/features' element={<FeaturePage/>} />
           <Route path='/faq' element={<FaqPage/>}/>
           <Route path='/testimonial' element={<TestimonialPage/>} />
           <Route path='/contactus' element={<ContactUSPage/>}/>
           <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
          <Route path='/tc' element={<TermsAndConditonPolicy/>}/>
          



           <Route path='/*' element={<ErrorPage/>}/>
           
             </Routes>
             <Footer/>  
        </BrowserRouter>
    </>
  )
}
  
 












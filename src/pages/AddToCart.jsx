import React from 'react'
import { AddToCart1 } from '../components/AddToCart1'
import { Update } from '../components/Update'
import { FooterNav } from '../components/FooterNav'
import { BreadCrumb } from '../components/BreadCrumb'
import { CheckOut1 } from '../components/CheckOut1'

export const AddToCart = () => {
  return (
   <>
   {/* ------------ bread crumb -------------- */}
    <div><BreadCrumb end={'Cart'}/></div>
   <CheckOut1/>
   <AddToCart1/>
   <Update/>
   <FooterNav/>
   </>
  )
}

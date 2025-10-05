import React from 'react'
import { ProductDetail1 } from '../components/ProductDetail1'
import { ProductDetail2 } from '../components/ProductDetail2'
import { NewArrival } from '../components/NewArrival'
import { Update } from '../components/Update'
import { FooterNav } from '../components/FooterNav'

export const ProductDetail = () => {
  return (
    <>
    <ProductDetail1/>
    <ProductDetail2/>
    <NewArrival/>
    <Update/>
    <FooterNav/>
    </>
  )
}

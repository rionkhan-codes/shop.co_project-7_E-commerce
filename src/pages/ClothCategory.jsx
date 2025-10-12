import React from 'react'
import ClothCat1 from '../components/ClothCat1'
import { BreadCrumb } from '../components/BreadCrumb'
import { FooterNav } from '../components/FooterNav'
import { ClothCatRes } from '../components/ClothCatRes'

export const ClothCategory = () => {
  return (
    <>
    <BreadCrumb end={'Clothes Category'}/>
    <ClothCatRes/>
    <ClothCat1/>
    <FooterNav/>
    </>
  )
}

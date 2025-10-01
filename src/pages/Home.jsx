import React from 'react'
import { Banner } from '../components/Banner'
import { Brands } from '../components/Brands'
import { NewArrival } from '../components/NewArrival'
import { TopSelling } from '../components/TopSelling'
import { Update } from '../components/Update'
import { FooterNav } from '../components/FooterNav'
import { Browse } from '../components/Browse'

export const Home = () => {
  return (
    <>
    <Banner/>
    <Brands/>
    <NewArrival/>
    <TopSelling/>
    <Browse/>
    <Update/>
    <FooterNav/>
    </>
  )
}

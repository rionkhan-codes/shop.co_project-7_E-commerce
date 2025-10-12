import React from 'react'
import { Category1 } from '../components/Category1'
import { BreadCrumb } from '../components/BreadCrumb'
import { CategoryRes } from '../components/CategoryRes'
import { Category2 } from '../components/Category2'
import { FooterNav } from '../components/FooterNav'
import { Category2Res } from '../components/Category2Res'

export const Category = () => {
  return (
    <>
    <BreadCrumb end={'Smartphones'}/>
    <CategoryRes/>
    <Category2Res/>
    <div className='container'>
      <div className='flex '>
        <Category1/>
        <Category2/>
      </div>
    </div>
    <div className='mt-[70px]'>
      <FooterNav/>
    </div>
    </>
  )
}

import React from 'react'
import { Link } from 'react-router'
import { Register1 } from '../components/Register1'
import { FooterNav } from '../components/FooterNav'
import { BreadCrumb } from '../components/BreadCrumb'

export const Register = () => {
  return (
    <>
    <BreadCrumb end={'Register'}/>
    <Register1/>
    <FooterNav/>
    </>
  )
}

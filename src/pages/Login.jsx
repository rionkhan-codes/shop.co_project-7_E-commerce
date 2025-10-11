import React from 'react'
import { Link } from 'react-router'
import { FooterNav } from '../components/FooterNav'
import { Login1 } from '../components/Login1'
import { BreadCrumb } from '../components/BreadCrumb'

export const Login = () => {
  return (
    <>
    <BreadCrumb end={'Login'}/>
    <Login1/>
    <FooterNav/>
    </>
  )
}

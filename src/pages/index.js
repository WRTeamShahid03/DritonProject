'use client'
import React from 'react'
import { Toaster } from 'react-hot-toast'
import Home from 'src/@core/components/Home/Home'

const Index = () => {
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Home />
    </>
  )
}

export default Index

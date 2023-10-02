'use client'
import React from 'react'
import Home from 'src/@core/components/Home/Home'

const index = () => {
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

export default index

import React from 'react'
import Home from 'src/@core/components/Home/Home'
import BlankLayout from 'src/@core/layouts/BlankLayout'

const test = () => {
  return (
    <>
    <Home/>
    </>
  )
}
test.getLayout = page => <BlankLayout>{page}</BlankLayout>
test.guestGuard = true

export default test
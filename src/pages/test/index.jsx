import React from 'react'
import BlankLayout from 'src/@core/layouts/BlankLayout'

const test = () => {
  return (
    <div>test</div>
  )
}
test.getLayout = page => <BlankLayout>{page}</BlankLayout>
test.guestGuard = true

export default test
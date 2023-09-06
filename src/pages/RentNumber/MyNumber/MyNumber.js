import { Breadcrumbs, Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import MyNumTable from './MyNumTable'
import FAQsModal from 'src/pages/smscodes/FAQsModal'

const MyNumber = () => {
  return (
    <>
     <Breadcrumbs aria-label="breadcrumb" sx={{
      margin: "22px 0px",fontSize: "22px"
    }}>
                <Link underline="hover" color="info" href="/">
                    My Numbers
                </Link>
              <FAQsModal/>
            </Breadcrumbs>

            <MyNumTable/>
            
    </>
  )
}

export default MyNumber

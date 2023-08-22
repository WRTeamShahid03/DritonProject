import { Breadcrumbs, Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import RentNumTable from './RequestTable'


const RentNumber = () => {
  return (
    <>
    <Breadcrumbs aria-label="breadcrumb" sx={{
      margin: "22px 0px",fontSize: "22px"
    }}>
                <Link underline="hover" color="info" href="/">
                  Add Tools Request
                </Link>
            </Breadcrumbs>
            <RentNumTable/>
    </>
  )
}

export default RentNumber

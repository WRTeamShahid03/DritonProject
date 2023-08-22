import { Breadcrumbs, Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import RentNumTable from './RentNumTable'


const RentNumber = () => {
  return (
    <>
    <Breadcrumbs aria-label="breadcrumb" sx={{
      margin: "22px 0px",fontSize: "22px"
    }}>
                <Link underline="hover" color="info" href="/">
                    Rent Number
                </Link>
                <Button size='small' variant='contained' color='primary' >FAQs</Button>
            </Breadcrumbs>
            <RentNumTable/>
    </>
  )
}

export default RentNumber

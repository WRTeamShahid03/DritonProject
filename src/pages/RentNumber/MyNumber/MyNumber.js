import { Breadcrumbs, Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import MyNumTable from './MyNumTable'

const MyNumber = () => {
  return (
    <>
     <Breadcrumbs aria-label="breadcrumb" sx={{
      margin: "22px 0px",fontSize: "22px"
    }}>
                <Link underline="hover" color="info" href="/">
                    My Numbers
                </Link>
                <Button size='small' variant='contained' color='primary' >FAQs</Button>
            </Breadcrumbs>

            <MyNumTable/>
            
    </>
  )
}

export default MyNumber

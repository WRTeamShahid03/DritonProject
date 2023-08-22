import React from 'react'
import Services from './Services'
import { Breadcrumbs, Button } from '@mui/material'
import Link from 'next/link'
import Typography from '@mui/material/Typography';

const index = () => {
  return (
    <>
    <Breadcrumbs aria-label="breadcrumb" sx={{
      margin: "22px 0px",fontSize: "22px"
    }}>
                <Link underline="hover" color="info" href="/">
                    SMS Services
                </Link>
                <Button size='small' variant='contained' color='info' >Rent Number</Button>
                <Button size='small' variant='contained' color='primary' >FAQs</Button>
            </Breadcrumbs>
      <Services/>
    </>
  )
}

export default index

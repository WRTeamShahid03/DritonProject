import React from 'react'
import Services from './Services'
import { Breadcrumbs, Button, Typography } from '@mui/material'
import Link from 'next/link'

const index = () => {
  return (
    <>
    <Breadcrumbs aria-label="breadcrumb" sx={{
      margin: "22px 0px",fontSize: "22px"
    }}>
                <Typography sx={{ fontSize: "24px", fontWeight: "500", pr: "1rem" }}> SMS Services</Typography>
                <Button size='small' variant='contained' color='info' >Rent Number</Button>
                <Button size='small' variant='contained' color='primary' >FAQs</Button>
            </Breadcrumbs>
      <Services/>
    </>
  )
}

export default index

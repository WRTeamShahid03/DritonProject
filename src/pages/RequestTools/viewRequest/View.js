import { Breadcrumbs, Button, Card, CardHeader, Grid, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import OrderTable from './ViewTable'
import { IconButton } from '@mui/material'
import { Icon } from '@iconify/react'
import ViewTable from './ViewTable'

const OrderRdp = () => {
  return (
    <>
      <Breadcrumbs aria-label="breadcrumb" sx={{
        margin: "22px 0px", fontSize: "22px"
      }}>
        <Link underline="hover" color="info" href="/">
        Tools Requests
        </Link>
      </Breadcrumbs>
      
      <ViewTable/>

    </>
  )
}

export default OrderRdp

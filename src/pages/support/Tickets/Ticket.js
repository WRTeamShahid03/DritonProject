import { Breadcrumbs, Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import RentNumTable from './TicketTable'
import TicketTable from './TicketTable'


const RentNumber = () => {
  return (
    <>
    <Breadcrumbs aria-label="breadcrumb" sx={{
      margin: "22px 0px",fontSize: "22px"
    }}>
                <Link underline="hover" color="info" href="/">
                 Tickets
                </Link>
            </Breadcrumbs>
            <TicketTable/>
    </>
  )
}

export default RentNumber

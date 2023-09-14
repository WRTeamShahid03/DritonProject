import React from 'react'
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Breadcrumbs, Link } from '@mui/material'
import PendingBTC from './PendingBTC';

const index = () => {
  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
                <Link  color="inherit" href="/">
                Deposit Pending
                </Link>
                <Link
                    color="inherit"
                    href="/material-ui/getting-started/installation/"
                >
                </Link>
                <Typography color="text.primary"></Typography>
            </Breadcrumbs>

      <Card >
        <PendingBTC />

      </Card>
    </>
  )
}

export default index

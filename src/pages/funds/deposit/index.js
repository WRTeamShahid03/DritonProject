import React from 'react'
import Typography from '@mui/material/Typography';

import { Breadcrumbs, Link } from '@mui/material'
import Deposit from './Deposit';

const index = () => {
  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
                <Link  color="inherit" href="/">
                Deposit
                </Link>
                <Link
                    color="inherit"
                    href="/material-ui/getting-started/installation/"
                >
                </Link>
                <Typography color="text.primary"></Typography>
            </Breadcrumbs>
        <Deposit />
    </>
  )
}

export default index

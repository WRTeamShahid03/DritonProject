import React from 'react'
import Typography from '@mui/material/Typography';
import { Breadcrumbs, Link } from '@mui/material'
import PendingCrypto from './PendingCrypto';

const index = () => {
  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                Other Crypto Payments

                </Link>
                <Link
                    color="inherit"
                    href="/material-ui/getting-started/installation/"
                >
                </Link>
                <Typography color="text.primary"></Typography>
            </Breadcrumbs>

        <PendingCrypto />
    </>
  )
}

export default index

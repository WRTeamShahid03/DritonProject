import React from 'react'
import Typography from '@mui/material/Typography';
import { Breadcrumbs, Link } from '@mui/material'
import History from './History';

const index = () => {
  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                Deposit History

                </Link>
                <Link
                    underline="hover"
                    color="inherit"
                    href="/material-ui/getting-started/installation/"
                >
                </Link>
                <Typography color="text.primary"></Typography>
            </Breadcrumbs>

        <History />
    </>
  )
}

export default index

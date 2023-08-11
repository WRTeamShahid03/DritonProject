import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import TableBasic from 'src/views/table/mui/TableBasic'
import PageHeader from 'src/@core/components/page-header'
import { Breadcrumbs, Link } from '@mui/material'
const index = () => {
    return (
        <>
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                Most Solded

                </Link>
                <Link
                    underline="hover"
                    color="inherit"
                    href="/material-ui/getting-started/installation/"
                >
                </Link>
                <Typography color="text.primary"></Typography>
            </Breadcrumbs>
            <Grid item xs={12}>
                <Card>
                    <CardHeader title=' Most Solded Last 24H' />
                    <TableBasic />
                </Card>
            </Grid>
        </>
    )
}

export default index

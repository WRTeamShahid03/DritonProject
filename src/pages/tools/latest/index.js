import React from 'react'
import Breadcrum from 'src/pages/components/Breadcrum'
import { Card, CardHeader, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Link from 'next/link'
import ActivityTable from './ActivityTable'
import MostSoldedTable from './MostSoldedTable'

const Index = () => {
    return (
        <>
            <Breadcrum title="Latest Tools Info" />

            <Grid container spacing={6}>
                <Grid item xs={12} lg={8}>
                    <ActivityTable/>
                </Grid>

                <Grid item xs={12} lg={4}>
                    <MostSoldedTable/>
                </Grid>
            </Grid>


        </>
    )
}

export default Index

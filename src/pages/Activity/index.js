import React from 'react'
import Breadcrum from '../components/Breadcrum'
import { Card, CardHeader, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Link from 'next/link'
import ActivityTable from './ActivityTable'
import MostSoldedTable from './MostSoldedTable'

const index = () => {
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

            {/* <Card sx={{ p:"26px" }}>

                        <Typography  sx={{ textAlign: "center",fontSize: "22px" }}>Store Stock</Typography>

                        <hr style={{ opacity: '0.3', margin: "20px 0" }} />

                        <Box sx={{ width: "350px", display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }} className="profileCard">
                            <Grid item xs={3} lg={12} className='depositeGrid' sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: "10px" }} >
                                <Box sx={{ display: "flex", flexDirection: "column", gap: "4px", alignItems: "center", justifyContent: "center", flexWrap: "wrap" }} className="profileFooter">
                                    <span style={{ color: "#b9b9c3", fontSize: "1rem", fontWeight: "600" }}>Accounts</span>
                                    <span style={{ color: "#615d71", fontSize: "1.5rem", fontWeight: "500" }} >144968</span>
                                </Box>

                                <Box sx={{ display: "flex", flexDirection: "column", gap: "4px", alignItems: "center", justifyContent: "center" }} className="profileFooter">
                                    <span style={{ color: "#b9b9c3", fontSize: "1rem", fontWeight: "600" }}>Others</span>
                                    <span style={{ color: "#615d71", fontSize: "1.5rem", fontWeight: "500" }} >6512</span>
                                </Box>

                                <Box sx={{ display: "flex", flexDirection: "column", gap: "4px", alignItems: "center", justifyContent: "center" }} className="profileFooter">
                                    <span style={{ color: "#b9b9c3", fontSize: "1rem", fontWeight: "600" }}>Total</span>
                                    <span style={{ color: "#615d71", fontSize: "1.5rem", fontWeight: "500" }} >151480</span>
                                </Box>
                            </Grid>
                        </Box>
                    </Card> */}


        </>
    )
}

export default index

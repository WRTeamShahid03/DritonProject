import React from 'react'
import Breadcrum from '../components/Breadcrum'
import { Card, CardHeader, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Link from 'next/link'

const index = () => {
    return (
        <>
            <Breadcrum title="Latest Tools Info" />

            <Grid container spacing={6}>
                <Grid item xs={12} lg={8}>
                    <Card sx={{ pb: "16px" }}>
                        <CardHeader title="24H Latest Tools - Get Notification on Telegram" />

                        <Box sx={{ border: '1px solid rgba(34,41,47,.125)', borderRadius: "5px", m: "0 22px", }}>
                            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: "12px 22px", }}>

                                <Typography sx={{ fontSize: "16px", fontWeight: '500' }}>Stock of
                                    <Link href="tools/dating/EliteSingles(PAID)" variant='span' style={{ textDecoration: "none", color: "#2fc76f", fontWeight: '800',cursor:"pointer" }}> EliteSingles(PAID) </Link>
                                    has been added in
                                    <Typography variant='span' sx={{ color: "#7367f0", fontWeight: '800' }}>  Dating  </Typography>
                                    section.
                                </Typography>

                                <Typography variant='span' sx={{ color: "white", backgroundColor: '#7367f0', p: "0.3rem 0.5rem", borderRadius: "0.358rem" }}>11</Typography>

                            </Box>

                            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: "12px 22px", borderTop: '1px solid rgba(34,41,47,.125)' }}>

                                <Typography sx={{ fontSize: "16px", fontWeight: '500' }}>Stock of
                                    <Link href="tools/dating/EliteSingles(PAID)" variant='span' style={{ textDecoration: "none", color: "#2fc76f", fontWeight: '800',cursor:"pointer" }}> IPVanishVPN  </Link>
                                    has been added in
                                    <Typography variant='span' sx={{ color: "#7367f0", fontWeight: '800' }}>  VPN  </Typography>
                                    section.
                                </Typography>

                                <Typography variant='span' sx={{ color: "white", backgroundColor: '#7367f0', p: "0.3rem 0.5rem", borderRadius: "0.358rem" }}>123</Typography>

                            </Box>

                            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: "12px 22px", borderTop: '1px solid rgba(34,41,47,.125)' }}>

                                <Typography sx={{ fontSize: "16px", fontWeight: '500' }}>Stock of
                                    <Link href="tools/dating/EliteSingles(PAID)" variant='span' style={{ textDecoration: "none", color: "#2fc76f", fontWeight: '800',cursor:"pointer" }}> EliteSingles(PAID) </Link>
                                    has been added in
                                    <Typography variant='span' sx={{ color: "#7367f0", fontWeight: '800' }}>  Dating  </Typography>
                                    section.
                                </Typography>

                                <Typography variant='span' sx={{ color: "white", backgroundColor: '#7367f0', p: "0.3rem 0.5rem", borderRadius: "0.358rem" }}>412</Typography>

                            </Box>
                        </Box>
                    </Card>
                </Grid>

                <Grid item xs={12} lg={4}>
                    <Card sx={{ p:"26px" }}>

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
                    </Card>
                </Grid>
            </Grid>



        </>
    )
}

export default index

import React from 'react'
import Breadcrum from '../components/Breadcrum'
import { Card, CardHeader, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Referrals from './Referrals'
import Commissions from './Commissions'

const index = () => {


    return (
        <>
            <Breadcrum title="Referal" />

            <Card>
                <CardHeader title="Referal" />
                <Box sx={{ p: '0 200px' }} className="referalBox">

                    <Typography sx={{ color: "#7367f0", fontSize: "30px", fontWeight: "500", textAlign: "center" }}>Invite Friends</Typography>

                    <Typography sx={{ color: "#7367f0", fontSize: "20px", fontWeight: "500", textAlign: "center", mt: "12px" }}>Earn 5% commission every time your friends make a deposit on Strongtools.
                        Use your unique link to invite your friends over message or email.
                    </Typography>

                    <Typography color="success" sx={{ color: "#28c76f", fontSize: "24px", fontWeight: "500", textAlign: "center", mt: "12px", pb: "20px" }}>https://strongtools.ga/auth/register?r=SQJPZURF</Typography>

                </Box>
            </Card>

            <Grid container spacing={6} sx={{ mt: "20px" }}>

                <Grid item xs={12} lg={6}>

                    <Referrals />

                </Grid>

                <Grid item xs={12} lg={6}>

                    <Commissions />

                </Grid>

            </Grid>

        </>
    )
}

export default index

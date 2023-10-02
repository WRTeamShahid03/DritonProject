import React, { useState } from 'react'
import Breadcrum from 'src/pages/components/Breadcrum';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography';
import { CardHeader, Grid } from '@mui/material';
import Purchase from './Purchase';

import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Link from 'next/link'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const index = () => {
    return (
        <>
             <Breadcrum title="Purchase" />

            <Card className="purchaseCard" sx={{ p: '22px' }}>
            <Typography sx={{ fontSize: '20px', fontWeight: '600' }} >Purchase Tools</Typography>

                <Accordion sx={{ borderRadius: "5px", boxShadow: "0 6px 15px -7px rgba(234,84,85,.4)" }}>
                    <AccordionSummary
                        id='panel-header-1'
                        aria-controls='panel-content-1'
                        expandIcon={<Icon fontSize='1.25rem' icon='tabler:chevron-down' />}
                    >
                        <Typography sx={{ color: '#ea5455!important' }} className="dropDeatails"> IMPORTANT</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{
                            color: '#ea5455!important',
                            p: "8px", backgroundColor: "rgba(234,84,85,.12)!important;", my: "8px", borderRadius: "5px", boxShadow: "0 6px 15px -7px rgba(234,84,85,.4)"
                        }} className="dropDeatails">
                            1 - We suggest to use Private Proxy/Socsk5/VPN Residential ISP for clean ip, if you follow our suggestions you will have lower chance to block the accounts.
                        </Typography>
                        <Typography sx={{
                            color: '#ea5455!important',
                            p: "8px", backgroundColor: "rgba(234,84,85,.12)!important;", my: "8px", borderRadius: "5px", boxShadow: "0 6px 15px -7px rgba(234,84,85,.4)"
                        }} className="dropDeatails">
                            2 - Please use REPORT button within 10 minutes and complain if tool is not working, otherwise after EXPIRES you have no rights to complain.
                        </Typography>
                        <Typography sx={{
                            color: '#ea5455!important',
                            p: "8px", backgroundColor: "rgba(234,84,85,.12)!important;", my: "8px", borderRadius: "5px", boxShadow: "0 6px 15px -7px rgba(234,84,85,.4)"
                        }} className="dropDeatails">
                            3 - If you have bought Dating account and its not paid as it was described, even if you do not complain you will get refund for that, we are here to protect buyers and sellers from tricking each other. Any of you getting tricked it's not on our best interest!
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <CardContent>

                    <div className="verify">
                        <Typography variant='h3' className='verifyH3'>
                            Bypass & Verification Method Steps:
                        </Typography>
                        <Link href="/pof/verification"> <Button variant='contained' sx={{
                            px: '8',
                            mt: "4px"
                        }}>POF VARIFICATION</Button> </Link>
                    </div>

                    <span className='purchItems'>
                        Your Purchased Items : <span className='zero'>0</span>
                    </span>

                </CardContent>

                <Purchase />

            </Card>
        </>
    )
}

export default index

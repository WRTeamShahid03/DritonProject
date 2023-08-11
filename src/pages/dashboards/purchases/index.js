import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography';
import PageHeader from 'src/@core/components/page-header';
import { CardHeader, Grid } from '@mui/material';
import AnalyticsProject from '../analytics/analystics';
import { Box } from '@mui/system';

import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import { Breadcrumbs, Link } from '@mui/material'

const index = () => {
    return (
        <>
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                    Purchased Tools

                </Link>
                <Link
                    underline="hover"
                    color="inherit"
                    href="/material-ui/getting-started/installation/"
                >
                </Link>
                <Typography color="text.primary"></Typography>
            </Breadcrumbs>

            <Card className="purchaseCard">
                <CardHeader title='Purchased Tools' />

                <Accordion sx={{borderRadius: "5px",boxShadow: "0 6px 15px -7px rgba(234,84,85,.4)" }}>
                    <AccordionSummary
                        id='panel-header-1'
                        aria-controls='panel-content-1'
                        expandIcon={<Icon fontSize='1.25rem' icon='tabler:chevron-down' />}
                    >
                         <Typography sx={{ color: '#ea5455!important' }}  className="dropDeatails"> IMPORTANT</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{ color: '#ea5455!important',
                            p: "8px",backgroundColor: "rgba(234,84,85,.12)!important;",my: "8px",borderRadius: "5px",boxShadow: "0 6px 15px -7px rgba(234,84,85,.4)" }}  className="dropDeatails">
                        1 - We suggest to use Private Proxy/Socsk5/VPN Residential ISP for clean ip, if you follow our suggestions you will have lower chance to block the accounts.
                        </Typography>
                        <Typography sx={{ color: '#ea5455!important' ,
                            p: "8px",backgroundColor: "rgba(234,84,85,.12)!important;",my: "8px",borderRadius: "5px",boxShadow: "0 6px 15px -7px rgba(234,84,85,.4)"}} className="dropDeatails">
                        2 - Please use REPORT button within 10 minutes and complain if tool is not working, otherwise after EXPIRES you have no rights to complain.
                        </Typography>
                        <Typography sx={{ color: '#ea5455!important',
                            p: "8px",backgroundColor: "rgba(234,84,85,.12)!important;",my: "8px",borderRadius: "5px",boxShadow: "0 6px 15px -7px rgba(234,84,85,.4)" }} className="dropDeatails">
                        3 - If you have bought Dating account and its not paid as it was described, even if you do not complain you will get refund for that, we are here to protect buyers and sellers from tricking each other. Any of you getting tricked it's not on our best interest!
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <CardContent>

                <div className="verify">
                    <Typography variant='h3' className='verifyH3'>
                        Bypass & Verification Method Steps:
                    </Typography>
                    <Button variant='contained' sx={{
                        px: '8',
                        mt: "4px"
                    }}>POF VARIFICATION</Button>
                </div>

                <span className='purchItems'>
                    Your Purchased Items : <span className='zero'>0</span>
                </span>

                    </CardContent>
                <AnalyticsProject />
            </Card>
        </>
    )
}

export default index

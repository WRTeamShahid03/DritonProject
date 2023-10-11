import React, { useState } from 'react'
import { Box } from '@mui/system'
import Breadcrum from 'src/pages/components/Breadcrum'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
// ** Icon Imports
import Icon from 'src/@core/components/icon'
import { Button, Card, Grid, Typography } from '@mui/material'
import CustomTextField from 'src/@core/components/mui/text-field'
import Payments from './Payment'

const data = [
    {
        value: 'TRC20',
        title: 'USDT',
        title2: 'TRC20',
        isSelected: true,
        content: 'Instant Payout - 1 Confirmation Needed.'
    },
    {
        value: 'perfectMoney',
        title: 'PerfectMoney',
        title2: 'USDT',
        content: 'Instant Payout - No Confirmation Needed.'
    },
]

const Index = () => {

    const initialSelected = data.filter(item => item.isSelected)[data.filter(item => item.isSelected).length - 1].value

    // ** State
    const [selected, setSelected] = useState(initialSelected)

    const handleChange = prop => {
        if (typeof prop === 'string') {
            setSelected(prop)
        } else {
            setSelected(prop.target.value)
        }
    }
    return (
        <>
            <Breadcrum title='Settings' />
            <Box>
                <Accordion sx={{ borderRadius: "5px", boxShadow: "0 6px 15px -7px rgba(234,84,85,.4)" }}>
                    <AccordionSummary
                        id='panel-header-1'
                        aria-controls='panel-content-1'
                        expandIcon={<Icon fontSize='1.25rem' icon='tabler:chevron-down' />}
                    >
                        <Typography sx={{ color: '#ff9f43' }} className="dropDeatails"> IMPORTANT</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{
                            color: '#ff9f43',
                            p: "8px", backgroundColor: "rgba(255,159,67,.12)!important;", my: "8px", borderRadius: "5px", boxShadow: "0 6px 15px -7px rgba(234,84,85,.4)"
                        }} className="dropDeatails">
                            We do not SUPPORT BTC anymore for Payouts. Please use USDT TRC20 or PerfectMoney.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Card sx={{ p: '22px' }}>
                    <Typography sx={{ fontSize: '20px', fontWeight: '600' }} >Settings</Typography>

                    <Box sx={{ mt: '12px', display: 'flex', justifyContent: 'space-between', flexDirection: 'column', gap: '20px' }}>


                        <Grid item xs={12}>
                            <CustomTextField
                                fullWidth
                                type='text'
                                label='USDT'
                                placeholder='USDT Address'
                                helperText='Enter USDT (TRC20) Address'
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <CustomTextField
                                fullWidth
                                type='text'
                                label='Perfectmoney'
                                placeholder='PerfectMoney USD Account'
                                helperText='Enter your PerfectMoney USD Account - Starts with Us'
                            />
                        </Grid>
                    </Box>

                    <Box sx={{ mt: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

                        <Typography sx={{ fontSize: '20px', fontWeight: '600' }} >Payout Method</Typography>

                        <Grid container spacing={4} sx={{ mt: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            {data.map((item, index) => (
                                <Payments
                                    key={index}
                                    data={data[index]}
                                    selected={selected}
                                    title2={data[index].title2}
                                    name='custom-radios-icons'
                                    handleChange={handleChange}
                                    gridProps={{ sm: 4, xs: 12 }}
                                />
                            ))}
                        </Grid>

                    </Box>

                    <Box>

                        <Grid item xs={12} sx={{ mt: '20px', width: '100%' }}>
                            <CustomTextField
                                fullWidth
                                type='password'
                                label='Second Password'
                            />
                        </Grid>

                        <Button variant='contained' fullWidth color='primary' sx={{ mt: '12px' }}>Submit</Button>
                    </Box>

                </Card>


                <Card sx={{ p: '22px' ,mt: '30px'}}>
                    <Accordion sx={{ borderRadius: "5px", boxShadow: "0 6px 15px -7px", backgroundColor: "rgba(40,199,111,.12)", mb: '30px' }}>
                        <AccordionSummary
                            id='panel-header-1'
                            aria-controls='panel-content-1'
                            expandIcon={<Icon fontSize='1.25rem' icon='tabler:chevron-down' />}
                        >
                            <Typography sx={{ color: '#28c76f' }} className="dropDeatails"> INSTANT WITHDRAW</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography sx={{
                                color: ' #28c76f',
                                p: "8px", backgroundColor: "rgba(40,199,111,.12)", my: "8px", borderRadius: "5px", boxShadow: "0 6px 15px -7px rgba(234,84,85,.4)"
                            }} className="dropDeatails">
                                Withdraw your earnings instantly before payment date with 5% processing fee. Can be used only 2 times a month. Required at least $100.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Box>

                        <Typography sx={{ fontSize: '20px', fontWeight: '600', mb: '20px' }} >Instant Withdraw</Typography>
                        <Button variant='contained' fullWidth color='success'>
                            Withdraw Now
                        </Button>

                        <Typography sx={{ fontSize: '18px', fontWeight: '400', mt: '20px' }} > <Typography variant='span' color='orange'>100$ </Typography> Remains to Reach Instant Withdraw</Typography>
                    </Box>
                </Card>
            </Box>
        </>
    )
}

export default Index

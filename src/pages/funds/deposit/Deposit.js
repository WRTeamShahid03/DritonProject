// ** React Imports
import { React, useState } from 'react'

// ** MUI Imports

import { Button, Card, CardHeader, Grid } from '@mui/material'
import Tab from '@mui/material/Tab'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import bitcoinLogo from '../../../../public/images/Bitcoin.svg.png'
import litecoinLogo from '../../../../public/images/Litecoin.png'
import tronBG from '../../../../public/images/tronBG.png'
import CustomTextField from 'src/@core/components/mui/text-field'
import Link from 'next/link'


const Deposit = () => {

    // ** State
    const [value, setValue] = useState('1')

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }


    return (
        <>
            <Card>
                <CardHeader title="Add Money" />

                <Grid item sm={12} md={6} >
                    <TabContext value={value}>
                        <TabList onChange={handleChange} aria-label='nav tabs example'>
                            <Tab value='1' component='a' label='Bitcoin' href='/drafts' onClick={e => e.preventDefault()} />
                            <Tab value='2' component='a' label='Litecoin' href='/trash' onClick={e => e.preventDefault()} />
                            <Tab value='3' component='a' label='PerfectMoney' href='/spam' onClick={e => e.preventDefault()} />
                            <Tab value='4' component='a' label='Tether USDT' href='/spam' onClick={e => e.preventDefault()} />
                        </TabList>
                        <TabPanel value='1'>
                            <Grid container spacing={6} >
                                <Grid item sm={12} lg={4} >
                                    <Card sx={{ position: 'relative', display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", boxShadow: 'none' }}>
                                        <CardMedia sx={{ height: '150px', width: "100%", backgroundColor: "#f7931b" }} />
                                        <Avatar
                                            alt='BitCoin'
                                            src='/images/Bitcoin.svg.png'
                                            sx={{
                                                width: 100,
                                                height: 100,
                                                // left: '1.313rem',
                                                top: '6.28125rem',
                                                position: 'absolute',
                                                border: theme => `8px solid ${theme.palette.common.white}`
                                            }}
                                        />
                                        <CardContent>
                                            <Box
                                                sx={{
                                                    mt: 5.75,
                                                    mb: 8.75,
                                                    display: 'flex',
                                                    flexWrap: 'wrap',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                }}
                                            >
                                                <Box sx={{ mr: 2, mb: 1, display: 'flex', flexDirection: 'column', mt: "30px", alignItems: "center", justifyContent: 'center', }}>

                                                    <Typography variant='h5' sx={{ fontFamily: "inherit", fontWeight: "500", color: '#5e5873', fontSize: "1.5rem", mb: "0.5rem" }}>Bitcoin</Typography>

                                                    <Typography variant='body2' sx={{ color: "#b9b9c3!important", fontSize: "16px", fontWeight: "500" }}>Minimum Deposit</Typography>
                                                    <Typography variant='span' sx={{
                                                        backgroundColor: "rgba(255,159,67,.12)",
                                                        color: "#ff9f43!important",
                                                        fontSize: "13px",
                                                        fontWeight: "bold",
                                                        mt: "12px",
                                                        width: "62px",
                                                        p: "4px 6px",
                                                        borderRadius: "10px",
                                                    }}>
                                                        $ 20.00
                                                    </Typography>
                                                </Box>
                                            </Box>

                                            <hr style={{ opacity: '0.3', margin: "20px 0" }} />

                                            <Box sx={{ gap: 2, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <Grid item xs={3} lg={12} className='depositeGrid' sx={{ display: "flex", mt: "10px" }} >
                                                    <Button color="warning" size='small' sx={{ border: '1px solid #f7931b', fontSize: "16px" }}>$</Button>
                                                    <CustomTextField defaultValue='' placeholder="Amount to Deposit" id='custom-select' fullWidth  >

                                                    </CustomTextField>
                                                    <Button color="warning" variant='contained' sx={{ borderRadius: "5px", fontSize: "16px" }}>Deposit</Button>
                                                </Grid>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Grid>

                                <Grid item sm={12} lg={4} >
                                    <Box sx={{ border: "2px solid #e1e5ea", borderRadius: "10px" }}>

                                        <Box sx={{ display: "flex", justifyContent: "space-around", p: "12px 0" }}>
                                            <span ><img src={bitcoinLogo.src} alt="bitCoin" style={{
                                                width: "50px"
                                            }} /></span>
                                            <Box sx={{}}>
                                                <Link href="https://coinmarketcap.com/currencies/bitcoin/?utm_medium=widget&utm_campaign=cmcwidget&utm_source=strongtools.ga&utm_content=bitcoin" style={{ textDecoration: "none" }} target='_blank'> <span style={{
                                                    fontSize: "18px",
                                                    color: "rgb(16, 112, 224)",
                                                    display: "flex",
                                                    flexDirection: "column",

                                                }}>Bitcoin (BTC)</span></Link>
                                                <span style={{ fontSize: "20px", fontWeight: "500" }}>26,015.31 USD <span style={{
                                                    color: "#d94040"
                                                }}> (-0.03%)</span></span>
                                            </Box>

                                        </Box>

                                        <Box sx={{ display: "flex", justifyContent: 'space-around', borderTop: "1px solid #e1e5ea" }}>
                                            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", borderRight: '1px solid #e1e5ea', p: "12px", justifyContent: "center" }}>
                                                <span>Rank</span>
                                                <span style={{ fontSize: "18px" }}>1</span>
                                            </Box>
                                            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", borderRight: '1px solid #e1e5ea', p: "12px", justifyContent: "center" }}>
                                                <span>MARKET CAP</span>
                                                <span style={{ fontSize: "18px" }}>$504.36 B USD</span>
                                            </Box>
                                            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", p: "12px", justifyContent: "center" }}>
                                                <span>VOLUME</span>
                                                <span style={{ fontSize: "18px" }}>$8.53 B USD</span>
                                            </Box>
                                        </Box>
                                        <Box sx={{ p: "12px 0", textAlign: "center", borderTop: "1px solid #e1e5ea" }}>
                                            <Link href="https://coinmarketcap.com/?utm_medium=widget&utm_campaign=cmcwidget&utm_source=strongtools.ga&utm_content=bitcoin" style={{ textDecoration: "none" }} target='_blank'>

                                                <Typography sx={{ color: "rgb(16, 112, 224)", fontSize: '14px' }}>Powered by CoinMarketCap</Typography>
                                            </Link>
                                        </Box>
                                    </Box>
                                    <hr style={{ opacity: '0.3', margin: "20px 0" }} />

                                    <Card sx={{ border: "1px solid rgb(247 147 27)" }}>
                                        <CardHeader title="Bonus on Deposit" />
                                        <CardContent sx={{ color: "rgb(247 147 27)", p: "0px 22px", fontSize: "20px" }}>On Every Deposit 50$+ you will get 10% BONUS</CardContent>
                                    </Card>
                                </Grid>

                                <Grid item sm={12} lg={4}>
                                    <Card sx={{ boxShadow: "none" }}>
                                        <Typography sx={{ color: "#ea545a !important", p: "0px 22px", fontSize: "18px", fontWeight: "500", fontFamily: "inherit" }}>Minimum Deposit</Typography>
                                        <CardContent sx={{ p: "0px 22px", fontSize: "16px", mt: "10px" }}>Minimum Deposit Allowed for BTC is: 20.00$</CardContent>
                                    </Card>
                                    <Card sx={{ boxShadow: "none" }}>
                                        <Typography sx={{ color: "#ea545a !important", p: "0px 22px", fontSize: "18px", fontWeight: "500", fontFamily: "inherit" }}>Confirmation</Typography>
                                        <CardContent sx={{ p: "0px 22px", fontSize: "16px", mt: "10px" }}>Transaction need 1 confirmation to reflect on your balance. Money will be added automatically.</CardContent>
                                    </Card>
                                    <Card sx={{ boxShadow: "none" }}>
                                        <Typography sx={{ color: "#ea545a !important", p: "0px 22px", fontSize: "18px", fontWeight: "500", fontFamily: "inherit" }}>Minimum Deposit</Typography>
                                        <CardContent sx={{ p: "0px 22px", fontSize: "16px", mt: "10px" }}>Sometime after confirmation you may get 0$, don't panic just open ticket and admin will solve that.</CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </TabPanel>



                        <TabPanel value='2'>
                            <Grid container spacing={6} >
                                <Grid item sm={12} lg={4} >
                                    <Card sx={{ position: 'relative', display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", boxShadow: 'none' }}>
                                        <CardMedia sx={{ height: '150px', width: "100%", backgroundColor: "#315d9e" }} />
                                        <Avatar
                                            alt='LiteCoin'
                                            src='/images/Litecoin.png'
                                            sx={{
                                                width: 100,
                                                height: 100,
                                                // left: '1.313rem',
                                                top: '6.28125rem',
                                                position: 'absolute',
                                                border: theme => `8px solid ${theme.palette.common.white}`
                                            }}
                                        />
                                        <CardContent>
                                            <Box
                                                sx={{
                                                    mt: 5.75,
                                                    mb: 8.75,
                                                    display: 'flex',
                                                    flexWrap: 'wrap',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                }}
                                            >
                                                <Box sx={{ mr: 2, mb: 1, display: 'flex', flexDirection: 'column', mt: "30px", alignItems: "center", justifyContent: 'center', }}>

                                                    <Typography variant='h5' sx={{ fontFamily: "inherit", fontWeight: "500", color: '#5e5873', fontSize: "1.5rem", mb: "0.5rem" }}>Litecoin</Typography>

                                                    <Typography variant='body2' sx={{ color: "#b9b9c3!important", fontSize: "16px", fontWeight: "500" }}>Minimum Deposit</Typography>
                                                    <Typography variant='span' sx={{
                                                        backgroundColor: "rgba(115,103,240,.12)",
                                                        color: "#7367f0!important",
                                                        fontSize: "13px",
                                                        fontWeight: "bold",
                                                        mt: "12px",
                                                        width: "62px",
                                                        p: "4px 6px",
                                                        borderRadius: "10px",
                                                    }}>
                                                        $ 20.00
                                                    </Typography>
                                                </Box>
                                            </Box>

                                            <hr style={{ opacity: '0.3', margin: "20px 0" }} />

                                            <Box sx={{ gap: 2, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <Grid item xs={3} lg={12} className='depositeGrid' sx={{ display: "flex", mt: "10px" }}>
                                                    <Button color="primary" size='small' sx={{ border: '1px solid #7367f0', fontSize: "16px" }}>$</Button>
                                                    <CustomTextField defaultValue='' placeholder="Amount to Deposit" id='custom-select' fullWidth >

                                                    </CustomTextField>
                                                    <Button color="primary" variant='contained' sx={{ borderRadius: "5px", fontSize: "16px" }}>Deposit</Button>
                                                </Grid>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Grid>

                                <Grid item sm={12} lg={4} >
                                    <Box sx={{ border: "2px solid #e1e5ea", borderRadius: "10px" }}>

                                        <Box sx={{ display: "flex", justifyContent: "space-around", p: "12px 0" }}>
                                            <span ><img src={litecoinLogo.src} alt="bitCoin" style={{
                                                width: "50px"
                                            }} /></span>
                                            <Box sx={{}}>
                                                <Link href="https://coinmarketcap.com/currencies/litecoin/?utm_medium=widget&utm_campaign=cmcwidget&utm_source=strongtools.ga&utm_content=litecoin" style={{ textDecoration: "none" }} target='_blank'> <span style={{
                                                    fontSize: "18px",
                                                    color: "rgb(16, 112, 224)",
                                                    display: "flex",
                                                    flexDirection: "column",

                                                }}>Litecoin (LTC)</span></Link>
                                                <span style={{ fontSize: "20px", fontWeight: "500" }}>64.52 USD<span style={{
                                                    color: "#d94040"
                                                }}> (-1.11%)</span></span>
                                            </Box>

                                        </Box>

                                        <Box sx={{ display: "flex", justifyContent: 'space-around', borderTop: "1px solid #e1e5ea" }}>
                                            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", borderRight: '1px solid #e1e5ea', p: "12px", justifyContent: "center" }}>
                                                <span>Rank</span>
                                                <span style={{ fontSize: "18px" }}>15</span>
                                            </Box>
                                            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", borderRight: '1px solid #e1e5ea', p: "12px", justifyContent: "center" }}>
                                                <span>MARKET CAP</span>
                                                <span style={{ fontSize: "18px" }}>$4.75 B USD</span>
                                            </Box>
                                            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", p: "12px", justifyContent: "center" }}>
                                                <span>VOLUME</span>
                                                <span style={{ fontSize: "18px" }}>$232.13 M USD
                                                </span>
                                            </Box>
                                        </Box>
                                        <Box sx={{ p: "12px 0", textAlign: "center", borderTop: "1px solid #e1e5ea" }}>
                                            <Link href="https://coinmarketcap.com/?utm_medium=widget&utm_campaign=cmcwidget&utm_source=strongtools.ga&utm_content=litecoin" style={{ textDecoration: "none" }} target='_blank'>

                                                <Typography sx={{ color: "rgb(16, 112, 224)", fontSize: '14px' }}>Powered by CoinMarketCap</Typography>
                                            </Link>
                                        </Box>
                                    </Box>
                                    <hr style={{ opacity: '0.3', margin: "20px 0" }} />

                                    <Card sx={{ border: "1px solid #7367f0" }}>
                                        <CardHeader title="Bonus on Deposit" />
                                        <CardContent sx={{ color: "#7367f0", p: "0px 22px", fontSize: "20px" }}>On Every Deposit 50$+ you will get 10% BONUS</CardContent>
                                    </Card>
                                </Grid>

                                <Grid item sm={12} lg={4}>
                                    <Card sx={{ boxShadow: "none" }}>
                                        <Typography sx={{ color: "#ea545a !important", p: "0px 22px", fontSize: "18px", fontWeight: "500", fontFamily: "inherit" }}>Minimum Deposit</Typography>
                                        <CardContent sx={{ p: "0px 22px", fontSize: "16px", mt: "10px" }}>Minimum Deposit Allowed for LTC is: 20.00$</CardContent>
                                    </Card>
                                    <Card sx={{ boxShadow: "none" }}>
                                        <Typography sx={{ color: "#ea545a !important", p: "0px 22px", fontSize: "18px", fontWeight: "500", fontFamily: "inherit" }}>Confirmation</Typography>
                                        <CardContent sx={{ p: "0px 22px", fontSize: "16px", mt: "10px" }}>Transaction need 1 confirmation to reflect on your balance. Money will be added automatically.</CardContent>
                                    </Card>
                                    <Card sx={{ boxShadow: "none" }}>
                                        <Typography sx={{ color: "#ea545a !important", p: "0px 22px", fontSize: "18px", fontWeight: "500", fontFamily: "inherit" }}>Minimum Deposit</Typography>
                                        <CardContent sx={{ p: "0px 22px", fontSize: "16px", mt: "10px" }}>Sometime after confirmation you may get 0$, don't panic just open ticket and admin will solve that.</CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </TabPanel>


                        <TabPanel value='3'>
                        <Grid container spacing={6} >
                                <Grid item sm={12} lg={4} >
                                    <Card sx={{ position: 'relative', display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", boxShadow: 'none' }}>
                                        <CardMedia sx={{ height: '150px', width: "100%", backgroundColor: "#bc3023" }} />
                                        <Avatar
                                            alt='perfectMoney'
                                            src='/images/perfectMoney.png'
                                            sx={{
                                                width: 100,
                                                height: 100,
                                                // left: '1.313rem',
                                                top: '6.28125rem',
                                                position: 'absolute',
                                                border: theme => `8px solid ${theme.palette.common.white}`
                                            }}
                                        />
                                        <CardContent>
                                            <Box
                                                sx={{
                                                    mt: 5.75,
                                                    mb: 8.75,
                                                    display: 'flex',
                                                    flexWrap: 'wrap',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                }}
                                            >
                                                <Box sx={{ mr: 2, mb: 1, display: 'flex', flexDirection: 'column', mt: "30px", alignItems: "center", justifyContent: 'center', }}>

                                                    <Typography variant='h5' sx={{ fontFamily: "inherit", fontWeight: "500", color: '#5e5873', fontSize: "1.5rem", mb: "0.5rem" }}>Perfect Money</Typography>

                                                    <Typography variant='body2' sx={{ color: "#b9b9c3!important", fontSize: "16px", fontWeight: "500" }}>Minimum Deposit</Typography>
                                                    <Typography variant='span' sx={{
                                                        backgroundColor: "rgba(234,84,85,.12)",
                                                        color: "#ea5455!important",
                                                        fontSize: "13px",
                                                        fontWeight: "bold",
                                                        mt: "12px",
                                                        width: "62px",
                                                        p: "4px 6px",
                                                        borderRadius: "10px",
                                                    }}>
                                                        $ 5.00
                                                    </Typography>
                                                </Box>
                                            </Box>

                                            <hr style={{ opacity: '0.3', margin: "20px 0" }} />

                                            <Box sx={{ gap: 2, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <Grid item xs={3} lg={12} className='depositeGrid' sx={{ display: "flex", mt: "10px" }}>
                                                    <Button size='small' sx={{ border: '1px solid #ea5455', fontSize: "16px",color:"#ea5455" }}>$</Button>
                                                    <CustomTextField defaultValue='' placeholder="Amount to Deposit" id='custom-select' fullWidth >

                                                    </CustomTextField>
                                                    <Button  variant='contained' sx={{ borderRadius: "5px", fontSize: "16px" ,backgroundColor: "#ea5455"}}>Deposit</Button>
                                                </Grid>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Grid>

                                <Grid item sm={12} lg={4} >
                                    

                                    <Card sx={{ border: "1px solid #ea5455" }}>
                                        <CardHeader title="Bonus on Deposit" />
                                        <CardContent sx={{ color: "#ea5455", p: "0px 22px", fontSize: "20px" }}>On Every Deposit 50$+ you will get 10% BONUS</CardContent>
                                    </Card>
                                </Grid>

                                <Grid item sm={12} lg={4}>
                                    <Card sx={{ boxShadow: "none" }}>
                                        <Typography sx={{ color: "#ea545a !important", p: "0px 22px", fontSize: "18px", fontWeight: "500", fontFamily: "inherit" }}>Minimum Deposit</Typography>
                                        <CardContent sx={{ p: "0px 22px", fontSize: "16px", mt: "10px" }}>Minimum Deposit Allowed for PM is: 5.00$</CardContent>
                                    </Card>
                                    <Card sx={{ boxShadow: "none" }}>
                                        <Typography sx={{ color: "#ea545a !important", p: "0px 22px", fontSize: "18px", fontWeight: "500", fontFamily: "inherit" }}>Require</Typography>
                                        <CardContent sx={{ p: "0px 22px", fontSize: "16px", mt: "10px" }}>Send money through site API for Automatic deposit, if you try to send manual you can't escape the fee you will only delay your transaction for days.</CardContent>
                                    </Card>
                                    <Card sx={{ boxShadow: "none" }}>
                                        <Typography sx={{ color: "#ea545a !important", p: "0px 22px", fontSize: "18px", fontWeight: "500", fontFamily: "inherit" }}>Manual Deposits</Typography>
                                        <CardContent sx={{ p: "0px 22px", fontSize: "16px", mt: "10px" }}>If your deposit is manual from exchangers, be sure to send Batch Number on Ticket and wait for Admins to solve it.</CardContent>
                                    </Card>
                                    <Card sx={{ boxShadow: "none" }}>
                                        <Typography sx={{ color: "#ea545a !important", p: "0px 22px", fontSize: "18px", fontWeight: "500", fontFamily: "inherit" }}>Warnings</Typography>
                                        <CardContent sx={{ p: "0px 22px", fontSize: "16px", mt: "10px" }}>Never try to change MEMO of Payments because you will not get deposit automatic, leave as system generates that.</CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </TabPanel>


                        <TabPanel value='4'>
                        <Grid container spacing={6} >
                                <Grid item sm={12} lg={4} >
                                    <Card sx={{ position: 'relative', display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", boxShadow: 'none' }}>
                                        <CardMedia sx={{ height: '150px', width: "100%", backgroundImage: `url(${tronBG.src})`}} />
                                        <Avatar
                                            alt='Tron'
                                            src='/images/tron.png'
                                            sx={{
                                                width: 100,
                                                height: 100,
                                                // left: '1.313rem',
                                                top: '6.28125rem',
                                                position: 'absolute',
                                                border: theme => `8px solid ${theme.palette.common.white}`
                                            }}
                                        />
                                        <CardContent>
                                            <Box
                                                sx={{
                                                    mt: 5.75,
                                                    mb: 8.75,
                                                    display: 'flex',
                                                    flexWrap: 'wrap',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                }}
                                            >
                                                <Box sx={{ mr: 2, mb: 1, display: 'flex', flexDirection: 'column', mt: "30px", alignItems: "center", justifyContent: 'center', }}>

                                                    <Typography variant='h5' sx={{ fontFamily: "inherit", fontWeight: "500", color: '#5e5873', fontSize: "1.5rem", mb: "0.5rem" }}>USDT TRC20</Typography>

                                                    <Typography variant='body2' sx={{ color: "#b9b9c3!important", fontSize: "16px", fontWeight: "500" }}>Minimum Deposit</Typography>
                                                    <Typography variant='span' sx={{
                                                        backgroundColor: "rgba(115,103,240,.12)",
                                                        color: "#7367f0!important",
                                                        fontSize: "13px",
                                                        fontWeight: "bold",
                                                        mt: "12px",
                                                        width: "62px",
                                                        p: "4px 6px",
                                                        borderRadius: "10px",
                                                    }}>
                                                        $ 20.00
                                                    </Typography>
                                                </Box>
                                            </Box>

                                            <hr style={{ opacity: '0.3', margin: "20px 0" }} />

                                            <Box sx={{ gap: 2, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <Grid item xs={3} lg={12} className='depositeGrid' sx={{ display: "flex", mt: "10px" }}>
                                                    <Button color="primary" size='small' sx={{ border: '1px solid #7367f0', fontSize: "16px" }}>$</Button>
                                                    <CustomTextField defaultValue='' placeholder="Amount to Deposit" id='custom-select' fullWidth >

                                                    </CustomTextField>
                                                    <Button color="primary" variant='contained' sx={{ borderRadius: "5px", fontSize: "16px" }}>Deposit</Button>
                                                </Grid>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Grid>

                                <Grid item sm={12} lg={4} >

                                    <Card sx={{ border: "1px solid #7367f0" }}>
                                        <CardHeader title="Bonus on Deposit" />
                                        <CardContent sx={{ color: "#7367f0", p: "0px 22px", fontSize: "20px" }}>On Every Deposit 50$+ you will get 10% BONUS</CardContent>
                                    </Card>
                                </Grid>

                                <Grid item sm={12} lg={4}>
                                    <Card sx={{ boxShadow: "none" }}>
                                        <Typography sx={{ color: "#7367f0 !important", p: "0px 22px", fontSize: "18px", fontWeight: "500", fontFamily: "inherit" }}>Minimum Deposit</Typography>
                                        <CardContent sx={{ p: "0px 22px", fontSize: "16px", mt: "10px" }}>Minimum Deposit Allowed for Other Cryptos is: 20.00$</CardContent>
                                    </Card>
                                    <Card sx={{ boxShadow: "none" }}>
                                        <Typography sx={{ color: "#7367f0 !important", p: "0px 22px", fontSize: "18px", fontWeight: "500", fontFamily: "inherit" }}>Confirmation</Typography>
                                        <CardContent sx={{ p: "0px 22px", fontSize: "16px", mt: "10px" }}>Transaction need confirmation to reflect on your balance. Money will be added automatically after it get confirmed on blockchain. You can check the status of transaction any time from https://tronscan.org</CardContent>
                                    </Card>
                                    <Card sx={{ boxShadow: "none" }}>
                                        <Typography sx={{ color: "#ea545a !important", p: "0px 22px", fontSize: "18px", fontWeight: "500", fontFamily: "inherit" }}>Warnings</Typography>
                                        <CardContent sx={{ p: "0px 22px", fontSize: "16px", mt: "10px" }}>We currently support only TRC20 network USDT token. So send only USDT TRC20 on this address. You will lost funds if you send any other network token.</CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </TabPanel>
                    </TabContext>

                </Grid>
            </Card>

        </>
    )
}

export default Deposit

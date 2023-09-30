import { Button, Card, CardHeader, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import CustomTextField from 'src/@core/components/mui/text-field'
import Breadcrum from 'src/pages/components/Breadcrum'
import InputAdornment from '@mui/material/InputAdornment'
import Icon from 'src/@core/components/icon'
import Tab from '@mui/material/Tab'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import TabComponent from './TabComponent'

const index = () => {
    // ** State
    const [value, setValue] = useState('2')

    const [accountTabs, setAccountTabs] = useState('dating')


    // functions to set tab values of accounts tab ||

    const dating = (e) => {
        e.preventDefault()
        setAccountTabs('dating')
    }
    const vpn = (e) => {
        e.preventDefault()
        setAccountTabs('vpn')
    }
    const shopping = (e) => {
        e.preventDefault()
        setAccountTabs('shopping')
    }
    const shipping = (e) => {
        e.preventDefault()
        setAccountTabs('shipping')
    }
    const streaming = (e) => {
        e.preventDefault()
        setAccountTabs('streaming')
    }
    const food = (e) => {
        e.preventDefault()
        setAccountTabs('food')
    }
    const keys = (e) => {
        e.preventDefault()
        setAccountTabs('keys')
    }
    const others = (e) => {
        e.preventDefault()
        setAccountTabs('others')
    }
    const social = (e) => {
        e.preventDefault()
        setAccountTabs('social')
    }

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <>
            <Box id='addSingle'>


                <Breadcrum title='Add Single Tool' />

                <Card sx={{ p: '22px' }}>
                    <Typography sx={{ fontSize: '20px', fontWeight: '600' }} >Add Tool</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px 0px' }}>
                        <Typography sx={{ fontSize: '16px', background: 'rgba(115,103,240,.12)', color: '#7367f0', p: '8px', borderRadius: '8px', mt: '15px' }}>Note: Before you press the button "UPLOAD Tool", chose the sector: Accounts, Stuff, Tutorial ! Look in shop to see the right sector.</Typography>

                        <Grid item sm={12} md={6} >
                            <TabContext value={value}>

                                <TabPanel value='1'>
                                    <TabContext value={value}>
                                        <TabList centered onChange={handleChange} aria-label='nav tabs example'>
                                            <Tab value='dating' component='a' label='Dating' href='/spam' onClick={e => dating(e)} icon={<Icon icon='solar:heart-outline' />} />
                                            <Tab value='vpn' component='a' label='VPN' href='/spam' onClick={e => vpn(e)} icon={<Icon icon='iconamoon:shield-light' />} />
                                            <Tab value='shopping' component='a' label='Shopping' href='/spam' onClick={e => shopping(e)} icon={<Icon icon='mdi:shopping-outline' />} />
                                            <Tab value='shipping' component='a' label='Shipping' href='/spam' onClick={e => shipping(e)} icon={<Icon icon='mingcute:truck-line' />} />

                                        </TabList>
                                        <TabList centered onChange={handleChange} aria-label='nav tabs example'>
                                            <Tab value='streaming' component='a' label='Streaming' href='/spam' onClick={e => streaming(e)} icon={<Icon icon='material-symbols:cast-outline' />} />
                                            <Tab value='food' component='a' label='Food' href='/spam' onClick={e => food(e)} icon={<Icon icon='et:piechart' />} />
                                            <Tab value='keys' component='a' label='Keys' href='/spam' onClick={e => keys(e)} icon={<Icon icon='icon-park-outline:key' />} />
                                            <Tab value='others' component='a' label='Others' href='/spam' onClick={e => others(e)} icon={<Icon icon='ion:grid-outline' />} />
                                            <Tab value='social' component='a' label='Social Network' href='/spam' onClick={e => social(e)} icon={<Icon icon='akar-icons:instagram-fill' />} />

                                        </TabList>
                                    </TabContext>
                                </TabPanel>
                                <TabPanel value='2'>
                                    <Grid container spacing={6} >
                                        <Grid item sm={12} lg={12} >
                                            <Box>
                                                <form onSubmit={e => e.preventDefault()}>
                                                    <Grid container spacing={5}>
                                                        <Grid item xs={12}>
                                                            <CustomTextField
                                                                fullWidth
                                                                label='Account Type'
                                                                placeholder='Account Type'
                                                                InputProps={{
                                                                    startAdornment: (
                                                                        <InputAdornment position='start'>
                                                                            <Icon fontSize='1.25rem' icon='tabler:user' />
                                                                        </InputAdornment>
                                                                    )
                                                                }}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <CustomTextField
                                                                fullWidth
                                                                label='Country'
                                                                placeholder='Country'
                                                                InputProps={{
                                                                    startAdornment: (
                                                                        <InputAdornment position='start'>
                                                                            <Icon fontSize='1.25rem' icon='mingcute:earth-2-line' />
                                                                        </InputAdornment>
                                                                    )
                                                                }}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <CustomTextField
                                                                fullWidth
                                                                label='Description'
                                                                placeholder='Description'
                                                                InputProps={{
                                                                    startAdornment: (
                                                                        <InputAdornment position='start'>
                                                                            <Icon fontSize='1.25rem' icon='jam:alert' />
                                                                        </InputAdornment>
                                                                    )
                                                                }}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <CustomTextField
                                                                fullWidth
                                                                label='Link or Extra Info'
                                                                placeholder='Link or Extra Info'
                                                                InputProps={{
                                                                    startAdornment: (
                                                                        <InputAdornment position='start'>
                                                                            <Icon fontSize='1.25rem' icon='solar:link-linear' />
                                                                        </InputAdornment>
                                                                    )
                                                                }}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <CustomTextField
                                                                fullWidth
                                                                type='email'
                                                                label='Email'
                                                                placeholder='Email'
                                                                InputProps={{
                                                                    startAdornment: (
                                                                        <InputAdornment position='start'>
                                                                            <Icon fontSize='1.25rem' icon='ic:outline-alternate-email' />
                                                                        </InputAdornment>
                                                                    )
                                                                }}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <CustomTextField
                                                                fullWidth
                                                                label='Password'
                                                                placeholder='Password'
                                                                InputProps={{
                                                                    startAdornment: (
                                                                        <InputAdornment position='start'>
                                                                            <Icon fontSize='1.25rem' icon='solar:lock-linear' />
                                                                        </InputAdornment>
                                                                    )
                                                                }}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <CustomTextField
                                                                fullWidth
                                                                multiline
                                                                minRows={3}
                                                                label='Cookies'
                                                                placeholder=''
                                                                sx={{ '& .MuiInputBase-root.MuiFilledInput-root': { alignItems: 'baseline' } }}
                                                                InputProps={{
                                                                    startAdornment: (
                                                                        <InputAdornment position='start'>
                                                                            <Icon fontSize='1.25rem' icon='ic:outline-alternate-email' />
                                                                        </InputAdornment>
                                                                    )
                                                                }}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <CustomTextField
                                                                fullWidth
                                                                label='Price'
                                                                placeholder='Price'
                                                                InputProps={{
                                                                    startAdornment: (
                                                                        <InputAdornment position='start'>
                                                                            <Icon fontSize='1.25rem' icon='clarity:dollar-line' />
                                                                        </InputAdornment>
                                                                    )
                                                                }}
                                                            />
                                                        </Grid>

                                                        <Grid item xs={12}>
                                                            <Button sx={{ width: '100%' }} type='submit' variant='contained'>
                                                                Update Tools
                                                            </Button>
                                                        </Grid>
                                                    </Grid>
                                                </form>
                                            </Box>
                                        </Grid>

                                    </Grid>
                                </TabPanel>
                                <TabPanel value='3'>
                                    <Grid container spacing={6} >
                                        <Grid item sm={12} lg={12} >
                                            <Box>
                                                <form onSubmit={e => e.preventDefault()}>
                                                    <Grid container spacing={5}>
                                                        <Grid item xs={12}>
                                                            <CustomTextField
                                                                fullWidth
                                                                label='Account Type'
                                                                placeholder='Account Type'
                                                                InputProps={{
                                                                    startAdornment: (
                                                                        <InputAdornment position='start'>
                                                                            <Icon fontSize='1.25rem' icon='tabler:user' />
                                                                        </InputAdornment>
                                                                    )
                                                                }}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <CustomTextField
                                                                fullWidth
                                                                label='Country'
                                                                placeholder='Country'
                                                                InputProps={{
                                                                    startAdornment: (
                                                                        <InputAdornment position='start'>
                                                                            <Icon fontSize='1.25rem' icon='mingcute:earth-2-line' />
                                                                        </InputAdornment>
                                                                    )
                                                                }}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <CustomTextField
                                                                fullWidth
                                                                label='Description'
                                                                placeholder='Description'
                                                                InputProps={{
                                                                    startAdornment: (
                                                                        <InputAdornment position='start'>
                                                                            <Icon fontSize='1.25rem' icon='jam:alert' />
                                                                        </InputAdornment>
                                                                    )
                                                                }}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <CustomTextField
                                                                fullWidth
                                                                label='Link or Extra Info'
                                                                placeholder='Link or Extra Info'
                                                                InputProps={{
                                                                    startAdornment: (
                                                                        <InputAdornment position='start'>
                                                                            <Icon fontSize='1.25rem' icon='solar:link-linear' />
                                                                        </InputAdornment>
                                                                    )
                                                                }}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <CustomTextField
                                                                fullWidth
                                                                type='email'
                                                                label='Email'
                                                                placeholder='Email'
                                                                InputProps={{
                                                                    startAdornment: (
                                                                        <InputAdornment position='start'>
                                                                            <Icon fontSize='1.25rem' icon='ic:outline-alternate-email' />
                                                                        </InputAdornment>
                                                                    )
                                                                }}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <CustomTextField
                                                                fullWidth
                                                                label='Password'
                                                                placeholder='Password'
                                                                InputProps={{
                                                                    startAdornment: (
                                                                        <InputAdornment position='start'>
                                                                            <Icon fontSize='1.25rem' icon='solar:lock-linear' />
                                                                        </InputAdornment>
                                                                    )
                                                                }}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <CustomTextField
                                                                fullWidth
                                                                multiline
                                                                minRows={3}
                                                                label='Cookies'
                                                                placeholder=''
                                                                sx={{ '& .MuiInputBase-root.MuiFilledInput-root': { alignItems: 'baseline' } }}
                                                                InputProps={{
                                                                    startAdornment: (
                                                                        <InputAdornment position='start'>
                                                                            <Icon fontSize='1.25rem' icon='ic:outline-alternate-email' />
                                                                        </InputAdornment>
                                                                    )
                                                                }}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <CustomTextField
                                                                fullWidth
                                                                label='Price'
                                                                placeholder='Price'
                                                                InputProps={{
                                                                    startAdornment: (
                                                                        <InputAdornment position='start'>
                                                                            <Icon fontSize='1.25rem' icon='clarity:dollar-line' />
                                                                        </InputAdornment>
                                                                    )
                                                                }}
                                                            />
                                                        </Grid>

                                                        <Grid item xs={12}>
                                                            <Button sx={{ width: '100%' }} type='submit' variant='contained'>
                                                                Update Tools
                                                            </Button>
                                                        </Grid>
                                                    </Grid>
                                                </form>
                                            </Box>
                                        </Grid>

                                    </Grid>
                                </TabPanel>
                                <TabPanel value='4'>
                                    <Grid container spacing={6} >
                                        <Grid item sm={12} lg={12} >
                                            <Box>
                                                <form onSubmit={e => e.preventDefault()}>
                                                    <Grid container spacing={5}>
                                                        <Grid item xs={12}>
                                                            <CustomTextField
                                                                fullWidth
                                                                label='Account Type'
                                                                placeholder='Account Type'
                                                                InputProps={{
                                                                    startAdornment: (
                                                                        <InputAdornment position='start'>
                                                                            <Icon fontSize='1.25rem' icon='tabler:user' />
                                                                        </InputAdornment>
                                                                    )
                                                                }}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <CustomTextField
                                                                fullWidth
                                                                label='Country'
                                                                placeholder='Country'
                                                                InputProps={{
                                                                    startAdornment: (
                                                                        <InputAdornment position='start'>
                                                                            <Icon fontSize='1.25rem' icon='mingcute:earth-2-line' />
                                                                        </InputAdornment>
                                                                    )
                                                                }}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <CustomTextField
                                                                fullWidth
                                                                label='Description'
                                                                placeholder='Description'
                                                                InputProps={{
                                                                    startAdornment: (
                                                                        <InputAdornment position='start'>
                                                                            <Icon fontSize='1.25rem' icon='jam:alert' />
                                                                        </InputAdornment>
                                                                    )
                                                                }}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <CustomTextField
                                                                fullWidth
                                                                label='Link or Extra Info'
                                                                placeholder='Link or Extra Info'
                                                                InputProps={{
                                                                    startAdornment: (
                                                                        <InputAdornment position='start'>
                                                                            <Icon fontSize='1.25rem' icon='solar:link-linear' />
                                                                        </InputAdornment>
                                                                    )
                                                                }}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <CustomTextField
                                                                fullWidth
                                                                label='Port for RDP Only'
                                                                placeholder='Port for RDP Only'
                                                                InputProps={{
                                                                    startAdornment: (
                                                                        <InputAdornment position='start'>
                                                                            <Icon fontSize='1.25rem' icon='solar:server-outline' />
                                                                        </InputAdornment>
                                                                    )
                                                                }}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <CustomTextField
                                                                fullWidth
                                                                type='email'
                                                                label='Email'
                                                                placeholder='Email'
                                                                InputProps={{
                                                                    startAdornment: (
                                                                        <InputAdornment position='start'>
                                                                            <Icon fontSize='1.25rem' icon='ic:outline-alternate-email' />
                                                                        </InputAdornment>
                                                                    )
                                                                }}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <CustomTextField
                                                                fullWidth
                                                                label='Password'
                                                                placeholder='Password'
                                                                InputProps={{
                                                                    startAdornment: (
                                                                        <InputAdornment position='start'>
                                                                            <Icon fontSize='1.25rem' icon='solar:lock-linear' />
                                                                        </InputAdornment>
                                                                    )
                                                                }}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <CustomTextField
                                                                fullWidth
                                                                multiline
                                                                minRows={3}
                                                                label='Cookies'
                                                                placeholder=''
                                                                sx={{ '& .MuiInputBase-root.MuiFilledInput-root': { alignItems: 'baseline' } }}
                                                                InputProps={{
                                                                    startAdornment: (
                                                                        <InputAdornment position='start'>
                                                                            <Icon fontSize='1.25rem' icon='ic:outline-alternate-email' />
                                                                        </InputAdornment>
                                                                    )
                                                                }}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <CustomTextField
                                                                fullWidth
                                                                label='Price'
                                                                placeholder='Price'
                                                                defaulValue='4'
                                                                InputProps={{
                                                                    startAdornment: (
                                                                        <InputAdornment position='start'>
                                                                            <Icon fontSize='1.25rem' icon='clarity:dollar-line' />
                                                                        </InputAdornment>
                                                                    )
                                                                }}
                                                            />
                                                        </Grid>

                                                        <Grid item xs={12}>
                                                            <Button sx={{ width: '100%' }} type='submit' variant='contained'>
                                                                Update Tools
                                                            </Button>
                                                        </Grid>
                                                    </Grid>
                                                </form>
                                            </Box>
                                        </Grid>

                                    </Grid>
                                </TabPanel>

                                <TabPanel value={accountTabs}>

                                    <TabComponent title={accountTabs} />
                                </TabPanel>

                                <TabList centered onChange={handleChange} aria-label='nav tabs example'>
                                    <Tab value='1' component='a' label='Accounts' href='/drafts' onClick={e => e.preventDefault()} icon={<Icon icon='tabler:user' />} />
                                    <Tab value='2' component='a' label='Stuffs' href='/trash' onClick={e => e.preventDefault()} icon={<Icon icon='lucide:server' />} />
                                    <Tab value='3' component='a' label='Tutorials' href='/spam' onClick={e => e.preventDefault()} icon={<Icon icon='ri:youtube-line' />} />
                                    <Tab value='4' component='a' label='RDPs' href='/spam' onClick={e => e.preventDefault()} icon={<Icon icon='eva:monitor-outline' />} />
                                </TabList>
                            </TabContext>

                        </Grid>

                    </Box>
                </Card>
            </Box>
        </>
    )
}

export default index

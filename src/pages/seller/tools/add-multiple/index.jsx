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
import RightSide from './RightSide'

const Index = () => {
    // ** State
    const [value, setValue] = useState('2')

    const [accountTabs, setAccountTabs] = useState('dating')
    const [showAccTab, setShowAccTab] = useState(false)


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

    const handleAccTab = (e) => {
        e.preventDefault()
        setShowAccTab(true)
    }
    const handleOthersTab = (e) => {
        e.preventDefault()
        setShowAccTab(false)
    }

    return (
        <>
            <Box id='addMultiple'>

                <Breadcrum title='Add Multiple Tool' />

                <Card sx={{ p: '22px' }}>
                    <Typography sx={{ fontSize: '20px', fontWeight: '600' }} >Add Mass Tools</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px 0px' }}>


                        <Grid container spacing={6} >

                            <Grid item sm={12} md={12} lg={6}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px 0px' }}>
                                    <Typography sx={{ fontSize: '16px', background: 'rgba(234,84,85,.12)', color: '#ea5455', p: '8px', borderRadius: '8px', mt: '12px' }}>ADDING EMAIL PASS - COMBO List is 100% Forbidden otherwise you will get banned Permanently.</Typography>

                                    <TabContext value={value}>

                                        <TabPanel value='2'>
                                            <Grid container spacing={6} >
                                                <Grid item sm={12} lg={12} >
                                                    <Box>
                                                        <form onSubmit={e => e.preventDefault()}>
                                                            <Grid container spacing={5}>

                                                                <Grid item xs={12} lg={12}>
                                                                    <CustomTextField
                                                                        fullWidth
                                                                        multiline
                                                                        minRows={3}
                                                                        label='Mass Add Tools'
                                                                        placeholder=
                                                                        {`Format:\nType:| Country:| Info:| addinfo:| Login:| Password:\nExample:\nRDP|USA|State- Win8/Win7/etc | IP: 123.456.789 |Port: 8080| Login| Password\nShell|New Base | Upload/unzip:yes or no |Link shell|none|none\ncPanel |country or new base|Upload|domain:yes or no |Link: c:Panel|user:|Password\nAnd finally choose the sector,account,stuff,special tutorial..`}
                                                                        sx={{ '& .MuiInputBase-root.MuiFilledInput-root': { alignItems: 'baseline' } }}

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

                                                                <Grid item xs={12} lg={12}>
                                                                    <CustomTextField
                                                                        fullWidth
                                                                        multiline
                                                                        minRows={3}
                                                                        label='Mass Add Tools'
                                                                        placeholder=
                                                                        {`Format:\nType:| Country:| Info:| addinfo:| Login:| Password:\nExample:\nRDP|USA|State- Win8/Win7/etc | IP: 123.456.789 |Port: 8080| Login| Password\nShell|New Base | Upload/unzip:yes or no |Link shell|none|none\ncPanel |country or new base|Upload|domain:yes or no |Link: c:Panel|user:|Password\nAnd finally choose the sector,account,stuff,special tutorial..`}
                                                                        sx={{ '& .MuiInputBase-root.MuiFilledInput-root': { alignItems: 'baseline' } }}

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

                                                                <Grid item xs={12} lg={12}>
                                                                    <CustomTextField
                                                                        fullWidth
                                                                        multiline
                                                                        minRows={3}
                                                                        label='Mass Add Tools'
                                                                        placeholder=
                                                                        {`Format:\nType:| Country:| Info:| addinfo:| Login:| Password:\nExample:\nRDP|USA|State- Win8/Win7/etc | IP: 123.456.789 |Port: 8080| Login| Password\nShell|New Base | Upload/unzip:yes or no |Link shell|none|none\ncPanel |country or new base|Upload|domain:yes or no |Link: c:Panel|user:|Password\nAnd finally choose the sector,account,stuff,special tutorial..`}
                                                                        sx={{ '& .MuiInputBase-root.MuiFilledInput-root': { alignItems: 'baseline' } }}

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

                                        <TabPanel value={accountTabs}>

                                            <TabComponent title={accountTabs} />
                                        </TabPanel>

                                        <TabList centered onChange={handleChange} aria-label='nav tabs example'>
                                            <Tab value='dating' component='a' label='Accounts' onClick={handleAccTab} icon={<Icon icon='tabler:user' />} />
                                            <Tab value='2' component='a' label='Stuffs'  onClick={handleOthersTab} icon={<Icon icon='lucide:server' />} />
                                            <Tab value='3' component='a' label='Tutorials' onClick={handleOthersTab} icon={<Icon icon='ri:youtube-line' />} />
                                            <Tab value='4' component='a' label='RDPs' onClick={handleOthersTab} icon={<Icon icon='eva:monitor-outline' />} />
                                        </TabList>
                                    </TabContext>

                                    {
                                        showAccTab?<TabContext value={value} className='addMultiTabsAcc'>
                                        <TabList onChange={handleChange} aria-label='nav tabs example' sx={{ borderBottom: 'none !important' }}>
                                            <Tab value='dating' component='a' label='Dating' onClick={e => dating(e)} icon={<Icon icon='solar:heart-outline' />} />
                                            <Tab value='vpn' component='a' label='VPN' onClick={e => vpn(e)} icon={<Icon icon='iconamoon:shield-light' />} />
                                            <Tab value='shopping' component='a' label='Shopping' onClick={e => shopping(e)} icon={<Icon icon='mdi:shopping-outline' />} />
                                            <Tab value='shipping' component='a' label='Shipping' onClick={e => shipping(e)} icon={<Icon icon='mingcute:truck-line' />} />

                                        </TabList>

                                        <TabList onChange={handleChange} aria-label='nav tabs example' sx={{ borderBottom: 'none !important', mt: '12px' }}>
                                            <Tab value='streaming' component='a' label='Streaming' onClick={e => streaming(e)} icon={<Icon icon='material-symbols:cast-outline' />} />
                                            <Tab value='food' component='a' label='Food' onClick={e => food(e)} icon={<Icon icon='et:piechart' />} />
                                            <Tab value='keys' component='a' label='Keys' onClick={e => keys(e)} icon={<Icon icon='icon-park-outline:key' />} />
                                            <Tab value='others' component='a' label='Others' onClick={e => others(e)} icon={<Icon icon='ion:grid-outline' />} />
                                            <Tab value='social' component='a' label='Social Network' onClick={e => social(e)} icon={<Icon icon='akar-icons:instagram-fill' />} />

                                        </TabList>


                                    </TabContext>: ''
                                    }

                                </Box>
                            </Grid>

                            <Grid item sm={12} md={12} lg={6}>
                                <RightSide />

                            </Grid>


                        </Grid>
                    </Box>

                </Card>
            </Box>

        </>
    )
}

export default Index

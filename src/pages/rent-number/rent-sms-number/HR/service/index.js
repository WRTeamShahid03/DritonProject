import { Button, Card, CardHeader, Grid, IconButton, MenuItem, Tab, Typography } from '@mui/material'
import React, { useState } from 'react'
import Breadcrum from 'src/pages/components/Breadcrum'
import { Icon } from '@iconify/react'
import { Box } from '@mui/system'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import CustomTextField from 'src/@core/components/mui/text-field'

const index = () => {

  const [value, setValue] = useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <>
      <Breadcrum title="Rent Number" />
      <Grid container spacing={6}>
        <Grid item xs={12} lg={3}>
          <Card>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <IconButton color='inherit' sx={{ ml: -2.75, width: '170px' }} >
                <Icon icon="emojione-v1:flag-for-croatia" style={{ fontSize: "120px" }} />
              </IconButton>

            </Box>

            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Box sx={{ mr: 2, display: 'flex', flexDirection: 'column', alignItems: "center", justifyContent: 'center', }}>

                <Typography variant='h5' sx={{ fontFamily: "inherit", fontWeight: "500", color: '#5e5873', fontSize: "1.5rem" }}>harishdev</Typography>
              </Box>
            </Box>

            <hr style={{ opacity: '0.3', margin: "20px" }} />

            <Box sx={{ pb: "12px", display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center', gap: "12px" }}>

              <Typography>Single Service Price: $ 24</Typography>

              <Typography>Multiple Service Price: $ 32</Typography>
            </Box>
          </Card>
        </Grid>

        <Grid item xs={12} lg={9}>
          <Card>
            <CardHeader title="Select Service Type" />
            <TabContext value={value}>
              <TabList onChange={handleChange} aria-label='nav tabs example'>
                <Tab value='1' component='a' label='Single Service Price: $ 24' href='/drafts' onClick={e => e.preventDefault()} />
                <Tab value='2' component='a' label='Multiple Service Price: $ 32' href='/trash' onClick={e => e.preventDefault()} />
              </TabList>
              <TabPanel value='1'>
                <Typography sx={{ m:"12px 0" }}>If you only require codes for a single service, click the Single Service option above, we will show you the list of available services and select the servcie you need.</Typography>
                <Typography sx={{ m:"12px 0" }}>
                Single service means will work only for single site which you select.
                </Typography>
                <Typography sx={{ m:"12px 0" }}>
                Multiple service will work for all sites. (We don't guarantee that works for all sites 100%. But it works with most of sites)
                </Typography>

                <Grid item xs={3}>
                        <CustomTextField select defaultValue='' id='custom-select' label="Select Any Service" placeHolder="Selct" fullWidth>
                            <MenuItem value={"168Com"}>168Com</MenuItem>
                            <MenuItem value={"2dehands"}>2dehands</MenuItem>
                            <MenuItem value={"2game"}>2game</MenuItem>
                        </CustomTextField>
                    </Grid>

                <Button variant='contained' sx={{ mt: "12px" }}>Rent Number</Button>
              </TabPanel>
              
              <TabPanel value='2'>
                <Typography sx={{ m:"12px 0" }}>If you only require codes for a single service, click the Single Service option above, we will show you the list of available services and select the servcie you need.</Typography>
                <Typography sx={{ m:"12px 0" }}>
                Single service means will work only for single site which you select.
                </Typography>
                <Typography sx={{ m:"12px 0" }}>
                Multiple service will work for all sites. (We don't guarantee that works for all sites 100%. But it works with most of sites)
                </Typography>

                <Button variant='contained' sx={{ mt: "12px" }}>Rent Number</Button>
              </TabPanel>
            </TabContext>
          </Card>
        </Grid>

      </Grid >

    </>
  )
}

export default index

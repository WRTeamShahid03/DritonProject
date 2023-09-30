import { TabPanel } from '@mui/lab'
import { Button, Grid, InputAdornment, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import IconifyIcon from 'src/@core/components/icon'
import Icon from 'src/@core/components/icon'
import CustomTextField from 'src/@core/components/mui/text-field'

const TabComponent = ({ title }) => {
    return (
        <>
            <Grid container spacing={6} >
                <Grid item sm={12} lg={12} >
                    <Box>
                        <form onSubmit={e => e.preventDefault()}>
                            <Grid container spacing={5}>
                                <Typography sx={{ ml: '22px' }}>{title.toUpperCase()} TAB </Typography>
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
        </>
    )
}

export default TabComponent

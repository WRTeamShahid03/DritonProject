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
                                <Grid item xs={12}>
                                    <CustomTextField
                                        fullWidth
                                        label='Account Type'
                                        placeholder='Account Type'
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position='start'>
                                                    <IconifyIcon fontSize='1.25rem' icon='tabler:user' />
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
        </>
    )
}

export default TabComponent

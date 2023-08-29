// ** React Imports
import { React, useState } from 'react'

// ** MUI Imports

import { Button, Card, CardHeader, Grid, IconButton, InputAdornment } from '@mui/material'
import Tab from '@mui/material/Tab'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import profileBG from '../../../../public/images/profileBg.webp'
import CustomTextField from 'src/@core/components/mui/text-field'
import Icon from 'src/@core/components/icon'


const Profile = () => {

    // ** States
    const [values, setValues] = useState({
        password: '',
        showPassword: false
    })

    const [confirmPassValues, setConfirmPassValues] = useState({
        password: '',
        showPassword: false
    })

    const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value })
    }

    const handleConfirmPassChange = prop => event => {
        setConfirmPassValues({ ...confirmPassValues, [prop]: event.target.value })
    }

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword })
    }

    const handleClickConfirmPassShow = () => {
        setConfirmPassValues({ ...confirmPassValues, showPassword: !confirmPassValues.showPassword })
    }



    return (
        <>

            <Grid container spacing={6} >

                <Grid item xs={12} lg={4} >
                    <Card sx={{ position: 'relative', display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", boxShadow: 'none' }}>
                        <CardMedia sx={{ height: '12.625rem', width: "100%", backgroundImage: `url(${profileBG.src})`, }} />
                        <Avatar
                            alt='harishdev'
                            src=''
                            sx={{
                                width: 100,
                                height: 100,
                                // left: '1.313rem',
                                top: '10.28125rem',
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

                                    <Typography variant='h5' sx={{ fontFamily: "inherit", fontWeight: "500", color: '#5e5873', fontSize: "1.5rem", mb: "0.5rem" }}>harishdev</Typography>

                                    <Typography variant='body2' sx={{ color: "#b9b9c3!important", fontSize: "16px", fontWeight: "500" }}>harishdev@gmail.com</Typography>
                                    <Typography variant='span' sx={{
                                        backgroundColor: "rgba(115,103,240,.12)",
                                        color: "#7367f0!important",
                                        fontSize: "13px",
                                        fontWeight: "bold",
                                        mt: "12px",
                                        width: "50px",
                                        p: "4px 6px",
                                        borderRadius: "10px",
                                    }}>
                                        Seller
                                    </Typography>
                                </Box>
                            </Box>

                            <hr style={{ opacity: '0.3', margin: "20px 0" }} />

                            <Box sx={{ width: "350px", display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }} className="profileCard">
                                <Grid item xs={3} lg={12} className='depositeGrid' sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: "10px" }} >
                                    <Box sx={{ display: "flex", flexDirection: "column", gap: "4px", alignItems: "center", justifyContent: "center", flexWrap: "wrap" }} className="profileFooter">
                                        <span style={{ color: "#b9b9c3", fontSize: "1rem", fontWeight: "600" }}>Earnings</span>
                                        <span style={{ color: "#615d71", fontSize: "1.5rem", fontWeight: "500" }} >$0.00</span>
                                    </Box>

                                    <Box sx={{ display: "flex", flexDirection: "column", gap: "4px", alignItems: "center", justifyContent: "center" }} className="profileFooter">
                                        <span style={{ color: "#b9b9c3", fontSize: "1rem", fontWeight: "600" }}>Total Solds</span>
                                        <span style={{ color: "#615d71", fontSize: "1.5rem", fontWeight: "500" }} >$0.00</span>
                                    </Box>

                                    <Box sx={{ display: "flex", flexDirection: "column", gap: "4px", alignItems: "center", justifyContent: "center" }} className="profileFooter">
                                        <span style={{ color: "#b9b9c3", fontSize: "1rem", fontWeight: "600" }}>Percentage</span>
                                        <span style={{ color: "#615d71", fontSize: "1.5rem", fontWeight: "500" }} >55%</span>
                                    </Box>
                                </Grid>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} lg={8} >
                    <Card sx={{ p: "22px 22px" }}>


                        <CardHeader title="Change Password" />
                        <Grid item xs={12} >
                            <CustomTextField
                                className='profileInput'
                                fullWidth
                                label='Current Password'
                                value={values.password}
                                id='form-layouts-basic-password'
                                onChange={handleChange('password')}
                                type={values.showPassword ? 'text' : 'password'}
                                aria-describedby='form-layouts-basic-password-helper'
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position='end'>
                                            <IconButton
                                                edge='end'
                                                onClick={handleClickShowPassword}
                                                onMouseDown={e => e.preventDefault()}
                                                aria-label='toggle password visibility'
                                            >
                                                <Icon fontSize='1.25rem' icon={values.showPassword ? 'tabler:eye' : 'tabler:eye-off'} />
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </Grid>

                        <Grid item xs={12} sx={{ mt: "30px" }}>
                            <CustomTextField
                                className='profileInput'
                                fullWidth
                                label='New Password'
                                value={confirmPassValues.password}
                                id='form-layouts-confirm-password'
                                onChange={handleConfirmPassChange('password')}
                                aria-describedby='form-layouts-confirm-password-helper'
                                type={confirmPassValues.showPassword ? 'text' : 'password'}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position='end' >
                                            <IconButton
                                                edge='end'
                                                onClick={handleClickConfirmPassShow}
                                                onMouseDown={e => e.preventDefault()}
                                                aria-label='toggle password visibility'
                                            >
                                                <Icon
                                                    fontSize='1.25rem'
                                                    icon={confirmPassValues.showPassword ? 'tabler:eye' : 'tabler:eye-off'}
                                                />
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </Grid>

                        <Grid item xs={12} sx={{ mt: "30px" }}>
                            <CustomTextField
                                className='profileInput'
                                fullWidth
                                label='Confirm Password'
                                value={confirmPassValues.password}
                                id='form-layouts-confirm-password'
                                onChange={handleConfirmPassChange('password')}
                                aria-describedby='form-layouts-confirm-password-helper'
                                type={confirmPassValues.showPassword ? 'text' : 'password'}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position='end'>
                                            <IconButton
                                                edge='end'
                                                onClick={handleClickConfirmPassShow}
                                                onMouseDown={e => e.preventDefault()}
                                                aria-label='toggle password visibility'
                                            >
                                                <Icon
                                                    fontSize='1.25rem'
                                                    icon={confirmPassValues.showPassword ? 'tabler:eye' : 'tabler:eye-off'}
                                                />
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </Grid>


                        <Button variant='contained' sx={{ width: "100%", mt: "30px" }}>Submit</Button>
                    </Card>

                    <Card sx={{ p: "22px 22px", mt: "50px" }}>


                        <CardHeader title="Edit Profile" />
                        <Grid item xs={12} md={12} >
                            <CustomTextField
                                fullWidth
                                type='email'
                                label='Email'
                                placeholder='harishdev@gmail.com'
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position='start'>
                                            <Icon fontSize='1.25rem' icon='tabler:mail' />
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </Grid>

                        <Grid item xs={12} sx={{ mt: "30px" }}>
                            <CustomTextField
                                fullWidth
                                type='email'
                                label='ICQ'
                                placeholder='ICQ@USER'
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position='start'>
                                            <Icon fontSize='1.25rem' icon='tabler:message' />
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </Grid>

                        <Grid item xs={12} sx={{ mt: "30px" }}>
                            <CustomTextField
                                fullWidth
                                type='email'
                                label='Telegram'
                                placeholder='Telegram@USER'
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position='start'>
                                            <Icon fontSize='1.25rem' icon='tabler:brand-telegram' />
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </Grid>




                        <Button variant='contained' sx={{ width: "100%", mt: "30px" }}>Submit</Button>
                    </Card>
                </Grid>

            </Grid>

        </>
    )
}

export default Profile

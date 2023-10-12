import React, { useEffect, useState } from 'react'
import { Button, Card, CardHeader, Grid, IconButton, InputAdornment, Typography } from '@mui/material'
import CustomTextField from 'src/@core/components/mui/text-field'
import Icon from 'src/@core/components/icon'
import { Box } from '@mui/system'
import Breadcrum from 'src/pages/components/Breadcrum'
import { useRouter } from 'next/router';
import { toast } from 'react-hot-toast';
import { loadSellerData, settingsdata } from 'src/store/apps/settings'
import { useSelector } from 'react-redux'
// import IconButton from '@mui/material/IconButton'

// import Icon from 'src/@core/components/icon'


const Index = () => {

    const router = useRouter();

    const sellerPassword = "12345"

    const sellerData = useSelector(settingsdata)

    // ** States
    const [values, setValues] = useState({
        password: '',
        showPassword: false
    })

    console.log("values",values)
    const [values2, setValues2] = useState({
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
    const handleChange2 = prop => event => {
        setValues2({ ...values2, [prop]: event.target.value })
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

    const handleSubmit = () => {
        if (values.password === '' || values.password === undefined) {
            toast.error('Enter the password correctly')
        }
        else {
            router.push('/seller/dashboard');
        }
    };
    
    const handleSubmit2 = () => {
        if(sellerPassword == values2.password){
            loadSellerData(true)
            router.push('/seller/dashboard');
        }else {
            toast.error('Enter the password correctly')
        }
    };

    return (
        <>
            <Breadcrum title="Seller Authentication" />

            {
                values.password ?
                    <Box>
                        <Card sx={{ p: "22px" }}>

                            <CardHeader title="Make Second Password" sx={{ p: '22px 8px' }} />

                            <Typography sx={{ color: "#00cfe8", backgroundColor: "rgba(0,207,232,.12)", fontSize: "16px", borderRadius: "5px", mb: "20px", p: "5px" }}>Please enter a different password for accessing seller panel this is extra security for you.</Typography>

                            <Grid item xs={12} >
                                <CustomTextField
                                    className='profileInput'
                                    fullWidth
                                    label='Second Password'
                                    value={values2.password}
                                    placeholder="Confirm Password"
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
                                    label='Confirm Second Password'
                                    placeholder="Enter Password"
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
                            <Button variant='contained' sx={{ width: "100%", mt: "30px" }} onClick={handleSubmit}>Submit</Button>
                        </Card>
                    </Box>
                    :
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Card sx={{ p: '22px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '50%' }}>

                            <IconButton size='large' sx={{ color: '#7367f0' }}>
                                <Icon fontSize='50px' icon='solar:lock-outline' />
                            </IconButton>

                            <CardHeader title="Second Password Authentication" sx={{ fontSize: '20px', fontWeight: '600' }} />

                            <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <CustomTextField
                                    className='profileInput'
                                    fullWidth
                                    label='Confirm Second Password'
                                    placeholder="Enter Password"
                                    value={values2.password}
                                    id='form-layouts-confirm-password'
                                    onChange={handleChange2('password')}
                                    aria-describedby='form-layouts-confirm-password-helper'
                                    type={confirmPassValues.showPassword ? 'text' : 'password'}
                                />
                                <hr style={{ color: 'grey', width: '100%' }} />
                                <Button variant='contained' sx={{ mt: '-12px' }} color='primary' onClick={handleSubmit2}>Submit</Button>
                            </Grid>



                        </Card>
                    </Box>
            }







        </>
    )
}

export default Index

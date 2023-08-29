import React, { useState } from 'react'
import Breadcrum from '../components/Breadcrum'
import { Button, Card, CardHeader, Grid, IconButton, InputAdornment, Typography } from '@mui/material'
import CustomTextField from 'src/@core/components/mui/text-field'
import Icon from 'src/@core/components/icon'
import { Box } from '@mui/system'

const index = () => {
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
            <Breadcrum title="Seller Authentication" />

            <Box>
                <Card sx={{ p: "22px" }}>

                    <CardHeader title="Make Second Password" sx={{ p: '22px 8px' }}/>

                    <Typography sx={{ color: "#00cfe8",backgroundColor: "rgba(0,207,232,.12)",fontSize: "16px",borderRadius :"5px",mb: "20px",p: "5px" }}>Please enter a different password for accessing seller panel this is extra security for you.</Typography>

                    <Grid item xs={12} >
                        <CustomTextField
                            className='profileInput'
                            fullWidth
                            label='Second Password'
                            value={values.password}
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
                    <Button variant='contained' sx={{ width: "100%", mt: "30px" }}>Submit</Button>
                </Card>
            </Box>




        </>
    )
}

export default index

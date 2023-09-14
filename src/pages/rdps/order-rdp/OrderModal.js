// ** React Imports
import { useState, forwardRef } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Switch from '@mui/material/Switch'
import Dialog from '@mui/material/Dialog'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Fade from '@mui/material/Fade'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import FormControlLabel from '@mui/material/FormControlLabel'
import IconButton from '@mui/material/IconButton'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const Transition = forwardRef(function Transition(props, ref) {
    return <Fade ref={ref} {...props} />
})

const CustomCloseButton = styled(IconButton)(({ theme }) => ({
    top: 0,
    right: 0,
    color: 'grey.500',
    position: 'absolute',
    boxShadow: theme.shadows[2],
    transform: 'translate(10px, -10px)',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: `${theme.palette.background.paper} !important`,
    transition: 'transform 0.25s ease-in-out, box-shadow 0.25s ease-in-out',
    '&:hover': {
        transform: 'translate(7px, -5px)'
    }
}))

const OrderModal = () => {
    // ** States
    const [show, setShow] = useState(false)
    const [languages, setLanguages] = useState([])

    const handleChange = event => {
        const {
            target: { value }
        } = event
        setLanguages(typeof value === 'string' ? value.split(',') : value)
    }

    return (
        <Card sx={{ background: "transparent", boxShadow: "none" ,borderBottom: '0.5px solid #80808042',borderRadius: "0px"}}>
            <CardContent sx={{ textAlign: 'center', '& svg': { mb: 2 } }}>
                <Button variant='contained' size='small' color='success' onClick={() => setShow(true)}>
                    Order
                </Button>
            </CardContent>
            <Dialog
                fullWidth
                open={show}
                maxWidth='md'
                scroll='body'
                onClose={() => setShow(false)}
                TransitionComponent={Transition}
                onBackdropClick={() => setShow(false)}
                sx={{ '& .MuiDialog-paper': { overflow: 'visible' } }}
            >
                <DialogContent
                    sx={{
                        pb: theme => `${theme.spacing(8)} !important`,
                        px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
                        pt: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
                    }}
                >
                    <CustomCloseButton onClick={() => setShow(false)}>
                        <Icon icon='tabler:x' fontSize='1.25rem' />
                    </CustomCloseButton>
                    <Box sx={{ mb: 8, textAlign: 'center' }}>
                        <Typography variant='h3' sx={{ mb: 3 }}>
                            Order RDP
                        </Typography>
                    </Box>
                    <Grid container spacing={6}>
                        <Grid item sm={6} xs={12}>
                            <CustomTextField fullWidth value='United Kingdom' label='Country' placeholder='' />
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <CustomTextField select defaultValue='Win-Server-2012R2' fullWidth id='status-select' label='Select an OS'>
                                <MenuItem value='Win-Server-2012R2'>Win-Server-2012R2</MenuItem>
                            </CustomTextField>
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <CustomTextField select defaultValue='Win-Server-2012R2' fullWidth id='status-select' label='Select an OS'>
                                <MenuItem value='Win-Server-2012R2'>Win-Server-2012R2</MenuItem>
                                <MenuItem value='Win-Server-2016'>Win-Server-2016</MenuItem>
                                <MenuItem value='Win-Server-2019'>Win-Server-2019</MenuItem>
                                <MenuItem value='Win-Server-2022'>Win-Server-2022</MenuItem>
                            </CustomTextField>
                        </Grid>

                    </Grid>
                </DialogContent>
                <DialogActions
                    sx={{
                        justifyContent: 'center',
                        px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
                        pb: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
                    }}
                >
                    <Button variant='contained' sx={{ mr: 1 }} onClick={() => setShow(false)}>
                        Place Order
                    </Button>
                    <Button variant='tonal' color='secondary' onClick={() => setShow(false)}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </Card>
    )
}

export default OrderModal

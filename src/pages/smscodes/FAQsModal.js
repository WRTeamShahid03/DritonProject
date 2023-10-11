// ** React Imports
import { useState, forwardRef } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Dialog from '@mui/material/Dialog'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Fade from '@mui/material/Fade'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import IconButton from '@mui/material/IconButton'


// ** Icon Imports
import Icon from 'src/@core/components/icon'
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'

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

const FAQsModal = () => {

    // ** States
    const [show, setShow] = useState(false)

    const accordianData = [
        {
            id: 0,
            que: "1. How long are active rent numbers?",
            ans: "Rent numbers are active for only 30 days."
        },
        {
            id: 1,
            que: "2. What is the difference between Single Service and Multiple Service?",
            ans: "Single Service means you can receive SMS only from one site that you choose. Multiple Services means you can receive SMS from almost all the sites."
        },
        {
            id: 2,
            que: "3. What if I don't receive SMS?",
            ans: "If you don't receive any SMS within one day, the Refund Request Button will appear. You will receive a refund after we have reviewed the number and verified that it is not receiving SMS for real."
        },
        {
            id: 3,
            que: "4. Can I renew the number",
            ans: "Currently, we do not offer this kind of option, but we will in the future."
        },
        {
            id: 4,
            que: "5. I have choosen the wrong service.What can I do?",
            ans: "We are sorry, but if you have chosen the wrong service, it is your responsibility, and there is no option to refund the working service."
        },
        {
            id: 5,
            que: "6. In what cases I can get refund?",
            ans: "You can get a refund only if the number is not receiving SMS. All other mistakes you make while purchasing it are non-refundable."
        },
    ]

    return (
        <Card sx={{ background: "none", boxShadow: 'none' }}>
            <CardContent sx={{ textAlign: 'center', '& svg': { mb: 2 } }}>
                <Button variant='contained' size='small' onClick={() => setShow(true)}>
                    FAQs
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
                        <Typography variant='h5' sx={{ mb: 3 }}>
                            Rent Number Faqs
                        </Typography>
                    </Box>
                    <Grid container spacing={6}>
                        {
                            accordianData.map((e)=>{
                                return <Accordion sx={{ width: "100%" }} key={e.id}>
                                <AccordionSummary
                                    id='panel-header-1'
                                    aria-controls='panel-content-1'
                                    expandIcon={<Icon fontSize='1.25rem' icon='tabler:chevron-down' />}
                                >
                                    <Typography>{e.que}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography sx={{ color: 'text.secondary' }}>
                                       {e.ans}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            })
                        }
                    </Grid>
                </DialogContent>
                <DialogActions
                    sx={{
                        justifyContent: 'center',
                        px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
                        pb: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
                    }}
                >
                </DialogActions>
            </Dialog>
        </Card>
    )
}

export default FAQsModal

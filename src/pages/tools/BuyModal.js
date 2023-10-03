// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import IconButton from '@mui/material/IconButton'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import { Box } from '@mui/system'

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

const createData = (name, price,) => {
    return { name, price, }
}

const rows = [
    createData('Edate(UNPAID)','4.00 $'),
]

const BuyModal = () => {
    // ** State
    const [open, setOpen] = useState(false)
    const handleClickOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return (
        <div>
            <Button variant='contained' size='small' color='success' onClick={handleClickOpen}>+ </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby='customized-dialog-title'
                sx={{ '& .MuiDialog-paper': { overflow: 'visible' } }}
            >
                <DialogTitle id='customized-dialog-title' sx={{ p: 4 }}>
                    <Typography variant='h6' component='span'>
                        <Icon icon='bi:cart-plus-fill' fontSize='1.25rem' /> Cart
                    </Typography>
                    <CustomCloseButton aria-label='close' onClick={handleClose}>
                        <Icon icon='tabler:x' fontSize='1.25rem' />
                    </CustomCloseButton>
                </DialogTitle>
                <DialogContent dividers sx={{ p: theme => `${theme.spacing(4)} !important` }}>
                    <Typography sx={{ mb: 4 , color: "#00cfe8", backgroundColor: "rgba(0,207,232,.12)", fontSize: "16px", borderRadius: "5px", mb: "20px", p: "5px" }}>
                    If you buy 3 or more items using bulk feature, you'll get 10% discount.
                    </Typography>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 500 }} size='small' aria-label='a dense table'>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell align='left'>Price</TableCell>
                                    <TableCell align='left'>Delete</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map(row => (
                                    <TableRow key={row.info} sx={{ '&:last-of-type  td, &:last-of-type  th': { border: 0 } }}>


                                        <TableCell component='th' scope='row'  sx={{ fontSize: '18px' }}>
                                            {row.name}
                                        </TableCell>
                                        <TableCell align='left' sx={{ fontSize: '18px' }}>{row.price}</TableCell>

                                        <TableCell align='left'>
                                            <Button variant='contained' color='error' size="small">X</Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </DialogContent>
                    <Box sx={{ display: 'flex',alignItems: 'center',justifyContent: 'space-between',p: '22px' }}>
                    <Box>
                    <Typography sx={{ fontSize: '16px' }}>Total Price : 4.00 $</Typography>
                    <Typography sx={{ fontSize: '16px' }}>Price With Discount: 0.00 $</Typography>
                    </Box>
                    <Button variant='contained' color='info' onClick={handleClose}>Checkout</Button>
                    </Box>
            </Dialog>
        </div>
    )
}

export default BuyModal

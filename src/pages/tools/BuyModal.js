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
import { Card } from '@mui/material'

const createData = (name, price,) => {
    return { name, price, }
}

const rows = [
    createData('Edate(UNPAID)', '4.00 $'),
]

const BuyModal = ({ showCart, setShowCart, cartItems,setCartItems }) => {

    const removeFromCart = (index) => {
        const updatedCartItems = cartItems.filter((_, i) => i !== index);
        setCartItems(updatedCartItems)
         
      };


    return (
        <>     
            {
                showCart ? <Card id='cartModal'
                    sx={{ p: '10px', position: 'absolute', top: '86px', right: '135px', zIndex: '1' }}
                >

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pb: '20px' }}>

                        <Typography variant='h6' component='span'>
                            <Icon icon='bi:cart-plus-fill' fontSize='1.25rem' /> Cart
                        </Typography>
                        <Box sx={{ cursor: 'pointer' }} onClick={() => setShowCart(false)}> <Icon icon='tabler:x' fontSize='1.50rem' /></Box>
                    </Box>

                    <Box >
                        <Typography sx={{ mb: 4, color: "#00cfe8", backgroundColor: "rgba(0,207,232,.12)", fontSize: "16px", borderRadius: "5px", mb: "20px", p: "5px" }}>
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
                                    {cartItems.map((row,index) => (
                                        <TableRow key={row.name} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                                            <TableCell component='th' scope='row' sx={{ fontSize: '16px' }}>
                                                {row.type}
                                            </TableCell>
                                            <TableCell align='left' sx={{ fontSize: '16px' }}>{row.price}</TableCell>
                                            <TableCell align='left'>
                                                <Button variant='contained' color='error' size='small' onClick={() => removeFromCart(index)}>
                                                    X
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: '22px' }}>
                        <Box>
                            <Typography sx={{ fontSize: '15px' }}>Total Price : 4.00 $</Typography>
                            <Typography sx={{ fontSize: '15px' }}>Price With Discount: 0.00 $</Typography>
                        </Box>
                        <Button variant='contained' color='info' >Checkout</Button>
                    </Box>
                </Card> : ''
            }

        </>
    )
}

export default BuyModal

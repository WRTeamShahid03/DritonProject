// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import { Button, IconButton } from '@mui/material'
import { Icon } from '@iconify/react'
import  {rows}  from './staticData'

const createData = (countryFlag, country, singleService, multipleService) => {
    return { countryFlag, country, singleService, multipleService }
}



const OrderTable = () => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                <TableHead>
                    <TableRow>
                        <TableCell>Country</TableCell>
                        <TableCell align='left'>Description</TableCell>
                        <TableCell align='right'>Price</TableCell>
                        <TableCell align='right'>Request</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow
                            key={row.country}
                            sx={{
                                '&:last-of-type td, &:last-of-type th': {
                                    border: 0
                                }
                            }}
                        >
                            <TableCell component='th' scope='row'>
                                {row.country}
                            </TableCell>
                            <TableCell align='left'>
                               {row.description}
                                </TableCell>
                            <TableCell align='right'>{row.price}</TableCell>
                            <TableCell align='right'><Button size='small' variant='contained' color='success'>Order</Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default OrderTable

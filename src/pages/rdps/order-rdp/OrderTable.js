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
import OrderModal from './OrderModal'

const createData = (countryFlag, country, singleService, multipleService) => {
    return { countryFlag, country, singleService, multipleService }
}



const OrderTable = () => {

    const rows = [
        {
          id: 1,
          country: "United Kingdom",
          description: "8GB RAM , 2 CPU Core , 60 GB SSD & NVMe Storage , 500Mbps - 1Gbps , 4TB Bandwidth , 1 IPv4",
          price: "21.00"
    
        },
        {
          id: 2,
          country: "USA",
          description: "8GB RAM , 2 CPU Core , 60 GB SSD & NVMe Storage , 500Mbps - 1Gbps , 4TB Bandwidth , 1 IPv4 ⭐️ SPECIAL for DATING ⭐️",
          price: "21.00"
    
        },
        {
          id: 3,
          country: "Canada",
          description: "6GB RAM DDR3 , 4 CPU Core , 80 GB NVMe SSD , 1Gbps Port , 4TB Bandwidth , 1 IPv4 ⭐️ SPECIAL for DATING ⭐️",
          price: "21.00"
    
        },
        {
          id: 4,
          country: "Australia",
          description: "8GB DDR4 RAM , 2 CPU Core , 35 GB NVMe Storage , 1Gbps Port , 1.5TB Bandwidth , 1 IPv4",
          price: "21.00"
    
        },
        {
          id: 5,
          country: "United Kingdom",
          description: "8GB RAM , 2 CPU Core , 60 GB SSD & NVMe Storage , 500Mbps - 1Gbps , 4TB Bandwidth , 1 IPv4",
          price: "21.00"
    
        },
        {
          id: 6,
          country: "USA",
          description: "8GB RAM , 2 CPU Core , 60 GB SSD & NVMe Storage , 500Mbps - 1Gbps , 4TB Bandwidth , 1 IPv4 ⭐️ SPECIAL for DATING ⭐️",
          price: "21.00"
    
        },
        {
          id: 7,
          country: "Canada",
          description: "6GB RAM DDR3 , 4 CPU Core , 80 GB NVMe SSD , 1Gbps Port , 4TB Bandwidth , 1 IPv4 ⭐️ SPECIAL for DATING ⭐️",
          price: "21.00"
    
        },
        {
          id: 8,
          country: "Australia",
          description: "8GB DDR4 RAM , 2 CPU Core , 35 GB NVMe Storage , 1Gbps Port , 1.5TB Bandwidth , 1 IPv4",
          price: "21.00"
    
        },
    ]
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
                            <OrderModal/>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default OrderTable

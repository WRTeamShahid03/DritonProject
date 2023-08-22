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

const createData = (countryFlag, country, singleService, multipleService) => {
    return { countryFlag, country, singleService, multipleService }
}

const rows = [

    createData("emojione-v1:flag-for-croatia", 'Croatia', '24$', '32$',),
    createData("emojione-v1:flag-for-czechia", 'Czech Republic', '24$', '32$',),
    createData("emojione-v1:flag-for-finland", 'Finland', '24$', '32$',),
    createData("emojione-v1:flag-for-germany", 'Germany', '24$', '32$',),
]

const RentNumTable = () => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                <TableHead>
                    <TableRow>
                        <TableCell>Country</TableCell>
                        <TableCell align='right'>Single Service</TableCell>
                        <TableCell align='right'>Multi Service</TableCell>
                        <TableCell align='right'>Select</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow
                            key={row.name}
                            sx={{
                                '&:last-of-type td, &:last-of-type th': {
                                    border: 0
                                }
                            }}
                        >
                            <TableCell component='th' scope='row'>
                            <IconButton color='inherit' sx={{ ml: -2.75 }} >
                                    <Icon fontSize='1.5rem' icon={row.countryFlag} />
                                </IconButton>
                                {row.country}
                            </TableCell>
                            <TableCell align='right'>
                               {row.singleService}
                                </TableCell>
                            <TableCell align='right'>{row.multipleService}</TableCell>
                            <TableCell align='right'><Button size='small' variant='contained'>Select</Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default RentNumTable

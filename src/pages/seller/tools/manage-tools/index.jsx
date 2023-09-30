// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import { Card,Typography } from '@mui/material'
import Breadcrum from 'src/pages/components/Breadcrum'

const createData = (type, country, info, price, seller) => {
    return { type, country, info, price, seller }
}

const rows = [
    createData('', '', '', '', ''),
]

const index = () => {
    return (
        <>
        <Breadcrum title='Manage Tools' />
        <Card sx={{ p: '22px' }}>

            <Typography sx={{ fontSize: '20px', fontWeight: '600',mb: '20px' }} >Manage Tools</Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size='small' aria-label='a dense table'>
                    <TableHead>
                        <TableRow>
                            <TableCell>Types</TableCell>
                            <TableCell align='left'>Unsold Tools</TableCell>
                            <TableCell align='left'>Delete</TableCell>
                            <TableCell align='left'>Extract</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow key={row.info} sx={{ '&:last-of-type  td, &:last-of-type  th': { border: 0 } }}>


                                <TableCell component='th' scope='row'>
                                    {row.type}
                                </TableCell>
                                <TableCell align='left'>{row.country}</TableCell>
                                <TableCell align='left'>{row.info}</TableCell>
                                <TableCell align='left'>{row.price}</TableCell>
                                <TableCell align='left'>{row.seller}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Card>
        </>

    )
}

export default index

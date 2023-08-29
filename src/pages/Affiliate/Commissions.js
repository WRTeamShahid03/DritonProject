import React from 'react'
import { Card, CardHeader, } from '@mui/material'

// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'

const Commissions = () => {
    const createData = (username, date,commission) => {
        return { username, date ,commission}
    }

    const rows = [

    ]
    return (
        <>
            <Card>
                <CardHeader title="Commissions" />

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} size='small' aria-label='a dense table'>
                        <TableHead>
                            <TableRow>
                                <TableCell>UserName</TableCell>
                                <TableCell align='left'>Date</TableCell>
                                <TableCell align='left'>Commission</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map(row => (
                                <TableRow key={row.info} sx={{ '&:last-of-type  td, &:last-of-type  th': { border: 0 } }}>


                                    <TableCell component='th' scope='row'>
                                        {row.username}
                                    </TableCell>
                                    <TableCell align='left'>{row.date}</TableCell>
                                    <TableCell align='left'>
                                        {row.commission}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>
        </>
    )
}

export default Commissions

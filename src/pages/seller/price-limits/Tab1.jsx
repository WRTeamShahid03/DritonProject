import React from 'react'

// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import { Typography } from '@mui/material'

const Tab1 = () => {

  const createData = (toolType, mininmum, maximum) => {
    return { toolType, mininmum, maximum }
  }

  const rows = [

    createData('Match Paid USA', '30 $', '40 $'),
  ]
  return (
    <div>
      <Typography sx={{ fontSize: '20px', fontWeight: '600' }} >Dating</Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Tool Type</TableCell>
              <TableCell align='right'>	MINIMUM</TableCell>
              <TableCell align='right'>	MAXIMUM</TableCell>
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
                <TableCell component='th' scope='row' sx={{ fontSize: '18px' }}>
                  {row.toolType}
                </TableCell>
                <TableCell align='right' sx={{ fontSize: '18px', color: '#c41212 !important', fontWeight: '600' }}>
                  {row.mininmum}
                </TableCell>
                <TableCell align='right' sx={{ fontSize: '18px', color: '#c41212 !important', fontWeight: '600' }}>{row.maximum}</TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Tab1

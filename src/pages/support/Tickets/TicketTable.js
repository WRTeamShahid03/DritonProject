// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import { Button, Card, CardHeader, Grid } from '@mui/material'
import TicketModal from './TicketModal'
import Link from 'next/link'

const createData = (date, subject, status, lastUpdate) => {
  return { date, subject, status, lastUpdate }
}

const rows = [
  createData('2023-08-22 11:13:15', "abc", "open", "2023-08-22 11:13:51",),
]

const TicketTable = () => {
  return (
    <Card>
      <CardHeader title="Tickets" />
      <Grid sx={{
        display: 'flex',
        alignItems: "center",
        flexDirection: 'column',
        paddingBottom: "30px"
      }}>
        <TicketModal />
        <Button variant='contained' className='supportBtn'>Your ticket/report will be replied within 2 hours ,please be patient</Button>

      </Grid>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size='small' aria-label='a dense table'>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell align='center'>Subject</TableCell>
              <TableCell align='center'>Status</TableCell>
              <TableCell align='center'>Last Update</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.subject} sx={{ '&:last-of-type  td, &:last-of-type  th': { border: 0 } }}>
                <TableCell component='th' scope='row' sx={{ fontSize: "16px" }}>
                  {row.date}
                </TableCell>
                <TableCell align='center' sx={{ fontSize: "18px" }}>{row.subject}</TableCell>
                <TableCell align='center' sx={{ fontSize: "18px" }}>{row.status}</TableCell>
                <TableCell align='center' sx={{ fontSize: "18px" }}>{row.lastUpdate}</TableCell>
                <TableCell align='center'>
                  <Link href="">
                    <Button variant='contained' size='small'>View</Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>

  )
}

export default TicketTable

// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import { Button, Card, CardHeader, Grid, Typography } from '@mui/material'
import Breadcrum from 'src/pages/components/Breadcrum'

const createData = (id,accType,reportedBy,refund,status,moreInfo) => {
  return { id,accType,reportedBy,refund,status,moreInfo }
}

const rows = [
    createData('','','','','','')
]

const Index = () => {
  return (
    <>
    <Breadcrum title= 'Reports' />
    <Card sx={{ p: '22px' }}>
        <Typography sx={{ fontSize: '20px', fontWeight: '600' }} >Reports</Typography>
      <Grid sx={{ 
        display: 'flex',
        alignItems: "center",
        flexDirection: 'column',
        paddingBottom: "30px"
       }}>

      </Grid>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size='small' aria-label='a dense table'>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align='right'>ACCTYPE</TableCell>
            <TableCell align='right'>REPORTED BY</TableCell>
            <TableCell align='right'>REFUND</TableCell>
            <TableCell align='right'>STATUS</TableCell>
            <TableCell align='right'>MORE INFO</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name} sx={{ '&:last-of-type  td, &:last-of-type  th': { border: 0 } }}>
              <TableCell component='th' scope='row'>
                {row.name}
              </TableCell>
              <TableCell align='right'>{row.calories}</TableCell>
              <TableCell align='right'>{row.fat}</TableCell>
              <TableCell align='right'>{row.carbs}</TableCell>
              <TableCell align='right'>{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Card>
    </>
    
  )
}

export default Index

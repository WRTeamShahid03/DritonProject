// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'
import { Button, Card, CardHeader, Grid, MenuItem, Typography } from '@mui/material'
import CustomTextField from 'src/@core/components/mui/text-field'

const columns = [
  { id: 'date', label: 'Date', minWidth: 170 },
  { id: 'expiry', label: 'expiry', minWidth: 100 },
  {
    id: 'country',
    label: 'country',
    minWidth: 170,
    align: 'right',
    format: value => value.toLocaleString('en-US')
  },
  {
    id: 'description',
    label: 'description',
    minWidth: 170,
    align: 'right',
    format: value => value.toLocaleString('en-US')
  },
  {
    id: 'price',
    label: 'price',
    minWidth: 170,
    align: 'right',
    format: value => value.toFixed(2)
  },
  {
    id: 'ip',
    label: 'ip',
    minWidth: 170,
    align: 'right',
    format: value => value.toFixed(2)
  },
  {
    id: 'username',
    label: 'username',
    minWidth: 170,
    align: 'right',
    format: value => value.toFixed(2)
  },
  {
    id: 'password',
    label: 'password',
    minWidth: 170,
    align: 'right',
    format: value => value.toFixed(2)
  },
  {
    id: 'status',
    label: 'status',
    minWidth: 170,
    align: 'right',
    format: value => value.toFixed(2)
  },
  {
    id: 'renew',
    label: 'renew',
    minWidth: 170,
    align: 'right',
    format: value => value.toFixed(2)
  },
]
function createData(name, code, population, size) {
  const density = population / size

  return { name, code, population, size, density }
}

const rows = [
  createData('India', 'IN', 1324171354, 3287263),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670),
  createData('Australia', 'AU', 25475400, 7692024),
  createData('Germany', 'DE', 83019200, 357578),
  createData('Ireland', 'IE', 4857000, 70273),
  createData('Mexico', 'MX', 126577691, 1972550),
  createData('Japan', 'JP', 126317000, 377973),
  createData('France', 'FR', 67022000, 640679),
  createData('United Kingdom', 'GB', 67545757, 242495),
  createData('Russia', 'RU', 146793744, 17098246),
  createData('Nigeria', 'NG', 200962417, 923768),
  createData('Brazil', 'BR', 210147125, 8515767)
]

const TableStickyHeader = () => {
  // ** States
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <>
    <Card sx={{ 
        p: "8px"
     }}>
      <CardHeader title="Add Request"/>

      <Typography sx={{
              color: '#ea5455!important',
              p: "8px", backgroundColor: "rgba(234,84,85,.12)!important;", m: "20px", borderRadius: "5px",
            }} className="dropDeatails">
              Credit Card is forbidden on this platform do not request.
            </Typography>

                <Grid container spacing={10} className='demo-space-x' sx={{display: "flex",justifyContent:"center", p:"20px",
              flexDirection: "column", }}>
                    <Grid item xs={3}>
                        <CustomTextField select defaultValue='' label='My interst is' id='custom-select'  fullWidth>
                            <MenuItem value='' >
                                <em>Accounts</em>
                            </MenuItem>
                            <MenuItem value={"Stuffs"}>Stuffs</MenuItem>
                            <MenuItem value={"RDps"}>RDps</MenuItem>
                        </CustomTextField>
                    </Grid>
                    <Grid item xs={3}>
                        <CustomTextField  defaultValue='' label='And Specialy i Need' placeholder="shells,mailer,paypal,POF,..." id='custom-select' fullWidth>
                            
                        </CustomTextField>
                    </Grid>
                    <Grid item xs={3}>
                        <CustomTextField select defaultValue='' label='About Important' id='custom-select' fullWidth>
                            <MenuItem value='' >
                                <em>Urgent</em>
                            </MenuItem>
                            <MenuItem value={"Asap"}>Asap</MenuItem>
                            <MenuItem value={"No Matter"}>No Matter</MenuItem>
                        </CustomTextField>
                    </Grid>
                    <Grid item xs={3}>
                        <CustomTextField select defaultValue='' label='For Quantity' id='custom-select' fullWidth>
                            <MenuItem value='' >
                                <em>Bulk</em>
                            </MenuItem>
                            <MenuItem value={"Many(>2)"}>Many</MenuItem>
                            <MenuItem value={"Few(1,2)"}>Few(1,2)</MenuItem>
                        </CustomTextField>
                    <Button variant='contained' size='large' sx={{ mt: "12px" }}> Submit </Button>
                    </Grid>
                </Grid>

    
      </Card>
    </>
  )
}

export default TableStickyHeader

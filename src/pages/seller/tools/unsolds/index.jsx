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
import { Card, CardHeader, Grid, MenuItem } from '@mui/material'
import Breadcrum from 'src/pages/components/Breadcrum'
import CustomTextField from 'src/@core/components/mui/text-field'
import { Box } from '@mui/system'

import IconButton from '@mui/material/IconButton'

import Icon from 'src/@core/components/icon'

const columns = [
  { id: 'type', label: 'TYPE', minWidth: 10 },
  {
    id: 'country',
    label: 'COUNTRY',
    minWidth: 170,
    align: 'center',
    format: value => value.toLocaleString('en-US')
  },
  {
    id: 'information',
    label: 'INFORMATION',
    minWidth: 170,
    align: 'center',
    format: value => value.toFixed(2)
  },
  {
    id: 'moreInfo',
    label: 'MORE INFO',
    minWidth: 170,
    align: 'center',
    format: value => value.toFixed(2)
  },
  {
    id: 'delete',
    label: 'DELETE',
    minWidth: 170,
    align: 'center',
    format: value => value.toFixed(2)
  }
]
function createData( type, country, information, moreInfo, del) {

  return {  type, country, information, moreInfo, del }
}

const rows = [
//   createData('unpaid','India', 'abc','abcde','delete'),
]

const Index = props => {
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

      <Breadcrum title='Unsolds Tools' />
      <Card>
        <CardHeader title="Unsolds Tools" sx={{ fontSize: '20px', fontWeight: '600' }} />

        <div className='container'>
          <Grid container spacing={12} className='demo-space-x' style={{ display: "flex", justifyContent: "center", padding: "30px 0" }}>
            <Grid item xs={3}>
              <CustomTextField select defaultValue='' label='Tool ID' id='custom-select' fullWidth>
                <MenuItem value={"Tool Type"}>Tool Type</MenuItem>
                <MenuItem value={"Country"}>Country</MenuItem>
                <MenuItem value={"Information"}>Information</MenuItem>
                <MenuItem value={"Price"}>Price</MenuItem>
                <MenuItem value={"Date"}>Date</MenuItem>
              </CustomTextField>
            </Grid>
            <Grid item xs={3}>
              <CustomTextField
                value={props.value}
                placeholder='Search…'
                onChange={props.onChange}
                InputProps={{
                  startAdornment: (
                    <Box sx={{ mr: 2, display: 'flex' }}>
                      <Icon fontSize='1.25rem' icon='tabler:search' />
                    </Box>
                  ),
                  endAdornment: (
                    <IconButton size='small' title='Clear' aria-label='Clear' onClick={props.clearSearch}>
                      <Icon fontSize='1.25rem' icon='tabler:x' />
                    </IconButton>
                  )
                }}
                sx={{

                  m: "15px",
                  width: {
                    xs: 1,
                    sm: 'auto'
                  },
                  '& .MuiInputBase-root > svg': {
                    mr: 2
                  }
                }}
              />
            </Grid>
          </Grid>


        </div>

        <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label='sticky table'>
            <TableHead>
              <TableRow>
                {columns.map(column => (
                  <TableCell key={column.id} align={column.align} sx={{ minWidth: column.minWidth }}>
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
                return (
                  <TableRow hover role='checkbox' tabIndex={-1} key={row.code}>
                    {columns.map(column => {
                      const value = row[column.id]

                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number' ? column.format(value) : value}
                        </TableCell>
                      )
                    })}
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component='div'
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card>
    </>
  )
}

export default Index

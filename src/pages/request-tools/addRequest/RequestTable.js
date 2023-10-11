// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import { Button, Card, CardHeader, Grid, MenuItem, Typography } from '@mui/material'
import CustomTextField from 'src/@core/components/mui/text-field'


// ======= viewRequest ===== //
// ** React Imports

// ** MUI Imports
import Box from '@mui/material/Box'
import { DataGrid } from '@mui/x-data-grid'
// import viewRow from './staticData'
import { viewRow } from 'src/@core/components/staticData'

// ** Custom Component Import
import QuickSearchToolbar from './Search'
// ** Third Party Components
import toast from 'react-hot-toast'

// ** Custom Components
import CustomAvatar from 'src/@core/components/mui/avatar'

// ** Utils Import
import { getInitials } from 'src/@core/utils/get-initials'

const renderClient = params => {

    
  const { row } = params
  const stateNum = Math.floor(Math.random() * 6)
  const states = ['success', 'error', 'warning', 'info', 'primary', 'secondary']
  const color = states[stateNum]
  if (row.avatar.length) {
      return <CustomAvatar src={`/images/avatars/${row.avatar}`} sx={{ mr: 3, width: '1.875rem', height: '1.875rem' }} />
  } else {
      return (
          <CustomAvatar skin='light' color={color} sx={{ mr: 3, fontSize: '.8rem', width: '1.875rem', height: '1.875rem' }}>
              {getInitials(row.full_name ? row.full_name : 'John Doe')}
          </CustomAvatar>
      )
  }
}


// ** Full Name Getter
const getFullName = params =>
  toast(
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {renderClient(params)}
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography noWrap variant='body2' sx={{ color: 'text.primary', fontWeight: 600 }}>
                  {params.row.full_name}
              </Typography>
          </Box>
      </Box>
  )


const TableStickyHeader = () => {

  

   // ** States
   const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 7 })
   const [hideNameColumn, setHideNameColumn] = useState({ full_name: true })
   const [searchText, setSearchText] = useState('')
   const [filteredData, setFilteredData] = useState([])
   const [data] = useState(viewRow)

   const handleSearch = searchValue => {
       setSearchText(searchValue)
       const searchRegex = new RegExp(escapeRegExp(searchValue), 'i')
   
       const filteredRows = data.filter(row => {
         return Object.keys(row).some(field => {
           // @ts-ignore
           return searchRegex.test(row[field].toString())
         })
       })
       if (searchValue.length) {
         setFilteredData(filteredRows)
       } else {
         setFilteredData([])
       }
     }

   const columns = [
       {
           flex: 0.175,
           minWidth: 120,
           headerName: 'ID',
           field: 'id',
           renderCell: params => (
               <Typography variant='body2' sx={{ color: 'text.primary' }}>
                   {params.row.id}
               </Typography>
           )
       },
       {
           flex: 0.175,
           minWidth: 120,
           headerName: 'TYPE',
           field: 'type',
           renderCell: params => (
               <Typography variant='body2' sx={{ color: 'text.primary' }}>
                   {params.row.type}
               </Typography>
           )
       },
       {
           flex: 0.175,
           minWidth: 470,
           headerName: 'Acc Type',
           field: 'acc type',
           renderCell: params => (
               <Typography variant='body2' sx={{ color: 'text.primary',display: "flex",alignItems: "center" }}>

                   {params.row.accType}
               
               {/* {params.row.accType.slice(0,42)+ " " + "..."}  <AccModal acc={params.row.accType}/> */}
           </Typography>
           )
       },
       {
           flex: 0.175,
           minWidth: 120,
           headerName: 'Important',
           field: 'important',
           renderCell: params => (
               <Typography variant='body2' sx={{ color: 'text.primary' }}>
                   {params.row.important}
               </Typography>
           )
       },
       {
           flex: 0.175,
           minWidth: 120,
           headerName: 'Quantity',
           field: 'quantity',
           renderCell: params => (
               <Typography variant='body2' sx={{ color: 'text.primary' }}>
                   {params.row.quantity}
               </Typography>

           )
       },
       {
           flex: 0.175,
           minWidth: 120,
           headerName: 'Data Request',
           field: 'data request',
           renderCell: params => (
               <Typography variant='body2' sx={{ color: 'text.primary' }}>
                   {params.row.dataRequest}
               </Typography>
           )
       },
       {
           flex: 0.175,
           minWidth: 120,
           headerName: 'Delete',
           field: 'delete',
           renderCell: params => (
               <Button size='small' variant='contained' color='error' onClick={() => getFullName(params)}>
                   Delete
               </Button>

           )
       },
      
   ]


  return (
    <>
      <Card sx={{
        p: "8px"
      }}>
        <CardHeader title="Add Request & Tool Requests" sx={{ fontSize: '20px', fontWeight: '600' }}/>

        <Typography sx={{
          color: '#ea5455!important',
          p: "8px", backgroundColor: "rgba(234,84,85,.12)!important;", m: "20px", borderRadius: "5px",
        }} className="dropDeatails">
          Credit Card is forbidden on this platform do not request.
        </Typography>

        <Grid container spacing={6}>

          <Grid item xs={12} lg={4}  className='demo-space-x' sx={{
            display: "flex", justifyContent: "center", p: "20px",
            flexDirection: "column",pl: '44px !important'
          }}>
            <Grid item xs={3} lg={12} className='requestInput'>
              <CustomTextField select defaultValue='' label='My interst is' id='custom-select' fullWidth >
                <MenuItem value='' >
                  <em>Accounts</em>
                </MenuItem>
                <MenuItem value={"Stuffs"}>Stuffs</MenuItem>
                <MenuItem value={"RDps"}>RDps</MenuItem>
              </CustomTextField>
            </Grid>

            <Grid item xs={3} lg={12} className='requestInput'>
              <CustomTextField defaultValue='' label='And Specialy i Need' placeholder="shells,mailer,paypal,POF,..." id='custom-select' fullWidth className="customInput">

              </CustomTextField>
            </Grid>

            <Grid item xs={3} lg={12} className='requestInput'>
              <CustomTextField select defaultValue='' label='About Important' id='custom-select' fullWidth className="customInput">
                <MenuItem value='' >
                  <em>Urgent</em>
                </MenuItem>
                <MenuItem value={"Asap"}>Asap</MenuItem>
                <MenuItem value={"No Matter"}>No Matter</MenuItem>
              </CustomTextField >
            </Grid>

            <Grid item xs={3} lg={12} className='requestInput'>
              <CustomTextField select defaultValue='' label='For Quantity' id='custom-select' fullWidth className="customInput" >
                <MenuItem value='' >
                  <em>Bulk</em>
                </MenuItem>
                <MenuItem value={"Many(>2)"}>Many</MenuItem>
                <MenuItem value={"Few(1,2)"}>Few(1,2)</MenuItem>
              </CustomTextField>
              <Button variant='contained' size='large' sx={{ mt: "12px" }}> Submit </Button>
            </Grid>
          </Grid>

          <Grid item xs={12} lg={8} > 
          <Card>
            <CardHeader title="Tools Requests" sx={{ fontSize: '20px', fontWeight: '600' }}/> 

            <DataGrid
                autoHeight
                rows={filteredData.length ? filteredData : data}
                columns={columns}
                disableRowSelectionOnClick
                pageSizeOptions={[7, 10, 25, 50]}
                paginationModel={paginationModel}
                columnVisibilityModel={hideNameColumn}
                onPaginationModelChange={setPaginationModel}
                onColumnVisibilityModelChange={newValue => setHideNameColumn(newValue)}
                slots={{ toolbar: QuickSearchToolbar }}
                    slotProps={{
                        baseButton: {
                          size: 'medium',
                          variant: 'outlined'
                        },
                        toolbar: {
                          value: searchText,
                          clearSearch: () => handleSearch(''),
                          onChange: event => handleSearch(event.target.value)
                        }
                      }}
            />
        </Card >
          </Grid>

        </Grid>


      </Card>
    </>
  )
}

export default TableStickyHeader

// ** React Imports
import { useState, useEffect } from 'react'

// ** MUI Components
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import { DataGrid } from '@mui/x-data-grid'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Third Party Imports
import axios from 'axios'

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'

// ** Utils Import
import { getInitials } from 'src/@core/utils/get-initials'
import { Button } from '@mui/material'
import DialogEditUserInfo from 'src/views/pages/dialog-examples/DialogEditUserInfo'

// ** renders name column
const renderName = row => {
  if (row.avatar) {
    return <CustomAvatar src={row.avatar} sx={{ mr: 2.5, width: 38, height: 38 }} />
  } else {
    return (
      <CustomAvatar
        skin='light'
        color={row.avatarColor || 'primary'}
        sx={{ mr: 2.5, width: 38, height: 38, fontSize: theme => theme.typography.body1.fontSize }}
      >
        {getInitials(row.name || 'John Doe')}
      </CustomAvatar>
    )
  }
}

const columns = [
  {
    flex: 0.1,
    field: 'type',
    minWidth: 220,
    headerName: 'Type',
    renderCell: ({ row }) => {
      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography noWrap sx={{ color: 'text.secondary', fontWeight: 500 }}>
              {row.type}
            </Typography>
          </Box>
        </Box>
      )
    }
  },
  {
    flex: 0.1,
    minWidth: 105,
    field: 'country',
    headerName: 'Country',
    renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.country}</Typography>
  },
  {
    flex: 0.1,
    field: 'information',
    minWidth: 400,
    minHeight: 200,
    sortable: true,
    headerName: 'Information',
    renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary',textAlign: "end" }}>{row.information}</Typography>
  },
  {
    flex: 0.1,
    minWidth: 150,
    field: 'login',
    headerName: 'Login',
    renderCell: ({ handleEditClickOpen }) => <Typography sx={{ color: 'text.secondary' }}><Button variant='contained' sx={{
      px: '8',
      mt: "4px"
  }} onClick={handleEditClickOpen}>Login Info</Button></Typography>
  },
  {
    flex: 0.1,
    minWidth: 100,
    sortable: false,
    field: 'price',
    headerName: 'Price',
    renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.price}</Typography>
  },
  {
    flex: 0.1,
    minWidth: 100,
    sortable: false,
    field: 'report',
    headerName: 'Report',
    renderCell: () => <Typography sx={{ color: 'text.secondary' }}><Button variant='contained'>Report</Button></Typography>
  },
  {
    flex: 0.1,
    minWidth: 100,
    sortable: false,
    field: 'date',
    headerName: 'Date',
    renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.date}</Typography>
  },
]

const AnalyticsProject = () => {


  const [openModal, setOpenModal] = useState(false); // State to control modal visibility

  const handleEditClickOpen = () => {
    console.log("modalOpen")
    setOpenModal(true); // Open the modal
  };
  
  // ** State
  const [data, setData] = useState([])
  const [value, setValue] = useState('')
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 5 })
  useEffect(() => {
    axios.get('/pages/profile-table', { params: { q: value } }).then(response => {
      setData(response.data)
    })
  }, [value])

  const handleFilter = val => {
    setValue(val)
  }

  return data ? (
    <Card>
      <CardHeader
        titleTypographyProps={{ sx: { mb: [2, 0] } }}
        action={<CustomTextField value={value} placeholder='Search' onChange={e => handleFilter(e.target.value)} />}
        sx={{
          py: 4,
          flexDirection: ['column', 'row'],
          '& .MuiCardHeader-action': { m: 0 },
          alignItems: ['flex-start', 'center']
        }}
      />
      <DataGrid
        autoHeight
        pagination
        rows={data}
        handleEditClickOpen={handleEditClickOpen}
        rowHeight={62}
        columns={columns}
        // checkboxSelection
        pageSizeOptions={[10,25,50,100]}
        disableRowSelectionOnClick
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
      />
      <DialogEditUserInfo show={openModal} setShow={setOpenModal} />
    </Card>
  ) : null
  
}

export default AnalyticsProject

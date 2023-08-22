// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import { DataGrid } from '@mui/x-data-grid'

import MenuItem from '@mui/material/MenuItem'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'
import QuickSearchToolbar from './Search'
// ** Third Party Components
import toast from 'react-hot-toast'

// ** Custom Components
import CustomChip from 'src/@core/components/mui/chip'
import CustomAvatar from 'src/@core/components/mui/avatar'

// ** Utils Import
import { getInitials } from 'src/@core/utils/get-initials'

// ** Data Import
import { rows } from './staticData'
import { Grid } from '@mui/material'
import AccModal from './AccModal'

// ** renders client column
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

const ViewTable = () => {
    // ** States
    const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 7 })
    const [hideNameColumn, setHideNameColumn] = useState({ full_name: true })
    const [searchText, setSearchText] = useState('')
    const [filteredData, setFilteredData] = useState([])
    const [data] = useState(rows)

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

        
        <Card>
            <CardHeader title="Tools Requests"/> 

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
        </>
    )
}

export default ViewTable

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
// ** Third Party Components
import toast from 'react-hot-toast'

// ** Custom Components
import CustomChip from 'src/@core/components/mui/chip'
import CustomAvatar from 'src/@core/components/mui/avatar'

// ** Utils Import
import { getInitials } from 'src/@core/utils/get-initials'

// ** Data Import
import { rows } from 'src/@fake-db/table/static-data'
import { Grid } from '@mui/material'

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


const WarningTable = () => {
    // ** States
    const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 7 })
    const [hideNameColumn, setHideNameColumn] = useState({ full_name: true })
    const [searchText, setSearchText] = useState('')
    const [filteredData, setFilteredData] = useState([])
    const [data] = useState(rows)

    const columns = [
        {
            flex: 0.175,
            minWidth: 120,
            headerName: 'ID',
            field: 'id',
            renderCell: params => (
                <Typography variant='body2' sx={{ color: 'text.primary' }}>
                   
                </Typography>
            )
        },
        {
            flex: 0.175,
            minWidth: 120,
            headerName: 'From',
            field: 'from',
            renderCell: params => (
                <Typography variant='body2' sx={{ color: 'text.primary' }}>
                    
                </Typography>
            )
        },
        {
            flex: 0.175,
            minWidth: 170,
            headerName: 'type',
            field: 'type',
            renderCell: params => (
                <Typography variant='body2' sx={{ color: 'text.primary',display: "flex",alignItems: "center" }}>
                
            </Typography>
            )
        },
        {
            flex: 0.175,
            minWidth: 120,
            headerName: 'Reasson',
            field: 'reason',
            renderCell: params => (
                <Typography variant='body2' sx={{ color: 'text.primary' }}>
                 
                </Typography>
            )
        },
        {
            flex: 0.175,
            minWidth: 120,
            headerName: 'Date',
            field: 'date',
            renderCell: params => (
                <Typography variant='body2' sx={{ color: 'text.primary' }}>
                   
                </Typography>

            )
        },
       
    ]

    return (
        <>

        
        <Card>
            <CardHeader title="Warnings"/> 

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
            />
        </Card >
        </>
    )
}

export default WarningTable

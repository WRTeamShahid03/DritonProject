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

const statusObj = {
    1: { title: 'current', color: 'primary' },
    2: { title: 'professional', color: 'success' },
    3: { title: 'rejected', color: 'error' },
    4: { title: 'resigned', color: 'warning' },
    5: { title: 'applied', color: 'info' }
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

const DatingTable = () => {
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
            headerName: 'Type',
            field: 'type',
            renderCell: params => (
                <Typography variant='body2' sx={{ color: 'text.primary' }}>
                    {params.row.type}
                </Typography>
            )
        },
        {
            flex: 0.175,
            minWidth: 120,
            headerName: 'Country',
            field: 'city',
            renderCell: params => (
                <Typography variant='body2' sx={{ color: 'text.primary' }}>
                    {params.row.city}
                </Typography>
            )
        },
        {
            flex: 2.5,
            minWidth: 120,
            headerName: 'Infprmation',
            field: 'information',
            renderCell: params => (
                <Typography variant='body2' sx={{ color: 'text.primary' }}>
                    {params.row.information}
                </Typography>
            )
        },
        {
            flex: 0.175,
            minWidth: 120,
            headerName: 'Price',
            field: 'price',
            renderCell: params => (
                <Typography variant='body2' sx={{ color: 'text.primary' }}>
                    {params.row.price}
                </Typography>
            )
        },
        {
            flex: 0.175,
            minWidth: 120,
            headerName: 'Seller',
            field: 'seller',
            renderCell: params => (
                <Button size='small' variant='outlined' color='primary' onClick={() => getFullName(params)}>
                    {params.row.seller}
                </Button>

            )
        },
        {
            flex: 0.175,
            minWidth: 120,
            headerName: 'Buy',
            field: 'buy',
            renderCell: params => (
                <Button size='small' variant='contained' color='success' onClick={() => getFullName(params)}>
                    Buy
                </Button>

            )
        },
        {
            flex: 0.175,
            minWidth: 120,
            headerName: 'Bulk',
            field: 'bulk',
            renderCell: params => (
                <Button size='small' variant='contained' color='primary' onClick={() => getFullName(params)}>
                    +
                </Button>
            )
        },
    ]

    return (
        <>

        <Card style={{ 
            margin: "20px 0",
            marginBottom: "34px",
            padding: "10px 0px"
         }}>
            <CardHeader  title="Most Comman Tools"/>
        <Grid item xs={12} sm={6} md={6} xl={12} style={{ 
                margin: "2px 20px"
             }}> 
            <Button size='small' variant='contained' color='primary' style={{ 
                margin: "2px 8px"
             }}>
                Zoosk(Unpaid)
            </Button>
            <Button size='small' variant='contained' color='primary' style={{ 
                margin: "2px 8px"
             }}>
                Zoosk(Unpaid)
            </Button>
            <Button size='small' variant='contained' color='primary' style={{ 
                margin: "2px 8px"
             }}>
                Ourtime(Paid)
            </Button>
            <Button size='small' variant='contained' color='primary' style={{ 
                margin: "2px 8px"
             }}>
                Ourtime(Unpaid)
            </Button>
            <Button size='small' variant='contained' color='primary' style={{ 
                margin: "2px 8px"
             }}>
                Match(Unpaid)
            </Button>
            <Button size='small' variant='contained' color='primary' style={{ 
                margin: "2px 8px"
             }}>
                POF(Unpaid)
            </Button>
            <Button size='small' variant='contained' color='primary' style={{ 
                margin: "2px 8px"
             }}>
                eDate(Unpaid)
            </Button>
            <Button size='small' variant='contained' color='primary' style={{ 
                margin: "2px 8px"
             }}>
                Zoosk(Unpaid)
            </Button>
            <Button size='small' variant='contained' color='primary' style={{ 
                margin: "2px 8px"
             }}>
                Zoosk(Unpaid)
            </Button>
            <Button size='small' variant='contained' color='primary' style={{ 
                margin: "2px 8px"
             }}>
                Ourtime(Paid)
            </Button>
            <Button size='small' variant='contained' color='primary' style={{ 
                margin: "2px 8px"
             }}>
                Ourtime(Unpaid)
            </Button>
            <Button size='small' variant='contained' color='primary' style={{ 
                margin: "2px 8px"
             }}>
                Match(Unpaid)
            </Button>
            <Button size='small' variant='contained' color='primary' style={{ 
                margin: "2px 8px"
             }}>
                POF(Unpaid)
            </Button>
            <Button size='small' variant='contained' color='primary' style={{ 
                margin: "2px 8px"
             }}>
                eDate(Unpaid)
            </Button>

            </Grid>
        </Card>
       
        <Card>
            <CardHeader title="Dating"/> 
            <div className='container'>
                <Grid container spacing={12} className='demo-space-x' style={{display: "flex", justifyContent:"center", padding:"30px 0"}}>
                    <Grid item xs={3}>
                        <CustomTextField select defaultValue='' label='Tool Type' id='custom-select'  fullWidth>
                            <MenuItem value='' >
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </CustomTextField>
                    </Grid>
                    <Grid item xs={3}>
                        <CustomTextField select defaultValue='' label='Country' id='custom-select' fullWidth>
                            <MenuItem value='' >
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </CustomTextField>
                    </Grid>
                    <Grid item xs={3}>
                        <CustomTextField select defaultValue='' label='Seller' id='custom-select' fullWidth>
                            <MenuItem value='' >
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </CustomTextField>
                    </Grid>
                </Grid>
            </div>




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

export default DatingTable

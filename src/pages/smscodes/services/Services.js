// ** React Import
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import { DataGrid } from '@mui/x-data-grid'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import { IconButton } from '@mui/material'
import { Icon } from '@iconify/react'

// ** Custom Components
import CustomChip from 'src/@core/components/mui/chip'
import CustomAvatar from 'src/@core/components/mui/avatar'

// ** Utils Import
import { getInitials } from 'src/@core/utils/get-initials'
// import Icon from 'src/@core/components/icon'

// ** Data Import
// import { rows } from 'src/@fake-db/table/static-data'
import { rows } from './staticData'
import { Button, Grid, MenuItem } from '@mui/material'
import CustomTextField from 'src/@core/components/mui/text-field'
import SMSModal from '../SMSModal'

// ** renders client column
const renderClient = params => {
    const { row } = params
    const stateNum = Math.floor(Math.random() * 6)
    const states = ['success', 'error', 'warning', 'info', 'primary', 'secondary']
    const color = states[stateNum]
    if (row.avatar.length) {
        return ""
    } else {
        return (
            <CustomAvatar skin='light' color={color} sx={{ mr: 3, fontSize: '.8rem', width: '1.875rem', height: '1.875rem' }}>
                {getInitials(row.full_name ? row.full_name : 'John Doe')}
            </CustomAvatar>
        )
    }
}



const columns = [
    {
        flex: 0.175,
        minWidth: 120,
        field: 'services',
        headerName: 'Services',
        renderCell: params => {
            const { row } = params

            return (
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {renderClient(params)}
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography noWrap variant='body2' sx={{ color: 'text.primary', fontWeight: 600 }}>
                            {row.service}
                        </Typography>
                    </Box>
                </Box>
            )
        }
    },

    {
        flex: 0.175,
        minWidth: 120,
        field: 'number',
        headerName: 'Number',
        renderCell: params => (
            <Typography variant='body2' sx={{ color: 'text.primary' }}>
                {params.row.number}
            </Typography>
        )
    },
    {
        flex: 0.175,
        field: 'sms',
        minWidth: 280,
        headerName: 'SMS',
        renderCell: params => (
            <Typography variant='body2' sx={{ color: 'text.primary',display: "flex",alignItems: "center" }}>
                
                {params.row.sms.slice(0,32)+ " " + "..."}  <SMSModal sms={params.row.sms}/>
            </Typography>
        )
    },
    {
        flex: 0.175,
        minWidth: 120,
        field: 'status',
        headerName: 'Status',
        renderCell: ()=> {

            return (
                <Button variant='contained' size='small'>Reuse</Button>
            )
        }
    },
    {
        flex: 0.175,
        type: 'date',
        minWidth: 120,
        headerName: 'Date',
        field: 'start_date',
        valueGetter: params => new Date(params.value),
        renderCell: params => (
            <Typography variant='body2' sx={{ color: 'text.primary' }}>
                {params.row.date}
            </Typography>
        )
    },
]

const TableSelection = () => {
    // ** State
    const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 7 })
    const [services, setServices] = useState([])
    const [country, setCountry] = useState([])
    const [price, setPrice] = useState([])

    const handleChangeService = event => {
        setServices(event.target.value)
    }
    const handleChangeCountry = event => {
        setCountry(event.target.value)
    }
    const handleChangePrice = event => {
        setPrice(event.target.value)
    }

    const ITEM_HEIGHT = 48
    const ITEM_PADDING_TOP = 8

    const MenuProps = {
        PaperProps: {
            style: {
                width: 250,
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP
            }
        }
    }
    const servicesMenu = [
        '168Com',
        '2game',
      ]
    const countryMenu = [
        'India',
        'United Kingdom',
      ]
    const priceMenu = [
        '0',
        '1',
      ]

    return (
        <Card>
            <CardHeader title='SMS Services' />

            <Grid container spacing={0}>

                <Grid spacing={0} className='demo-space-x' item xs={6} sm={4} lg={4} style={{ display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "center", padding: "0px 30px" }}>

                    <CustomTextField
                        className="smsInput"
                        select
                        fullWidth
                        label='Select Service'
                        id='select-multiple-placeholder'
                        SelectProps={{
                            MenuProps,
                            multiple: true,
                            displayEmpty: true,
                            value: services,
                            onChange: e => handleChangeService(e),
                            inputProps: { 'aria-label': 'Without label' },
                            renderValue: selected => {
                                if (selected.length === 0) {
                                    return <em> <IconButton  sx={{ ml: -2.75, }} >
                                    <Icon fontSize='1.5rem' icon="icon-park-outline:setting-one" color='grey' />
                                </IconButton>Match</em>
                                }

                                return selected.join(', ')
                            }
                        }}
                    >
                        {servicesMenu.map(servicesMenu => (
                            <MenuItem key={servicesMenu} value={servicesMenu}>
                                {servicesMenu}
                            </MenuItem>
                        ))}
                    </CustomTextField>

                    <CustomTextField
                     className="smsInput"
                        select
                        fullWidth
                        label='Select Country'
                        id='select-multiple-placeholder'
                        SelectProps={{
                            MenuProps,
                            multiple: true,
                            displayEmpty: true,
                            value: country,
                            onChange: e => handleChangeCountry(e),
                            inputProps: { 'aria-label': 'Without label' },
                            renderValue: selected => {
                                if (selected.length === 0) {
                                    return <em> <IconButton  sx={{ ml: -2.75, }} >
                                    <Icon fontSize='1.5rem' icon="ph:flag-fill" color='grey' />
                                </IconButton>United Kingdom</em>
                                }

                                return selected.join(', ')
                            }
                        }}
                    >
                        {countryMenu.map(countryMenu => (
                            <MenuItem key={countryMenu} value={countryMenu}>
                                {countryMenu}
                            </MenuItem>
                        ))}
                    </CustomTextField>

                    <CustomTextField
                     className="smsInput"
                        select
                        fullWidth
                        label='Price'
                        id='select-multiple-placeholder'
                        SelectProps={{
                            MenuProps,
                            multiple: true,
                            displayEmpty: true,
                            value: price,
                            onChange: e => handleChangePrice(e),
                            inputProps: { 'aria-label': 'Without label' },
                            renderValue: selected => {
                                if (selected.length === 0) {
                                    return <em> <IconButton  sx={{ ml: -2.75, }} >
                                    <Icon fontSize='1.5rem' icon="bxs:dollar-circle" color='grey' />
                                </IconButton>0</em>
                                }

                                return selected.join(', ')
                            }
                        }}
                    >
                        {priceMenu.map(priceMenu => (
                            <MenuItem key={priceMenu} value={priceMenu}>
                                {priceMenu}
                            </MenuItem>
                        ))}
                    </CustomTextField>

                    <Button variant='contained' color='primary' sx={{ my:"20px",width: "100%",fontSize: "18px" }} className='smsBtn'>
                        Get Code <IconButton  sx={{ ml: 1, }} >
                                    <Icon fontSize='1.5rem' icon="tabler:device-mobile-message" color='white' />
                                </IconButton>
                    </Button>
                </Grid>

                <Grid item xs={6} sm={8} lg={8}>

                    <Accordion sx={{ borderRadius: "5px", boxShadow: "0 6px 15px -7px rgba(255,159,67,.4)", marginBottom: "20px" }}>
                        <AccordionSummary
                            id='panel-header-1'
                            aria-controls='panel-content-1'
                            expandIcon={<Icon fontSize='1.25rem' icon='tabler:chevron-down' />}
                        >
                            <Typography sx={{ color: '#ff9f43' }} className="dropDeatails"> IMPORTANT</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography sx={{
                                color: '#ff9f43!important',
                                p: "8px", backgroundColor: "rgba(255,159,67,.12)!important;", my: "15px", borderRadius: "5px"
                            }} className="dropDeatails">
                                Select the service you want to USE. IMPORTANT: If you have any country you like to have on list request it through ticket!
                            </Typography>
                            <Typography sx={{
                                color: '#ff9f43!important',
                                p: "8px", backgroundColor: "rgba(255,159,67,.12)!important;", my: "15px", borderRadius: "5px"
                            }} className="dropDeatails">
                                Your number is VALID for 30 minutes, if no SMS received you can REFUND it, if SMS received will be not possible to REFUND.
                            </Typography>

                            <Typography sx={{
                                color: '#ea5455!important',
                                p: "8px", backgroundColor: "rgba(234,84,85,.12)!important;", my: "15px", borderRadius: "5px",
                            }} className="dropDeatails">
                                You need to write phone number manually in your site, do not copy paste this don't work.
                            </Typography>
                            <Typography sx={{
                                color: '#ea5455!important',
                                p: "8px", backgroundColor: "rgba(234,84,85,.12)!important;", my: "15px", borderRadius: "5px",
                            }} className="dropDeatails">
                                If you don't receive the code, try to resend again if you don't receive even on second try, wait for 30 minute and then you will get refund if no code received.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <DataGrid
                        autoHeight
                        rows={rows}
                        columns={columns}
                        pageSizeOptions={[7, 10, 25, 50]}
                        paginationModel={paginationModel}
                        onPaginationModelChange={setPaginationModel}
                    />
                </Grid>
            </Grid>
        </Card>
    )
}

export default TableSelection

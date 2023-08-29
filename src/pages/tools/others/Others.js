// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import { Button, Card, CardHeader, Grid,  MenuItem } from '@mui/material'
import CustomTextField from 'src/@core/components/mui/text-field'
import { Box } from '@mui/system'
import IconButton from '@mui/material/IconButton'

import Icon from 'src/@core/components/icon'

const createData = (type, country, info, price, seller) => {
    return { type, country, info, price, seller }
}

const rows = [
    createData('Foap(Paid)', "US", "Coins = 40 , published_photos_count = 0 , sex = female , total_photos_sold = 0 , uploaded_photos_count = 20 , paypal_verified_account = True", "10.00", "Magnus0"),
    createData('Foap(Paid)', "US", "Coins = 40 , published_photos_count = 0 , sex = female , total_photos_sold = 0 , uploaded_photos_count = 20 , paypal_verified_account = False", "10.00", "Magnus0"),
]

const Others = props => {
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
              JetBlue
            </Button>
            <Button size='small' variant='contained' color='primary' style={{ 
                margin: "2px 8px"
             }}>
              ChatGPT
            </Button>
            <Button size='small' variant='contained' color='primary' style={{ 
                margin: "2px 8px"
             }}>
              TextNow
            </Button>

            </Grid>
        </Card>

        <Card>

            <CardHeader title="Others" />

            <div className='container'>
                <Grid container spacing={12} className='demo-space-x' style={{ display: "flex", justifyContent: "center", padding: "30px 0" }}>
                    <Grid item xs={3}>
                        <CustomTextField select defaultValue='' label='Tool Type' id='custom-select' fullWidth>
                            <MenuItem value={"YouTube"}>YouTube</MenuItem>
                            <MenuItem value={"Instagram"}>Instagram</MenuItem>
                        </CustomTextField>
                    </Grid>
                    <Grid item xs={3}>
                        <CustomTextField select defaultValue='' label='Country' id='custom-select' fullWidth>
                            <MenuItem value={"Global"}>Global</MenuItem>
                            <MenuItem value={"N/A"}>N/A</MenuItem>
                        </CustomTextField>
                    </Grid>
                    <Grid item xs={3}>
                        <CustomTextField select defaultValue='' label='Seller' id='custom-select' fullWidth>
                            <MenuItem value={"Cheaper"}>Cheaper</MenuItem>
                            <MenuItem value={"VIP"}>VIP</MenuItem>
                        </CustomTextField>
                    </Grid>
                </Grid>


            </div>
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
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size='small' aria-label='a dense table'>
                    <TableHead>
                        <TableRow>
                            <TableCell>TYPE</TableCell>
                            <TableCell align='left'>COUNTRY</TableCell>
                            <TableCell align='left'>INFORMATION</TableCell>
                            <TableCell align='left'>PRICE</TableCell>
                            <TableCell align='left'>SELLER</TableCell>
                            <TableCell align='left'>BUY</TableCell>
                            <TableCell align='left'>BULK</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow key={row.info} sx={{ '&:last-of-type  td, &:last-of-type  th': { border: 0 } }}>


                                <TableCell component='th' scope='row'>
                                    {row.type}
                                </TableCell>
                                <TableCell align='left'>{row.country}</TableCell>
                                <TableCell align='left'>{row.info}</TableCell>
                                <TableCell align='left'>{row.price}</TableCell>
                                <TableCell align='left'>
                                <Button  size="small">{row.seller}</Button>
                                </TableCell>

                                <TableCell align='left'>
                                    <Button variant='contained' color='success' size="small">Buy</Button>
                                </TableCell>
                                <TableCell align='left'>
                                    <Button variant='contained' color='success' size="small">+</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Card>
        </>
    )
}

export default Others

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
import BuyModal from '../BuyModal'

const createData = (type, country, info, price, seller) => {
    return { type, country, info, price, seller }
}

const rows = [
    createData('Spamming', "USA", "how to spam how to edit scampage how to upload how to blast", "150.00", "Mizgu44"),
    createData('SpammingLearn', "USA", "LEARN SPAMING FOR BANK AND EMAIL PASSWORD HOW TO SPAM STEEP BY STEEP", "180.00", "lingur"),
]

const Tutorials = props => {
    return (
        <>

        <Card>

            <CardHeader title="Tutorials" sx={{ fontSize: '20px', fontWeight: '600' }}/>

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
                                <BuyModal/>
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

export default Tutorials

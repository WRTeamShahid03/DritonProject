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

const createData = (ip, agent, date,) => {
    return { ip, agent, date, }
}

const rows = [
    createData("103.30.226.26","Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36","2023-08-28 06:15:55"),
    createData("103.30.226.26","Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36","2023-08-28 11:34:57")
]

const Logs = props => {
    return (

        <Card>

            <CardHeader title="My Login Logs" />

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
                            <TableCell>IP</TableCell>
                            <TableCell align='left'>USER AGENT</TableCell>
                            <TableCell align='left'>DATE</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow key={row.info} sx={{ '&:last-of-type  td, &:last-of-type  th': { border: 0 } }}>


                                <TableCell component='th' scope='row'>
                                    {row.ip}
                                </TableCell>
                                <TableCell align='left'>{row.agent}</TableCell>
                                <TableCell align='left'>{row.date}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Card>
    )
}

export default Logs

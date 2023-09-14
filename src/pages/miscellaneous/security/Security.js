// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import { Button, Card, CardHeader, Typography } from '@mui/material'
import CustomTextField from 'src/@core/components/mui/text-field'
import { Box } from '@mui/system'
import IconButton from '@mui/material/IconButton'

import Icon from 'src/@core/components/icon'

import scanner from '../../../../public/images/scanner.png'

const createData = (type, country, info, price, seller) => {
    return { type, country, info, price, seller }
}

const rows = [
    // createData('Edate(UNPAID)', "USA", "Gender = Man , AGE = 35 , City = Canoga Park , State = California Country = United States", "6.00", "BishopX"),
    // createData('EliteSingles(Unpaid)', "Global", "EliteSingles Unpaid - Age: 48, Gender:MALE - Seeking:FEMALE, Location:Bridgeport/OH/43912", "4.00", "crown27"),
]

const Security = () => {
    return (

        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>

            <Card sx={{ p: "0 22px" }}>
                <CardHeader title="Two factor authentication" sx={{ p: "22px 0px" }} />
                <Typography sx={{ mt: "-10px" }}>Greatly increase security by requiring both your password and another form of authentication.</Typography>

                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: 'column', gap: "12px", m: "20px 0" }}>
                    <Typography sx={{ fontSize: "22px", fontWeight: "600" }}> Status : 2FA is currently disabled </Typography>
                    <IconButton>
                        <Icon fontSize='10rem' color="black" icon='vaadin:qrcode' />
                    </IconButton>

                    <hr style={{ width: "100% ", opacity: '0.3', margin: "10px 0", color: "grey" }} />

                    <Typography> Auth Code: DP4PIZWDJ4JFC6D7</Typography>

                    <CustomTextField defaultValue='' placeholder="6 Digit authentication code" id='custom-select' fullWidth sx={{ mt: "10px" }}/>
                    
                    <Button variant='contained' color="success">Enable 2FA</Button>
                </Box>
            </Card>
        </Box>
    )
}

export default Security

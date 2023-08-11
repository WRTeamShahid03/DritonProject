// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'

const mostSoldedData = [
  {
    id: 1,
    type: "eDate(UnPaid)"
  },
  {
    id: 2,
    type: "Ourtime(UnPaid)"
  },
  {
    id: 3,
    type: "Match(Unpaid)"
  },
  {
    id: 4,
    type: "Zoosk(Unpaid)"
  },
  {
    id: 5,
    type: "OurTime(Paid)"
  },
  {
    id: 6,
    type: "ChristianMingle(UnPaid)"
  },
  {
    id: 7,
    type: "EliteSingles(Unpaid)"
  },
  {
    id: 8,
    type: "POF(Unpaid)"
  },
  {
    id: 9,
    type: "RDP Carded"
  },
  {
    id: 10,
    type: "SilverSingles(Unpaid)"
  },
  {
    id: 11,
    type: "Chemistry(Unpaid)"
  },
  {
    id: 12,
    type: "Adultfriendfinder(UnPaid)"
  },
  {
    id: 13,
    type: "Mingle2(Unpaid)"
  },
  {
    id: 14,
    type: "NordVPN(Paid)"
  },
  {
    id: 15,
    type: "BeNaughty(Paid)"
  },
  {
    id: 16,
    type: "DriverLicense"
  },
  {
    id: 17,
    type: "Cpanel"
  },
  {
    id: 18,
    type: "Adultfriendfinder(PAID)"
  },
  {
    id: 19,
    type: "Nord VPN"
  },
  {
    id: 20,
    type: "Elitesingles(Paid)"
  },
  {
    id: 21,
    type: "RDP Cracked"
  },
  {
    id: 22,
    type: "firstdate(Paid)"
  },
  {
    id: 23,
    type: "Hotspotshield"
  },
  {
    id: 24,
    type: "EDATE(Paid)"
  },
  {
    id: 25,
    type: "Seeking(Paid)"
  },
  {
    id: 26,
    type: "Textnow"
  },
  {
    id: 27,
    type: "Google Voice"
  },
  {
    id: 28,
    type: "FirstDate(Unpaid)"
  },
  {
    id: 29,
    type: "IPVanishVPN(Premium)"
  },
  {
    id: 30,
    type: "webmail"
  },
  {
    id: 31,
    type: "Match-Usa(UnPaid)"
  },
  {
    id: 32,
    type: "C-Date(Paid)"
  },
  {
    id: 33,
    type: "PASSPORT"
  },
  {
    id: 34,
    type: "Jdate(Unpaid)"
  },
  {
    id: 35,
    type: "Emehive(UNPAID)"
  }
];

const TableBasic = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead sx={{
          backgroundColor: "#f3f2f7",
          border: "0 solid",
          mx: "8px",
          fontSize: "14px",
        }} >
          <TableRow >
            <TableCell className='toolType'>TOOL TYPE</TableCell>
          </TableRow>
        </TableHead>

        {
          mostSoldedData.map((ele)=>{
            return <>
              <TableHead sx={{
          border: "0 solid",
          color: "#5e5873 !important",
          fontSize: "14px",
        }} key={ele.id} >
          <TableRow >
            <TableCell sx={{ 
              color: "lightpurple",
              fontSize: "16",
              fontWeight: 'bold',
              fontFamily: 'sans-serif' ,
              mx: "8  "
             }}>{ele.type}</TableCell>
          </TableRow>
        </TableHead>
            </>
          })
        }
        
      </Table>
    </TableContainer>
  )
}

export default TableBasic


// ** MUI Imports
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

const CardImgTop = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant='h5' sx={{ mb: 2 }}>
        SMS Service Expanded
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 2  }}>
        We are pleased to announce you that now we have expanded our SMS Services. Now you have option to re-use number for second SMS code(that is not available always sometime, re-use service get's stopped immediately after first use) also you have option for Renting Number with monthly price for Single Service or Multiple Service.
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CardImgTop

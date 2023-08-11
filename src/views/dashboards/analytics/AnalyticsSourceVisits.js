// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import OptionsMenu from 'src/@core/components/option-menu'



const data = [
  {
    type: 'UnPaid',
    icon: 'tabler:shadow',
    title: 'Ourtime',
  },
  {
    type: 'UnPaid',
    icon: 'tabler:shadow',
    title: 'Match',
  },
  {
    type: 'Paid',
    icon: 'tabler:shadow',
    title: 'Edate',
  },
  {
    type: 'Unpaid',
    icon: 'tabler:shadow',
    title: 'ChristianMingle',
  },

  
];


const AnalyticsSourceVisits = () => {
  return (
    <Card>
      <CardHeader
        title='Most Solded'
        subheader='TOOL TYPE'
        action={
          <OptionsMenu
            options={['Last Week', 'Last Month', 'Last Year']}
            iconButtonProps={{ size: 'small', sx: { color: 'text.disabled' } }}
          />
        }
      />
      <CardContent>
        {data.map((item, index) => {
          return (
            <Box
              key={index}
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: index !== data.length - 1 ? [6.25, 6.25, 5.5, 6.25] : undefined
              }}
            >
              <Avatar variant='rounded' sx={{ mr: 4, width: 34, height: 34 }}>
                <Icon icon={item.icon} />
              </Avatar>
              <Box
                sx={{
                  rowGap: 1,
                  columnGap: 4,
                  width: '100%',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <Typography variant='h6'>{item.title}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' ,mt: 4}}>
                  <Typography sx={{ mr: 4, color: 'text.secondary' }}>{item.type}</Typography>
                </Box>
              </Box>
            </Box>
          )
        })}
      </CardContent>
    </Card>
  )
}

export default AnalyticsSourceVisits

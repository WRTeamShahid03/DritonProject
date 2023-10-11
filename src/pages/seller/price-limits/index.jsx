// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Tab from '@mui/material/Tab'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import MuiTabList from '@mui/lab/TabList'
import Breadcrum from 'src/pages/components/Breadcrum'
import { Box } from '@mui/system'

// ** MUI Imports
import { Card, Grid } from '@mui/material'
import Icon from 'src/@core/components/icon'
import Tab1 from './Tab1'
import Tab4 from './Tab4'
import Tab3 from './Tab3'
import Tab2 from './Tab2'

// Styled TabList component
const TabList = styled(MuiTabList)(({ theme }) => ({
  borderBottom: '0 !important',
  '&, & .MuiTabs-scroller': {
    boxSizing: 'content-box',
    padding: theme.spacing(1.25, 1.25, 2),
    margin: `${theme.spacing(-1.25, -1.25, -2)} !important`
  },
  '& .MuiTabs-indicator': {
    display: 'none'
  },
  '& .Mui-selected': {
    boxShadow: theme.shadows[2],
    backgroundColor: theme.palette.primary.main,
    color: `${theme.palette.common.white} !important`
  },
  '& .MuiTab-root': {
    lineHeight: 1,
    borderRadius: theme.shape.borderRadius,
    '&:hover': {
      color: theme.palette.primary.main
    }
  }
}))

const Index = () => {
  // ** State
  const [value, setValue] = useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <>
    <Box id='priceLimits'>

    
      <Breadcrum title='Price Limits' />
      <Card sx={{ p: '22px' }}>

        <Typography sx={{ fontSize: '20px', fontWeight: '600' }} >Add Tool</Typography>
        <Box sx={{ mt: '20px' }}>

          <TabContext value={value}>
            <TabList onChange={handleChange} aria-label='customized tabs example'>
              <Tab value='1' label='Dating' icon={<Icon icon='solar:heart-outline' />} />
              <Tab value='2' label='Stuff & RDP' icon={<Icon icon='solar:server-outline' />} />
              <Tab value='3' label='Security' icon={<Icon icon='iconamoon:shield-light' />} />
              <Tab value='4' label='Other' icon={<Icon icon='solar:layers-outline' />} />
            </TabList>
            <TabPanel value='1'>
              <Tab1 />
            </TabPanel>
            <TabPanel value='2'>
              <Tab2 />
            </TabPanel>
            <TabPanel value='3'>
              <Tab3 />
            </TabPanel>
            <TabPanel value='4'>
              <Tab4 />
            </TabPanel>
          </TabContext>
        </Box>

      </Card>
      </Box>
    </>

  )
}

export default Index

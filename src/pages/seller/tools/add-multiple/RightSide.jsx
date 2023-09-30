import React, { useState } from 'react'
import InputAdornment from '@mui/material/InputAdornment'
import Icon from 'src/@core/components/icon'
import Tab from '@mui/material/Tab'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import TabComponent from './TabComponent'
import { Badge } from '@mui/material'
import { Box } from '@mui/system'

const RightSide = () => {
    // ** State
    const [value, setValue] = useState('1')

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    return (
        <>
            <Box id='addMultiRightSide'>


                <TabContext value={value}>
                    <TabList onChange={handleChange} aria-label='nav tabs example' >

                        <Tab value='1' component='a' label='Totals' href='/drafts' onClick={e => e.preventDefault()} /><Badge badgeContent={4} color='primary'>
                        </Badge>

                        <Tab value='2' component='a' label='Added' href='/trash' onClick={e => e.preventDefault()} /><Badge badgeContent={4} color='success'>
                        </Badge>

                        <Tab value='3' component='a' label='Duplicate' href='/spam' onClick={e => e.preventDefault()} /><Badge badgeContent={4} color='warning'>
                        </Badge>

                        <Tab value='4' component='a' label='Invalid' href='/spam' onClick={e => e.preventDefault()} /><Badge badgeContent={4} color='error'>
                        </Badge>

                        <Tab value='4' component='a' label='Limit' href='/spam' onClick={e => e.preventDefault()} /><Badge badgeContent={4} color='info'>
                        </Badge>
                    </TabList>

                    <TabPanel value='1'>

                    </TabPanel>

                </TabContext>
            </Box>
        </>
    )
}

export default RightSide

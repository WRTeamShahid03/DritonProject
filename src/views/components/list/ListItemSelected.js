// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import List from '@mui/material/List'
import Avatar from '@mui/material/Avatar'
import ListItem from '@mui/material/ListItem'
import IconButton from '@mui/material/IconButton'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const ListItemSelected = () => {
  // ** State
  const [selectedIndex, setSelectedIndex] = useState(1)

  const handleListItemClick = index => {
    setSelectedIndex(index)
  }

  return (
    <List>
      <ListItem disablePadding>
        <ListItemButton selected={selectedIndex === 0} onClick={() => handleListItemClick(0)}>

          <ListItemText primary='STRONGTOOLS.GA' />
          <ListItemSecondaryAction>
            <IconButton edge='end'>
              <Icon icon='tabler:world-www' fontSize={20} />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton selected={selectedIndex === 1} onClick={() => handleListItemClick(1)}>
       
          <ListItemText primary='STRONGTOOLS.ME' />
          <ListItemSecondaryAction>
            <IconButton edge='end'>
              <Icon icon='tabler:world-www' fontSize={20} />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton selected={selectedIndex === 2} onClick={() => handleListItemClick(2)}>
          
          <ListItemText primary='STRONGTOOLS.ML' />
          <ListItemSecondaryAction>
            <IconButton edge='end'>
              <Icon icon='tabler:world-www' fontSize={20} />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton selected={selectedIndex === 3} onClick={() => handleListItemClick(3)}>
        
          <ListItemText primary='STRONGTOOLS.CC' />
          <ListItemSecondaryAction>
            <IconButton edge='end'>
              <Icon icon='tabler:world-www' fontSize={20} />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton selected={selectedIndex === 4} onClick={() => handleListItemClick(4)}>
        
          <ListItemText primary='STRONGTOOLSDOMAINS.COM' />
          <ListItemSecondaryAction>
            <IconButton edge='end'>
              <Icon icon='tabler:world-www' fontSize={20} />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItemButton>
      </ListItem>
    </List>
  )
}

export default ListItemSelected

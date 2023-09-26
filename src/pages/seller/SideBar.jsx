import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AdjustIcon from '@mui/icons-material/Adjust';

import navLogo from '../../@core/Assets/Images/logo.png'
import medalImg from '../../@core/Assets/Images/badge.svg'

// Material ui icons 

import HomeIcon from '@mui/icons-material/Home';
import LayersIcon from '@mui/icons-material/Layers';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import WarningIcon from '@mui/icons-material/Warning';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import TelegramIcon from '@mui/icons-material/Telegram';
import SettingsIcon from '@mui/icons-material/Settings';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddBoxIcon from '@mui/icons-material/AddBox';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';


import LayoutAppBar from './LayoutAppBa';
import Breadcrum from '../components/Breadcrum';

import { Button, Card, CardHeader, Grid } from '@mui/material';

import {
  Collapse,
} from '@mui/material';

import {
  ExpandLess as ExpandLessIcon,
  ExpandMore as ExpandMoreIcon,
  PercentRounded,
  ShoppingCart,
  StarBorderSharp,
  StartOutlined,
  TrendingUp,
} from '@mui/icons-material';
import InformationModal from './InformationModal';

const drawerWidth = 260;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({

  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `80px`, // Set the width to 100px when closed
  [theme.breakpoints.up('sm')]: {
    width: `80px`, // Set the width to 100px when closed for larger screens as well
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function SideBar({ children }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [toolsOpen, setToolsOpen] = React.useState(false);


  const handleToolsClick = () => {
    setToolsOpen(!toolsOpen);
  };

  return (

    <Box sx={{ display: 'flex', fontFamily: 'Montserrat' }} >
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{
        background: '#f8f7fa',
        boxShadow: 'none',
      }}>
        <Toolbar sx={{
          background: '#f8f7fa',
          boxShadow: 'none',
        }}>
          <IconButton
            color="#403f44"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <ChevronRightIcon />
          </IconButton>
          <LayoutAppBar />
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open}>
        <DrawerHeader sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: '12px',
          alignItems: 'center',
          p: '0px 12px',

        }}>
          <Box className="logo">
            <img src={navLogo.src} alt="" width={30} />
          </Box>
          <Box >
            <Typography variant='span' sx={{ color: '#7367f0', fontSize: "1.45rem", fontWeight: "600" }}>Strongtool</Typography>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </Box>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 38,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  ml: open ? 0 : 4,
                  ml: open ? 0 : 4, mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </List>

        {/* Tools List Item with Dropdown */}
        <List>
          <ListItem disablePadding>
            <ListItemButton
              onClick={handleToolsClick}
              sx={{
                minHeight: 38,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 30,
                  ml: open ? 0 : 4,
                  ml: open ? 0 : 4, mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <LayersIcon />
              </ListItemIcon>
              <ListItemText primary="Tools" sx={{ opacity: open ? 1 : 0 }} />
              {toolsOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </ListItemButton>
          </ListItem>
          <Collapse in={toolsOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                sx={{
                  minHeight: 38,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    ml: open ? 0 : 4, mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <ShoppingBagIcon />
                </ListItemIcon>
                <ListItemText primary="Solds" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
              <ListItemButton
                sx={{
                  minHeight: 38,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    ml: open ? 0 : 4, mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <ShoppingCartIcon />
                </ListItemIcon>
                <ListItemText primary="Unsolds" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
              <ListItemButton
                sx={{
                  minHeight: 38,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    ml: open ? 0 : 4, mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <AddBoxIcon />
                </ListItemIcon>
                <ListItemText primary="Add Single" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
              <ListItemButton
                sx={{
                  minHeight: 38,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    ml: open ? 0 : 4, mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <AddCircleIcon />
                </ListItemIcon>
                <ListItemText primary="Add Multiple" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </List>
          </Collapse>
        </List>

        <List>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 38,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  ml: open ? 0 : 4,
                  ml: open ? 0 : 4, mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                < TrackChangesIcon />
              </ListItemIcon>
              <ListItemText primary="Tools Requests" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </List>

        <List>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 38,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  ml: open ? 0 : 4,
                  justifyContent: 'center',
                }}
              >
                <PersonalVideoIcon />
              </ListItemIcon>
              <ListItemText primary="Price Limits" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </List>

        <List>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 38,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  ml: open ? 0 : 4,
                  justifyContent: 'center',
                }}
              >
                <WarningIcon />
              </ListItemIcon>
              <ListItemText primary="Reports" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </List>

        <List>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 38,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  ml: open ? 0 : 4, mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <PersonAddAltIcon />
              </ListItemIcon>
              <ListItemText primary="Warnings" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </List>

        <List>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 38,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  ml: open ? 0 : 4, mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <AttachMoneyIcon />
              </ListItemIcon>
              <ListItemText primary="Payouts" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </List>

        <List>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 38,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  ml: open ? 0 : 4, mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <AutoStoriesIcon />
              </ListItemIcon>
              <ListItemText primary="Rules" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </List>

        <List>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 38,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  ml: open ? 0 : 4, mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <TelegramIcon />
              </ListItemIcon>
              <ListItemText primary="Telegram" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </List>

        <List>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 38,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  ml: open ? 0 : 4, mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <TelegramIcon />
              </ListItemIcon>
              <ListItemText primary="Seller Group" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </List>

        <List>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 38,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  ml: open ? 0 : 4, mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </List>

        <List>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 38,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  ml: open ? 0 : 4, mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <KeyboardDoubleArrowLeftIcon />
              </ListItemIcon>
              <ListItemText primary="Back" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </List>

        <Divider />
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, }}>
        {children}
      </Box>
      {/* // footer */}
    </Box >
  );
}
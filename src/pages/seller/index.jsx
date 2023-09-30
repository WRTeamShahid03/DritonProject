import React from 'react'
import Breadcrum from '../components/Breadcrum'
import { Button, Card, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import medalImg from '../../@core/Assets/Images/badge.svg'

import ViewInArIcon from '@mui/icons-material/ViewInAr';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

import {
  PercentRounded,
  ShoppingCart,
  StarBorderSharp,
  TrendingUp,
} from '@mui/icons-material';
import InformationModal from './InformationModal';


const index = () => {
  return (
    <>
      <Breadcrum  title='Seller Dashboard' />

      <Grid container spacing={6}>
        <Grid item xs={12} sm={12} lg={4}>
          <Card sx={{
            p: '22px',
            position: 'relative',
            fontFamily: 'inherit'
          }}>
            <Box sx={{
              display: 'flex',
              gap: '0 12px',
              justifyContent: 'space-between'
            }}>

              <Box>
                <Typography sx={{ color: '#5e5873', fontSize: '16px', fontWeight: '500' }}>Congratulations 🎉 harishdev!</Typography>
                <Typography sx={{ mt: '4px', fontSize: '14px', }}>Here is your bonus you got from sales</Typography>
                <Box sx={{ mt: '30px' }}>
                  <Typography sx={{ color: '#7367f0', fontWeight: '500', fontSize: '26px' }}>$0.00</Typography>
                  <Button sx={{ mt: '10px' }} variant='contained'>View Sales</Button>
                </Box>
              </Box>
              <Box sx={{
                mt: '-26px'
              }}> <img src={medalImg.src} alt="" /> </Box>
            </Box>


          </Card>
        </Grid>

        <Grid item xs={12} sm={12} lg={8}>
          <Card sx={{
            p: '22px',
            position: 'relative',
            fontFamily: 'inherit'
          }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography sx={{ color: '#5e5873', fontWeight: '500', fontSize: '18px' }}>Statistics</Typography>
              <Typography sx={{ fontSize: '12px' }}>Updated second ago</Typography>
            </Box>

            <Grid container spacing={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: '60px' }}>

              <Grid item xs={6} md={3} lg={3}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: "20px" }}>
                  <Box sx={{
                    padding: '8px',
                    background: 'rgba(115,103,240,.12)', borderRadius: '22px', color: '#7367f0'
                  }}>
                    <TrendingUp sx={{ fontSize: '30px' }} />
                  </Box>
                  <Box>
                    <Typography sx={{ color: '#5e5873', fontSize: '18px', fontWeight: '600' }}>0.00$</Typography>
                    <Typography>Sales</Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={6} md={3} lg={3}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: "20px" }}>
                  <Box sx={{
                    padding: '8px',
                    background: 'rgba(0,207,232,.12)', borderRadius: '22px', color: '#00cfe8'
                  }}>
                    <ShoppingBagIcon sx={{ fontSize: '30px' }} />
                  </Box>
                  <Box>
                    <Typography sx={{ color: '#5e5873', fontSize: '18px', fontWeight: '600' }}>0$</Typography>
                    <Typography>Todays Sales</Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={6} md={3} lg={3}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: "20px" }}>
                  <Box sx={{
                    padding: '8px',
                    background: 'rgba(234,84,85,.12)', borderRadius: '22px', color: '#ea5455'
                  }}>
                    <ViewInArIcon sx={{ fontSize: '30px' }} />
                  </Box>
                  <Box>
                    <Typography sx={{ color: '#5e5873', fontSize: '18px', fontWeight: '600' }}>0$</Typography>
                    <Typography>Unbsolds</Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={6} md={3} lg={3}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: "20px" }}>
                  <Box sx={{
                    padding: '8px',
                    background: 'rgba(40,199,111,.12)', borderRadius: '22px', color: '#28c76f'
                  }}>
                    <AttachMoneyIcon sx={{ fontSize: '30px' }} />
                  </Box>
                  <Box>
                    <Typography sx={{ color: '#5e5873', fontSize: '18px', fontWeight: '600', mb: '5px' }}>0$</Typography>
                    <Typography >Total Sales</Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Card>
        </Grid>

      </Grid>

      <Grid container spacing={6} sx={{ mt: '10px' }}>
        <Grid item xs={12} sm={12} lg={4} >
          <Card sx={{
            p: '22px',
            position: 'relative',
            fontFamily: 'inherit'
          }}>
            <Typography sx={{ color: '#5e5873', fontSize: '18px', fontWeight: '600' }} > Sales Valid Stats</Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: '20px' }}>
              <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: "20px" }}>
                  <Box sx={{
                    padding: '8px',
                    background: 'rgba(115,103,240,.12)', borderRadius: '8px', color: '#7367f0'
                  }}>
                    <AttachMoneyIcon sx={{ fontSize: '25px' }} />
                  </Box>
                  <Box>
                    <Typography sx={{ color: '#5e5873', fontSize: '18px', fontWeight: '400' }}>Sales</Typography>
                    <Typography>All time sales / 1 month sales</Typography>
                  </Box>
                </Box>
              </Box>

              <Box><Typography sx={{ color: '#7367f0', fontSize: '18px', fontWeight: '600' }}>0/0</Typography></Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: '20px' }}>
              <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: "20px" }}>
                  <Box sx={{
                    padding: '8px',
                    background: 'rgba(40,199,111,.12)', borderRadius: '8px', color: '#28c76f'
                  }}>
                    <DoneIcon sx={{ fontSize: '25px' }} />
                  </Box>
                  <Box>
                    <Typography sx={{ color: '#5e5873', fontSize: '18px', fontWeight: '400' }}>Valid Tools</Typography>
                    <Typography>1 Month Sales</Typography>
                  </Box>
                </Box>
              </Box>

              <Box><Typography sx={{ color: '#28c76f', fontSize: '18px', fontWeight: '600' }}>0%</Typography></Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: '20px' }}>
              <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: "20px" }}>
                  <Box sx={{
                    padding: '8px',
                    background: 'rgba(234,84,85,.12)', borderRadius: '8px', color: '#ea5455'
                  }}>
                    <CloseIcon sx={{ fontSize: '25px' }} />
                  </Box>
                  <Box>
                    <Typography sx={{ color: '#5e5873', fontSize: '18px', fontWeight: '400' }}>Bad Tools</Typography>
                    <Typography>1 Month Sales</Typography>
                  </Box>
                </Box>
              </Box>

              <Box><Typography sx={{ color: '#ea5455', fontSize: '18px', fontWeight: '600' }}>0%</Typography></Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: '20px' }}>
              <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: "20px" }}>
                  <Box sx={{
                    padding: '8px',
                    background: 'rgba(40,199,111,.12)', borderRadius: '8px', color: '#28c76f'
                  }}>
                    <DoneIcon sx={{ fontSize: '25px' }} />
                  </Box>
                  <Box>
                    <Typography sx={{ color: '#5e5873', fontSize: '18px', fontWeight: '400' }}>Valid Tools</Typography>
                    <Typography>All Time Sales</Typography>
                  </Box>
                </Box>
              </Box>

              <Box><Typography sx={{ color: '#28c76f', fontSize: '18px', fontWeight: '600' }}>0%</Typography></Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: '20px' }}>
              <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: "20px" }}>
                  <Box sx={{
                    padding: '8px',
                    background: 'rgba(234,84,85,.12)', borderRadius: '8px', color: '#ea5455'
                  }}>
                    <CloseIcon sx={{ fontSize: '25px' }} />
                  </Box>
                  <Box>
                    <Typography sx={{ color: '#5e5873', fontSize: '18px', fontWeight: '400' }}>Bad Tools</Typography>
                    <Typography>All Time Sales</Typography>
                  </Box>
                </Box>
              </Box>

              <Box><Typography sx={{ color: '#ea5455', fontSize: '18px', fontWeight: '600' }}>0%</Typography></Box>
            </Box>

          </Card>
        </Grid>

        <Grid item xs={12} sm={12} lg={4} >
          <Card sx={{
            p: '22px',
            position: 'relative',
            fontFamily: 'inherit'
          }}>

            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Typography sx={{ color: '#5e5873', fontSize: '18px', fontWeight: '600' }} > Bonus Goal Overview</Typography>
              <InformationModal info='This will show you how much you earned and how much you need to reach 1K$ to get bonus.' />
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', border: '5px solid lightgray', borderRadius: '50%', padding: '32px 12px',width: '210px',height: '136px', m: 'auto',mt: '48px'}}>
              <Typography sx={{ fontSize: '40px', fontWeight: '100' }}>0%</Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', borderTop: '1px solid lightgray', mt: '50px' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center', justifyContent: 'center', p: '22px' }}>
                <Typography>Sales</Typography>
                <Typography sx={{ color: '', fontSize: '20px', fontWeight: '600' }}>0 $</Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center', justifyContent: 'center', p: '22px' }}>
                <Typography>Need to reach</Typography>
                <Typography sx={{ color: '', fontSize: '20px', fontWeight: '600' }}>1000 $</Typography>
              </Box>
            </Box>

          </Card>
        </Grid>

        <Grid item xs={12} sm={12} lg={4} >
          <Card sx={{
            p: '22px',
            position: 'relative',
            fontFamily: 'inherit'
          }}>
            <Typography sx={{ color: '#5e5873', fontSize: '18px', fontWeight: '600' }} >Your Most Solded</Typography>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={6} sx={{ mt: '10px' }}>
        <Grid item xs={12} sm={12} lg={3} >
          <Card sx={{
            p: '22px',
            position: 'relative',
            fontFamily: 'inherit'
          }}>

            <Box >
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: "20px" }}>

                <Box>
                  <Typography sx={{ color: '#5e5873', fontSize: '20px', fontWeight: '600', mb: '4px' }}>0</Typography>
                  <Typography>Items Sold</Typography>
                </Box>

                <Box sx={{
                  padding: '8px',
                  background: 'rgba(115,103,240,.12)', borderRadius: '22px', color: '#7367f0'
                }}>
                  <ShoppingBagIcon sx={{ fontSize: '25px' }} />
                </Box>

              </Box>
            </Box>
          </Card>
        </Grid>

        <Grid item xs={12} sm={12} lg={3} >
          <Card sx={{
            p: '22px',
            position: 'relative',
            fontFamily: 'inherit'
          }}>

            <Box >
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: "20px" }}>

                <Box>
                  <Typography sx={{ color: '#5e5873', fontSize: '20px', fontWeight: '600', mb: '4px' }}>0</Typography>
                  <Typography>Items Unsold</Typography>
                </Box>

                <Box sx={{
                  padding: '8px',
                  background: 'rgba(255,159,67,.12)', borderRadius: '22px', color: '#ff9f43'
                }}>
                  <ShoppingCart sx={{ fontSize: '25px' }} />
                </Box>

              </Box>
            </Box>
          </Card>
        </Grid>

        <Grid item xs={12} sm={12} lg={3} >
          <Card sx={{
            p: '22px',
            position: 'relative',
            fontFamily: 'inherit'
          }}>

            <Box >
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: "20px" }}>

                <Box>
                  <Typography sx={{ color: '#5e5873', fontSize: '20px', fontWeight: '600', mb: '4px' }}>55%</Typography>
                  <Typography>Your Sales Percentage</Typography>
                </Box>

                <Box sx={{
                  padding: '8px',
                  background: 'rgba(40,199,111,.12)', borderRadius: '22px', color: '#28c76f'
                }}>
                  <PercentRounded sx={{ fontSize: '25px' }} />
                </Box>

              </Box>
            </Box>
          </Card>
        </Grid>

        <Grid item xs={12} sm={12} lg={3} >
          <Card sx={{
            p: '22px',
            position: 'relative',
            fontFamily: 'inherit'
          }}>

            <Box >
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: "20px" }}>

                <Box>
                  <Typography sx={{ color: '#5e5873', fontSize: '20px', fontWeight: '600', mb: '4px' }}>0</Typography>
                  <Typography>Total Warns</Typography>
                </Box>

                <Box sx={{
                  padding: '8px',
                  background: 'rgba(234,84,85,.12)', borderRadius: '22px', color: '#ea5455'
                }}>
                  <ReportGmailerrorredIcon sx={{ fontSize: '25px' }} />
                </Box>

              </Box>
            </Box>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={6} sx={{ mt: '10px' }}>

        <Grid item xs={12} sm={12} lg={4} >
          <Card sx={{
            p: '22px',
            position: 'relative',
            fontFamily: 'inherit'
          }}>
            <Typography sx={{ color: '#5e5873', fontSize: '18px', fontWeight: '600' }} >Your Latest Added</Typography>
          </Card>
        </Grid>

        <Grid item xs={12} sm={12} lg={4} >
          <Card sx={{
            p: '22px',
            position: 'relative',
            fontFamily: 'inherit'
          }}>
            <Typography sx={{ color: '#5e5873', fontSize: '18px', fontWeight: '600' }} >Your Latest Sales</Typography>
          </Card>
        </Grid>

        <Grid item xs={12} sm={12} lg={4} >
          <Card sx={{
            p: '22px',
            position: 'relative',
            fontFamily: 'inherit'
          }}>
            <Typography sx={{ color: '#5e5873', fontSize: '18px', fontWeight: '600' }} >Monthly Store Most Solded</Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: '20px', pb: '16px', borderBottom: '1px solid lightgray' }}>
              <StarBorderSharp sx={{ color: '#ff9f43' }} />
              <Typography>Ourtime(UnPaid)</Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: '20px', pb: '16px', borderBottom: '1px solid lightgray' }}>
              <StarBorderSharp sx={{ color: '#ff9f43' }} />
              <Typography>Match(UnPaid)</Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: '20px', pb: '16px', borderBottom: '1px solid lightgray' }}>
              <StarBorderSharp sx={{ color: '#ff9f43' }} />
              <Typography>Edate(UnPaid)</Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: '20px', pb: '16px', borderBottom: '1px solid lightgray' }}>
              <StarBorderSharp sx={{ color: '#ff9f43' }} />
              <Typography>ChristianMingle(Unpaid)</Typography>
            </Box>
          </Card>
        </Grid>

      </Grid>
    </>
  )
}

export default index

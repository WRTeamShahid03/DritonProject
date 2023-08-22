// ** MUI Import
import Grid from '@mui/material/Grid'

// ** Demo Component Imports

import CrmActivityTimeline from 'src/views/dashboards/crm/CrmActivityTimeline'


// ** Custom Component Imports
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import CardStatsVertical from 'src/@core/components/card-statistics/card-stats-vertical'
import { Box, Button, Card, CardContent, Typography } from '@mui/material'
import Icon from 'src/@core/components/icon'
import ButtonsContained from 'src/views/components/buttons/ButtonsContained'
import ListItemSelected from 'src/views/components/list/ListItemSelected'
import AnalyticsSourceVisits from 'src/views/dashboards/analytics/AnalyticsSourceVisits'
import Link from 'next/link'

const CrmDashboard = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>

        <Grid item xs={6} sm={4} lg={2}>
          <CardStatsVertical
            stats='138844'
            title='Accounts'
            avatarIcon='tabler:user-circle'
            avatarColor='primary'
          />
        </Grid>
        <Grid item xs={6} sm={4} lg={2}>
          <CardStatsVertical
            stats='4508'
            avatarColor='secondary'
            title='Stuffs'
            avatarIcon='tabler:database'
          />
        </Grid>
        <Grid item xs={6} sm={4} lg={2}>
          <CardStatsVertical
            stats='104'
            avatarColor='success'
            title='Tutorials'
            avatarIcon='tabler:video'
          />
        </Grid>
        <Grid item xs={6} sm={4} lg={2}>
          <CardStatsVertical
            stats='212'
            avatarColor='error'
            title='RDPs'
            avatarIcon='tabler:video'
          />
        </Grid>
        <Grid item xs={6} sm={4} lg={2}>
          <CardStatsVertical
            stats='143668'
            avatarColor='warning'
            title='Total Tools'
            avatarIcon='tabler:video'
          />
        </Grid>
        <Grid item xs={6} sm={4} lg={2}>
          <CardStatsVertical
            stats='1BTC = $29,040'
            avatarColor='info'
            title='BTC Price'
            avatarIcon='tabler:video'
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Card>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }}>
                <Typography variant='h5' sx={{ mb: 2 }}>
                  Latest Tools - Join Telegram Channel for Updates
                </Typography>
                <Button variant='contained' startIcon={<Icon icon='tabler:send' />}>Join us on Telegram</Button>

              </Box>

            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Card>
            <CardContent>
              <Typography variant='h5' sx={{ mb: 2 }}>
                SMS Service Expanded
              </Typography>
              <Typography sx={{ color: 'text.secondary', mb: 2 }}>
                We are pleased to announce you that now we have expanded our SMS Services. Now you have option to re-use number for second SMS code(that is not available always sometime, re-use service get's stopped immediately after first use) also you have option for Renting Number with monthly price for Single Service or Multiple Service.<br /><br />
                We are pleased to announce you that now we have expanded our SMS Services. Now you have option to re-use number for second SMS code(that is not available always sometime, re-use service get's stopped immediately after first use) also you have option for Renting Number with monthly price for Single Service or Multiple Service.<br /><br />
                We are pleased to announce you that now we have expanded our SMS Services. Now you have option to re-use number for second SMS code that is not available always sometime, re-use service get's stopped immediately after first use
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <CrmActivityTimeline />
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <Card>
            <CardContent>
              <Typography variant='h5' sx={{ mb: 2 }}>
                NEW LOCATIONS LAUNCHED ON RDP MARKETPLACE
              </Typography>
              <Typography sx={{ color: 'text.secondary', mb: 2 }}>
                We are pleased to announce you that now we have expanded our SMS Services. Now you have option to re-use number for second SMS code(that is not available always sometime, re-use service get's stopped immediately after first use) also you have option for Renting Number with monthly price for Single Service or Multiple Service.<br /><br />
                We are pleased to announce you that now we have expanded our SMS Services. Now you have option to re-use number for second SMS code(that is not available always sometime, re-use service get's stopped immediately after first use) also you have option for Renting Number with monthly price for Single Service or Multiple Service.<br /><br />
              </Typography>
            </CardContent>
          </Card>
        </Grid>




        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant='h5' sx={{ mb: 2 }}>
                Official StrongTools Domain

              </Typography>
              <ListItemSelected />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <Card>
            <CardContent>
              <Typography variant='h5' sx={{ mb: 2 }}>
                Dear lovely customers of StrongTools!
              </Typography>
              <Typography sx={{ color: 'text.secondary', mb: 2 }}>
                As the start of a new year is upon us, we'd like to take this moment to thank you for being with us since 2017 and your continued trust and support. It has been an amazing journey together, and we are looking forward to it continuing in the coming years and wish you all the best for the New Year. May 2023 be a year of growth, success, and joy for you and your family.<br /><br />
              </Typography>
              <Typography sx={{ color: 'text.secondary', mb: 2 }}>
                As the start of a new year is upon us, we'd like to take this moment to thank you for being with us since 2017 and your continued trust and support. It has been an amazing journey together, and we are looking forward to it continuing in the coming years.<br /><br />
              </Typography>
              <Typography variant='h5' sx={{ mb: 2 }}>
                Wishing you a very Happy New Year!
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <AnalyticsSourceVisits />
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <Card>
            <CardContent>
              <Typography variant='h5' sx={{ mb: 2 }}>
                To login ZOOSK accounts, use our recommended Proxies!
              </Typography>
              <Typography sx={{ color: 'text.secondary', mb: 2 }}>
                Use our recommendation Residential Proxy IPs to login in ZOOSK accounts. Since days supports team have been using these proxies to test and had Success in logins without getting blocked accounts. So we would like to help you and your business by sharing that with you. If follow our recommended proxies you will have lower chance to block the accounts and 99% of ZOOSK open with Success using those Residential Proxy IPs. <br /><br />
              </Typography>
              <Typography sx={{ color: 'text.secondary', mb: 2 }}>
                <Link href="https://www.922proxy.com/index.html?inviter_code=8f17d1d7">To buy, here is invitation link: 922Proxy Residential IPs</Link><br /><br />
              </Typography>
              <Typography variant='h5' sx={{ mb: 2 }}>
                Note: This solution not only for ZOOSK works but including all other dating accounts!
                Keep in mind : We do not have a Partnership with them.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <Card>
            <CardContent>
              <Typography variant='h5' sx={{ mb: 2 }}>
                IMPORTANT for Zoosk Accounts!
              </Typography>
              <Typography sx={{
                color: 'text.secondary', mb: 2,
                fontSize: "20px"
              }}>
                IMPORTANT:  To login in ZOOSK accounts make sure of using Clean, Fresh IP's of your VPN, RDP, Proxy or Residential IP's, if you gets blocked it will be your responsibility because of you using BAD IP and this doesn't mean it's bad account or our mistake. We are here to protect both parties Buyers and Sellers, we have a role as Middleman its our responsibility to make sure that Sellers will not lose money.<br /><br />
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Card>
            <CardContent>
              <Typography variant='h5' sx={{ mb: 2 }}>
                SCAM ALERT!
              </Typography>
              <Typography sx={{
                color: 'text.secondary', mb: 2,
                fontSize: "20px"
              }}>
                HELLO DEAR MEMBERS OF STRONGTOOLS PLEASE BEWARE OF SCAM SITES WHO PRETEND TO BE US!
                OUR MAIN DOMAIN AND OFFICIAL IS: STRONGTOOLS.GA<br /><br />
              </Typography>
            </CardContent>
          </Card>
        </Grid>








      </Grid>
    </ApexChartWrapper>
  )
}

export default CrmDashboard

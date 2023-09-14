import { Card, Grid, Typography } from '@mui/material'
import React from 'react'
import OrderTable from './OrderTable'
import Breadcrum from 'src/pages/components/Breadcrum'

const OrderRdp = () => {
  return (
    <>
       <Breadcrum title="RDPs" />
      <Grid container spacing={6}>

        <Grid item xs={12} sm={12} lg={9}>
          <Card>

            <Typography sx={{
              color: '#28c76f!important',
              p: "8px", backgroundColor: "rgba(40,199,111,.12)", m: "20px", borderRadius: "5px",
            }} className="dropDeatails">
              Request RDP as per your needs. After ordering, it will be setup and delivered within 24H. RDPs are legal offered by Strongtools.
            </Typography>
            <Typography sx={{
              color: '#ea5455!important',
              p: "8px", backgroundColor: "rgba(234,84,85,.12)!important;", m: "20px", borderRadius: "5px",
            }} className="dropDeatails">
              Follow rules of RDPs , installing antivirus on rdp will block connections and rdp will stop working!
            </Typography>

            <OrderTable />
          </Card>

        </Grid>

        <Grid item xs={12} sm={12} lg={3}>
          <Card>
            <Typography title="Rules" sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#ea5455",
              color: "white",
              p: "20px",
              fontSize: "20px"
            }}>Rules</Typography>

            <Grid sx={{ 
              p:"20px"
             }}>

            <Typography>
            ⦿ NO Refund
            </Typography>

            <Typography>
            ⦿ NO phishing page/child porn contents.
            </Typography>

            <Typography>
            ⦿ NO Sending spam/phishing emails.
            </Typography>

            <Typography>
            ⦿ NO Scanning Ports/IP/SSH/RDP
            </Typography>
            <Typography>
            ⦿ NO Brute Force Attack, DDOS,
            </Typography>
            <Typography>
            ⦿ NO Abuse IO Read/Write Disk Usage.
            </Typography>

            </Grid>
          </Card>

          <Grid item xs={12} sm={12} lg={12} sx={{ 
            mt: "26px"
           }}>
          <Card>
            <Typography sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#28c76f",
              color: "white",
              p: "20px",
              fontSize: "20px"
            }}>RDPs are Monthly & Renewable</Typography>

            <Grid sx={{ 
              p:"20px"
             }}>

            <Typography>
            In order you need want to Renew your RDP server, you need to Contact Us via Ticket 5 days before expiry date of your server.
            </Typography>

            </Grid>
          </Card>
        </Grid>
        </Grid>

        
      </Grid>




    </>
  )
}

export default OrderRdp

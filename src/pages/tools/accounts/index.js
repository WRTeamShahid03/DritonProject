import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography';
import PageHeader from 'src/@core/components/page-header';
import { CardHeader, Grid } from '@mui/material';
import AnalyticsProject from '../../dashboards/analytics/analystics';
import { Box } from '@mui/system';

import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import { Breadcrumbs, Link } from '@mui/material'
import TableStickyHeader from 'src/views/table/mui/TableStickyHeader';
import Accounts from './accounts';

const index = () => {
  return (
    <>
      {/* <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                  Accounts

                </Link>
                <Link
                    underline="hover"
                    color="inherit"
                    href="/material-ui/getting-started/installation/"
                >
                </Link>
                <Typography color="text.primary"></Typography>
            </Breadcrumbs> */}

      <Card className="">
        {/* <CardContent>

        </CardContent> */}
        <Accounts />

      </Card>
    </>
  )
}

export default index

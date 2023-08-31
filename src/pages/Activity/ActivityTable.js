// ** MUI Import
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import { styled } from '@mui/material/styles'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineItem from '@mui/lab/TimelineItem'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import MuiTimeline from '@mui/lab/Timeline'
import MuiCardHeader from '@mui/material/CardHeader'

// ** Custom Components Imports
import Icon from 'src/@core/components/icon'
import OptionsMenu from 'src/@core/components/option-menu'

// Styled Timeline component
const Timeline = styled(MuiTimeline)({
    paddingLeft: 0,
    paddingRight: 0,
    '& .MuiTimelineItem-root': {
        width: '100%',
        '&:before': {
            display: 'none'
        }
    }
})

const CardHeader = styled(MuiCardHeader)(({ theme }) => ({
    '& .MuiTypography-root': {
        lineHeight: 1.6,
        fontWeight: 500,
        fontSize: '1.125rem',
        letterSpacing: '0.15px',
        [theme.breakpoints.up('sm')]: {
            fontSize: '1.25rem'
        }
    }
}))

const ActivityTable = () => {
    return (
        <Card>
            <CardHeader
                title={
                    <Box sx={{ display: 'flex', alignItems: 'center', '& svg': { mr: 3 } }}>
                        <Icon fontSize='1.25rem' icon='tabler:list-details' />
                        <Typography>24H Latest Tools - Get Notification on Telegram</Typography>
                    </Box>
                }

            />
            <CardContent>
                <Timeline>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color='warning' sx={{ mt: 1.5 }} />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ pt: 0, mt: 0, mb: theme => `${theme.spacing(2)} !important` }}>
                            <Box
                                sx={{
                                    mb: 0.5,
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    alignItems: 'center',
                                    justifyContent: 'space-between'
                                }}
                            >
                                <Typography variant='h6' sx={{ mr: 2 }}>
                                    Stock of Ourtime(UnPaid) has been added
                                </Typography>
                                <Typography variant='span' sx={{ color: "white", backgroundColor: '#7367f0', p: "0.3rem 0.5rem", borderRadius: "0.358rem" }}>11</Typography>
                            </Box>
                            <Typography variant='body2' sx={{ mb: 2.5 }}>
                                in Dating
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color='primary' />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ pt: 0, mt: 0, mb: theme => `${theme.spacing(2)} !important` }}>
                            <Box
                                sx={{
                                    mb: 0.5,
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    alignItems: 'center',
                                    justifyContent: 'space-between'
                                }}
                            >
                                <Typography variant='h6' sx={{ mr: 2 }}>
                                    Stock of Ourtime(UnPaid) has been added
                                </Typography>
                                <Typography variant='span' sx={{ color: "white", backgroundColor: '#7367f0', p: "0.3rem 0.5rem", borderRadius: "0.358rem" }}>11</Typography>
                            </Box>
                            <Typography variant='body2' sx={{ mb: 2.5 }}>
                                in Dating
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color='info' />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ pt: 0, mt: 0, mb: theme => `${theme.spacing(2)} !important` }}>
                            <Box
                                sx={{
                                    mb: 0.5,
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    alignItems: 'center',
                                    justifyContent: 'space-between'
                                }}
                            >
                                <Typography variant='h6' sx={{ mr: 2 }}>
                                    Stock of Ourtime(UnPaid) has been added
                                </Typography>
                                <Typography variant='span' sx={{ color: "white", backgroundColor: '#7367f0', p: "0.3rem 0.5rem", borderRadius: "0.358rem" }}>11</Typography>
                            </Box>
                            <Typography variant='body2' sx={{ mb: 2.5 }}>
                                in Dating
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color='secondary' />
                        </TimelineSeparator>
                        <TimelineContent sx={{ pt: 0, mt: 0, mb: theme => `${theme.spacing(2)} !important` }}>
                            <Box
                                sx={{
                                    mb: 0.5,
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    alignItems: 'center',
                                    justifyContent: 'space-between'
                                }}
                            >
                                <Typography variant='h6' sx={{ mr: 2 }}>
                                    Stock of Ourtime(UnPaid) has been added
                                </Typography>
                                <Typography variant='span' sx={{ color: "white", backgroundColor: '#7367f0', p: "0.3rem 0.5rem", borderRadius: "0.358rem" }}>11</Typography>
                            </Box>
                            <Typography variant='body2'>
                                in Dating
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </CardContent>
        </Card>
    )
}

export default ActivityTable

import { Button, Card, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Breadcrum from 'src/pages/components/Breadcrum'

const Index = () => {
    return (
        <>
            <Breadcrum title='Telegram' />

            <Card sx={{ p: '22px' }}>
                <Typography sx={{ fontSize: '20px', fontWeight: '600' }} >Telegram</Typography>
                
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '30px' }}>
                    <Typography sx={{ fontSize: '30px', fontWeight: '600', color: 'rgb(0, 205, 205)' }} >Want to get notification on telegram?</Typography>
                    <Typography sx={{ fontSize: '18px', fontWeight: '600' }} >You will get notifications regarding your sales, reports, tickets, directly on your telegram instantly.</Typography>

                    <Button variant='contained' color='info'>Enable Now</Button>

                </Box>



            </Card>
        </>
    )
}

export default Index

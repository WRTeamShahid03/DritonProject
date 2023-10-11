import { Card, CardContent, CardHeader, Typography } from '@mui/material'
import React from 'react'
import Breadcrum from 'src/pages/components/Breadcrum'


const Index = () => {
    return (
        <>
            <Breadcrum title="POF Verification" />
            <Card>
                <CardHeader title="POF Verification" />

                <ul>

                    <li style={{ margin: "8px 0", fontSize: "18px" }}> <Typography variant='span' style={{ color: "#ffa550" }}> Step1 </Typography>: Go to Menu at SMS Codes {">"} Services</li>
                    <li style={{ margin: "8px 0", fontSize: "18px" }}> <Typography variant='span' style={{ color: "#ffa550" }}> Step2 </Typography>: Search for PlentyOfFish or POF and click on it</li>
                    <li style={{ margin: "8px 0", fontSize: "18px" }}> <Typography variant='span' style={{ color: "#ffa550" }}> Step3 </Typography>: Choose the Country you like to use number</li>
                    <li style={{ margin: "8px 0", fontSize: "18px" }}> <Typography variant='span' style={{ color: "#ffa550" }}> Step4 </Typography>: Click Get Code and your number will show at SMS Codes {">"} My Orders
                    </li>
                    <li style={{ margin: "8px 0", fontSize: "18px" }}> <Typography variant='span' style={{ color: "#ffa550" }}> Step5 </Typography>:  Get the number on page and enter it on POF.COM and Send the code</li>
                    <li style={{ margin: "8px 0", fontSize: "18px" }}> <Typography variant='span' style={{ color: "#ffa550" }}> Step6 </Typography>: After code received, put that code on POF then you're verified and you can use account as you want.</li>
                    <li style={{ margin: "8px 0", fontSize: "18px" }}> <Typography variant='span' style={{ color: "#ffa550" }}> Step7 </Typography>: Your purchased number will be saved on Strongtools history in case you need to re-update the POF number and use the account again. </li>
                    <li style={{ margin: "8px 0", fontSize: "18px" }}> Completed</li>
                    <li style={{ margin: "8px 0", fontSize: "18px" }}> <Typography variant='span' style={{ color: "#ea5455" }}> ATTENTION!</Typography>: Numbers which not worked and was Refunded will not show on list.</li>

                </ul>
            </Card>
        </>
    )
}

export default Index

import { Breadcrumbs, Typography } from '@mui/material'
import React from 'react'

const Breadcrum = ({title}) => {
    return (
        <>

            <Breadcrumbs aria-label="breadcrumb" sx={{
                margin: "22px 0px", fontSize: "22px"
            }}>
                <Typography sx={{ fontSize: "24px", fontWeight: "500", borderRight: "1px solid #d6dce1", pr: "1rem" }}> {title}</Typography>
            </Breadcrumbs>

        </>
    )
}

export default Breadcrum

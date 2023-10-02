// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Radio from '@mui/material/Radio'
import Typography from '@mui/material/Typography'

// // ** title2 Imports
// import title2 from 'src/@core/components/title2'

const Payments = props => {
    // ** Props
    const { data, title2, name, selected, gridProps, handleChange, color = 'primary' } = props
    const { title, value, content } = data

    const renderComponent = () => {
        return (
            <Grid item {...gridProps}>
                <Box
                    onClick={() => handleChange(value)}
                    sx={{
                        p: 4,
                        height: '100%',
                        display: 'flex',
                        borderRadius: 1,
                        cursor: 'pointer',
                        position: 'relative',
                        alignItems: 'center',
                        flexDirection: 'column',
                        border: theme => `1px solid ${theme.palette.divider}`,
                        ...(selected === value
                            ? {
                                borderColor: `${color}.main`,
                                '& svg': { color: theme => `${theme.palette.primary.main} !important` }
                            }
                            : { '&:hover': { borderColor: theme => `rgba(${theme.palette.customColors.main}, 0.25)` } })
                    }}
                >

                    <Box sx={{ display: 'flex',alignItems: 'baseline',justifyContent: 'space-between',gap: '30px' }}>

                        {title ? (
                            typeof title === 'string' ? (
                                <Typography variant='h6' sx={{ ...(content ? { mb: 2 } : { my: 'auto' }) }}>
                                    {title}
                                </Typography>
                            ) : (
                                title
                            )
                        ) : null}

                        {title2 ? <Typography>{title2}</Typography> : null}

                    </Box>



                    {content ? (
                        typeof content === 'string' ? (
                            <Typography variant='body2' sx={{ my: 'auto', textAlign: 'center' }}>
                                {content}
                            </Typography>
                        ) : (
                            content
                        )
                    ) : null}
                    <Radio
                        name={name}
                        size='small'
                        color={color}
                        value={value}
                        onChange={handleChange}
                        checked={selected === value}
                        sx={{ mb: -2, ...(!title2 && !title && !content && { mt: -2 }) }}
                    />
                </Box>
            </Grid>
        )
    }

    return data ? renderComponent() : null
}

export default Payments

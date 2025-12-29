import { Box, Typography } from '@mui/material'
import React from 'react'

const Services = () => {
    return (
        <>
            <Box bgcolor={'#f0f0f0'}  py={10}>

                <Typography variant='h4' textAlign={'center'} fontWeight={'bold'} sx={{ textDecoration: 'underline' }} color='secondary'>
                    Services
                </Typography>

                <Box display={'flex'}  justifyContent={'space-evenly'} py={15} width={'75%'} margin={'auto'}>
                    <Box display={'flex'} height={'200px'} width={'200px'} bgcolor={'#fafafa'} p={3} justifyContent={'center'} alignItems={'center'} borderRadius={'20px'}>
                        <Typography variant='h4'>Quality Products</Typography>
                    </Box>
                    <Box display={'flex'} height={'200px'} width={'200px'} bgcolor={'#fafafa'} p={3} justifyContent={'center'} alignItems={'center'}>
                        <Typography variant='h4'>Attractive Prices</Typography>
                    </Box>
                    <Box display={'flex'} height={'200px'} width={'200px'} bgcolor={'#fafafa'} p={3} justifyContent={'center'} alignItems={'center'}>
                        <Typography variant='h4'>Fast Delivery</Typography>
                    </Box>
                </Box>

            </Box>
        </>
    )
}

export default Services
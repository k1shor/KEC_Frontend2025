import { Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'

const Contact = () => {
    return (
        <>
            <Typography variant='h4' textAlign={'center'} my={10}>
                Contact

            </Typography>

            <Grid container width={'75%'} margin={"auto"} marginBottom={10}>
                <Grid size={{ xs: 12, md: 6 }} bgcolor={'#fafafa'} p={5}>
                    <Typography variant='h5'>Lagankhel, Lalitpur</Typography>
                    <Typography variant='h6'>Phone: 5423889</Typography>
                    <Typography variant='h5'>Email: kishor@evovle.com</Typography>
                    <Typography variant='h5'>Website: www.ourstore.com</Typography>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }} p={5} bgcolor={'#afafaf'}>
                    <Typography variant='h5'>Contact Form</Typography>
                    <TextField variant='outlined' fullWidth label='email' placeholder='enter your email here' required helperText='eg: someone@somthing.com' />
                    <TextField variant='outlined' fullWidth label='Subject' placeholder='enter your email here' required />

                    <TextField variant='outlined' fullWidth label='message' multiline rows={4} />

                    <Button variant='contained' color='success' fullWidth
                        sx={{ marginTop: '10px' }}
                    >Submit</Button>


                </Grid>
                <Grid size={{ xs: 12 }}>3</Grid>
            </Grid>
        </>
    )
}

export default Contact
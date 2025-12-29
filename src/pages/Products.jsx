import { Button, Checkbox, FormControlLabel, FormGroup, Grid, Link, Radio, RadioGroup, Rating, Typography } from '@mui/material'
import React from 'react'
import { BsBookmarkFill } from 'react-icons/bs'
import { IoBookmarkOutline } from 'react-icons/io5'
import { TbCircleArrowRightFilled } from 'react-icons/tb'
import { TiArrowRightOutline } from 'react-icons/ti'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const Products = () => {
    const departments = ["Mobiles", "Laptops", "Fitness", "Garden", "Gadgets"];
    const priceRanges = [
        "Upto Rs.1000",
        "Rs.1000 - Rs.10000",
        "Rs.10000 - Rs.50000",
        "Rs.50000 - Rs.100000",
        "Above Rs.100000"
    ];

    return (
        <Grid 
            container 
            spacing={3} 
            sx={{
                p: 4,
                bgcolor: '#f9f9f9',
                minHeight: '100vh',
            }}
        >
            {/* Sidebar Filters */}
            <Grid 
                item 
                xs={12} sm={12} md={3} lg={2} 
                sx={{ 
                    bgcolor: '#ffffff', 
                    p: 4, 
                    borderRadius: 2,
                    boxShadow: 3,
                    
                    alignSelf: 'flex-start'
                }}
            >
                <Typography variant='h5' sx={{ textDecoration: 'underline' }} color='success' fontWeight='bold' mb={2}>
                    Deals
                </Typography>
                <FormGroup>
                    <Link href='#' fontSize='18px' color='warning' fontWeight='bold' underline='hover' mb={1}>Daily Deals</Link>
                    <Link href='#' fontSize='18px' color='secondary' fontWeight='bold' underline='hover' mb={1}>TOP Deals</Link>
                    <Link href='#' fontSize='18px' color='error' fontWeight='bold' underline='hover' mb={1}>Flash Sales</Link>
                    <Link href='#' fontSize='18px' color='info' fontWeight='bold' underline='hover' mb={1}>Most Popular</Link>
                </FormGroup>

                <Typography variant='h5' sx={{ textDecoration: 'underline', mt: 3 }} color='success' fontWeight='bold'>
                    Departments
                </Typography>
                <FormGroup>
                    {departments.map((dept) => (
                        <FormControlLabel
                            key={dept}
                            control={<Checkbox icon={<TiArrowRightOutline />} checkedIcon={<TbCircleArrowRightFilled />} />}
                            label={dept}
                        />
                    ))}
                </FormGroup>

                <Typography variant='h5' sx={{ textDecoration: 'underline', mt: 3 }} color='success' fontWeight='bold'>
                    Prices
                </Typography>
                <RadioGroup defaultValue="0" name="radio-buttons-group">
                    {priceRanges.map((price, idx) => (
                        <FormControlLabel 
                            key={idx} 
                            value={`${idx}`} 
                            control={<Radio icon={<IoBookmarkOutline />} checkedIcon={<BsBookmarkFill />} />} 
                            label={price} 
                        />
                    ))}
                </RadioGroup>

                <Typography variant='h5' sx={{ textDecoration: 'underline', mt: 3 }} color='success' fontWeight='bold'>
                    Avg. Reviews
                </Typography>
                <FormGroup sx={{ mt: 1 }}>
                    {[1,2,3,4,5].map((val) => (
                        <Link href='#' key={val} sx={{ display: 'block', mb: 1 }}>
                            <Rating value={val} readOnly max={5} />
                        </Link>
                    ))}
                </FormGroup>
            </Grid>

            {/* Product Cards */}
            <Grid item xs={12} sm={12} md={8} lg={9} container >
                {[...Array(8)].map((_, idx) => (
                    <Grid item xs={12} sm={6} lg={4} key={idx}>
                        <Card 
                            sx={{ 
                                maxWidth: 345, 
                                width: '100%', 
                                borderRadius: 3, 
                                boxShadow: 4, 
                                transition: 'transform 0.3s, box-shadow 0.3s',
                                '&:hover': { transform: 'translateY(-5px)', boxShadow: 6 }
                            }}
                        >
                            <CardMedia
                                sx={{ height: 180 }}
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" variant="contained" color="primary">Share</Button>
                                <Button size="small" variant="outlined" color="primary">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    )
}

export default Products

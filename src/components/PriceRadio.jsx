import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import React, { useState } from 'react'
import { BsBookmarkFill } from 'react-icons/bs'
import { IoBookmarkOutline } from 'react-icons/io5'
import { PRICES } from '../constants'

const PriceRadio = ({handleFilters}) => {

    const handleChange = e => {
        let priceObj = PRICES.find(price => price.id == e.target.value)
        handleFilters(priceObj.value, 'product_price')
    }
    return (
        <>
            <RadioGroup defaultValue="0" name="radio-buttons-group">
                {
                    PRICES.map(price => {
                        return <FormControlLabel
                            key={price.id}
                            control={<Radio icon={<IoBookmarkOutline />} checkedIcon={<BsBookmarkFill />} onChange={handleChange} value={price.id}/>}
                            label={price.title}
                        />
                    })
                }

            </RadioGroup>
        </>
    )
}

export default PriceRadio
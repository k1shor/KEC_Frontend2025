import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { TbCircleArrowRightFilled } from 'react-icons/tb'
import { TiArrowRightOutline } from 'react-icons/ti'
import { getAllCategories } from '../api/categoryAPI'

const CategoryCheckbox = ({handleFilters}) => {
    let [categories, setCategories] = useState([])
    let [selected, setSelected] = useState([])

    useEffect(() => {
        getAllCategories()
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                }
                else {
                    setCategories(data.categories)
                }
            })
    }, [])

    const handleChange = e => {
        let newSelected = selected
        let categoryExists = newSelected.findIndex(category => category === e.target.value)

        if(categoryExists === -1){
            newSelected.push(e.target.value)
        }
        else{
            newSelected.splice(categoryExists, 1)
        }
        setSelected(newSelected)
        handleFilters(newSelected, 'category')
    }

    return (
        <>
            <FormGroup>
                {
                    categories.length > 0 &&
                    categories.map(category => {
                        return <FormControlLabel key={category._id}
                            control={<Checkbox icon={<TiArrowRightOutline />} checkedIcon={<TbCircleArrowRightFilled />} onChange={handleChange} 
                            value={category._id}/>}
                            label={category.category_name}
                        />
                    })
                }
            </FormGroup>
        </>
    )
}

export default CategoryCheckbox
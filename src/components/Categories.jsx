import React from 'react'
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { searchByCategory } from '../store/actions/QuoteActions';

export const Categories = () => {

    const catagories = useSelector(state => state.categories)
    const selectedCategory = useSelector(state => state.selectedCategory)
    const dispatch = useDispatch();
    const handleClick = (category) => {
        dispatch(searchByCategory(category))
    }

    return (
        <div className='categories-container'>

            {catagories.map(category =>
                <Button
                    onClick={() => handleClick(category)}
                    key={category}
                    variant={category === selectedCategory ? "contained" : "outlined"}>
                    {category}
                </Button>
            )}

        </div>
    )
}

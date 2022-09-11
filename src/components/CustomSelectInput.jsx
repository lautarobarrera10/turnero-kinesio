import React from 'react'
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const CustomSelectInput = ({item, onChangeItem, label, options, id}) => {
    return (
        <FormControl sx={{width:'320px'}}>
            <InputLabel htmlFor={id} id={`${id}-label`}>
                {label}
            </InputLabel>
            <Select
                labelId={`${id}-label`}
                id={id}
                value={item}
                label={label}
                onChange={onChangeItem}
            >
                {options.map(option => (
                    <MenuItem key={option} value={option}>{option}</MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export { CustomSelectInput }
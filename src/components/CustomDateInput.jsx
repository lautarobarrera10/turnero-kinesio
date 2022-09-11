import React from 'react'
import { Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const CustomDateInput = ({
    day,
    onChangeDay,
    month,
    monthInNumber,
    onChangeMonth,
    year,
    onChangeYear,
    añoInicial, 
    añoFinal, 
    id,
}) => {

    // Opciones en inputs
    const dias = [];
    for (let index = 1; index < 32; index++) {
        dias.push(index) 
    } 
    const meses = [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre'
    ];
    const años = [];
    for (let index = añoInicial; index <= añoFinal; index++) {
        años.push(index) 
    }

    let monthInNumberTransformed;
    if (monthInNumber && !month) {
        monthInNumberTransformed = meses[monthInNumber];
    }

  return (
    <Box id={id} sx={{
        display:'flex',
        justifyContent:'center',
        textAlign:'center',
        gap:1
        }}>
            {/* Contenedor de día */}
            <Box>
                <FormControl>
                <InputLabel htmlFor={`${id}-day`} id={`${id}-day-label`}>Día</InputLabel>
                <Select
                labelId={`${id}-day-label`}
                id={`${id}-day`}
                value={day}
                label="Día"
                onChange={onChangeDay}
                >
                {dias.map(dia => (
                    <MenuItem key={dia} value={dia}>{dia}</MenuItem>
                ))}
                </Select>
                </FormControl>
            </Box>
            {/* Contenedor de mes */}
            <Box>
                <FormControl>
                <InputLabel htmlFor="month" id="month-label">Mes</InputLabel>
                <Select
                labelId="month-label"
                id="month"
                value={month || monthInNumberTransformed}
                label="Mes"
                onChange={onChangeMonth}
                >
                {meses.map(mes => (
                    <MenuItem key={mes} value={mes}>{mes}</MenuItem>
                ))}
                </Select>
                </FormControl>
            </Box>
            {/* Contenedor de año */}
            <Box>
                <FormControl>
                <InputLabel htmlFor="year" id="year-label">Año</InputLabel>
                <Select
                labelId="year-label"
                id="year"
                value={year}
                label="Año"
                onChange={onChangeYear}
                >
                {años.map(año => (
                    <MenuItem key={año} value={año}>{año}</MenuItem>
                ))}
                </Select>
                </FormControl>
            </Box>
    </Box>
  )
}

export { CustomDateInput } 
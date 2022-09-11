import React from 'react'

const CustomDateToday = () => {
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
                    value={month}
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

export default CustomDateToday
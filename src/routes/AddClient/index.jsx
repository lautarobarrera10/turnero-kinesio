import React from "react";
import './AddClient.css';
import { Navbar } from '../../components/Navbar';

import { Container, Box, FormControl, Autocomplete, TextField, Input, InputLabel, Select, MenuItem } from '@mui/material';

const obrasSociales = ['ospla', 'osfatlyf', 'otra'];
const edades = [];
for (let index = 8; index < 100; index++) {
    edades.push(index) 
} 
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
for (let index = 2022; index < 2033; index++) {
    años.push(index) 
}

function AddClient() {
    const [age, setAge] = React.useState(18);
    const [day, setDay] = React.useState(1);
    const [month, setMonth] = React.useState('Enero');
    const [year, setYear] = React.useState(2022);
    const [profesionalName, setProfesionalName] = React.useState('');
    const [pacienteName, setPacienteName] = React.useState('');
    const [pacienteLocalidad, setPacienteLocalidad] = React.useState('');

    const handleChangeAge= (event) => {
        setAge(event.target.value);
    };
    const handleChangeDay = (event) => {
        setDay(event.target.value);
    };
    const handleChangeMonth = (event) => {
        setMonth(event.target.value);
    };
    const handleChangeYear = (event) => {
        setYear(event.target.value);
    };
    const handleChangeProfesionalName = (event) => {
        setProfesionalName(event.target.value);
    }
    const handleChangePacienteName = (event) => {
        setPacienteName(event.target.value);
    }
    const handleChangePacienteLocalidad = (event) => {
        setPacienteLocalidad(event.target.value);
    }
    return(
        <React.Fragment>
        <Navbar />
        <Container>
        <form>
            <h2 className="ficha-kinesica-title">Ficha Kinesica</h2>
            <hr/>
            {/* Contenedor de fecha y número de ficha kinesica */}
            <Container sx={{
                my:2,
                display:'flex',
                justifyContent:'space-between',
                alignItems:'flex-start',
                flexWrap:'wrap'
            }}>
                {/* Contenedor de fecha */}
                <Box sx={{
                    width:'300px',
                    display:'flex',
                    textAlign:'center',
                    gap:1
                    }}>
                        {/* Contenedor de día */}
                        <Box>
                            <FormControl>
                            <InputLabel htmlFor="day" id="day-label">Día</InputLabel>
                            <Select
                            labelId="day-label"
                            id="day"
                            value={day}
                            label="Día"
                            onChange={handleChangeDay}
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
                            onChange={handleChangeMonth}
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
                            onChange={handleChangeYear}
                            >
                            {años.map(año => (
                                <MenuItem key={año} value={año}>{año}</MenuItem>
                            ))}
                            </Select>
                            </FormControl>
                        </Box>
                </Box>

                {/* Contenedor del número de ficha kinesica */}
                <Box sx={{
                    width:'300px',
                    display:'flex',
                    alignItems:'flex-end'
                }}>
                    <FormControl sx={{width:'100%'}}>
                    <InputLabel htmlFor="ficha-number">Número de ficha</InputLabel>
                    <Input id="ficha-number" type="number"/>
                    </FormControl>
                </Box>
            </Container>
            {/* Contenedor del nombre del profesional*/}
            <Container sx={{my:2}}>
                <Box>
                <InputLabel id="profesional-name">Apellido y nombre del profesional</InputLabel>
                <Select
                sx={{width:'100%'}}
                labelId="profesional-name"
                id="profesional-name-select"
                value={profesionalName}
                label="Apellido y nombre del profesional"
                onChange={handleChangeProfesionalName}
                >
                <MenuItem value={'Campidoglio Nicolás'}>Campidoglio Nicolás</MenuItem>
                <MenuItem value={'Barrera Lautaro'}>Barrera Lautaro</MenuItem>
                </Select>
                </Box>
            </Container>
            <hr/>
            {/* Contenedor del nombre del paciente, obra social, número de afiliado, domicilio */}
            <Container sx={{
                display:'flex',
                flexWrap:'wrap',
                justifyContent:'space-between',
                gap:2
            }}> 
                {/* Nombre del paciente */}
                <Box sx={{
                    width:'320px'
                }}>
                    <FormControl sx={{width:'100%'}}>
                    <InputLabel htmlFor="paciente-name">Nombre del paciente</InputLabel>
                    <Input value={pacienteName} id="paciente-name" type="text" onChange={handleChangePacienteName}/>
                    </FormControl>
                </Box>
                {/* Obra social */}
                <Box sx={{
                    width:'320px'
                }}>
                    <Autocomplete
                    disablePortal
                    id="afiliate-obra-social"
                    sx={{height:'40px'}}
                    options={obrasSociales}
                    renderInput={(params) => <TextField {...params} label="Obra social" />}
                    />
                </Box>
                {/* Número de afiliado */}
                <Box sx={{
                    width:'320px'
                }}>
                    <FormControl sx={{width:'100%'}}>
                    <InputLabel htmlFor="afiliate-number">Número de afiliado</InputLabel>
                    <Input id="afiliate-number" type="number"/>
                    </FormControl>
                </Box>
                {/* Domicilio */}
                <Box sx={{
                    width:'320px'
                }}>
                    <FormControl sx={{width:'100%'}}>
                    <InputLabel htmlFor="paciente-domicilio">Domicilio</InputLabel>
                    <Input id="paciente-domicilio" type="text"/>
                    </FormControl>
                </Box>
                {/* Localidad */}
                <Box sx={{
                    width:'320px'
                }}>
                    <InputLabel id="paciente-localidad">Localidad</InputLabel>
                    <Select
                    sx={{width:'100%'}}
                    labelId="localidad"
                    id="localidad-select"
                    value={pacienteLocalidad}
                    label="Localidad"
                    onChange={handleChangePacienteLocalidad}
                    >
                    <MenuItem value={'Cipolletti'}>Cipolletti</MenuItem>
                    <MenuItem value={'Fernández Oro'}>Fernández Oro</MenuItem>
                    </Select>
                </Box>
            </Container>
            {/* Contenedor de domicilio, localidad y cp */}
            <Container sx={{
                my:2,
                display:'flex',
                flexWrap:'wrap',
                alignItems:'flex-end',
                gap:1
            }}>
                <Box sx={{width:'394px'}}>
                    <label className="kinesica-number-label" htmlFor="domicilio">Domicilio</label>
                    <input className="input" id="domicilio" type="text" />
                </Box>
                <Box sx={{width:'394px'}}>
                    <label className="kinesica-number-label" htmlFor="ciudad">Localidad</label>
                    <input className="input" id="ciudad" type="text" />
                </Box>
                <Box sx={{width:'300px'}}>
                    <label className="kinesica-number-label" htmlFor="codigo-postal">Código postal</label>
                    <input className="input" id="codigo-postal" type="number" />
                </Box>
            </Container>
            {/* Contenedor de telefono particular y telefono celular */}
            <Container sx={{
                my:2,
                display:'flex',
                gap:1
            }}>
                {/* Contenedor de teléfono particular */}
                <Box sx={{width:'50%'}}>
                    <label 
                    className="kinesica-number-label" htmlFor="afiliate-telefono-particular">
                        Teléfono particular
                    </label>
                    <input className="input" id="afiliate-telefono-particular" type="number" />
                </Box>
                {/* Contenedor de teléfono celular */}
                <Box sx={{width:'50%'}}>
                    <label 
                    className="kinesica-number-label" htmlFor="afiliate-telefono-celular">
                        Teléfono celular
                    </label>
                    <input className="input" id="afiliate-telefono-celular" type="number" />
                </Box>
            </Container>
            {/* Contenedor de fecha de nacimiento, edad y dni */}
            <Container sx={{
                my:2,
                display:'flex',
                flexWrap:'wrap',
                gap:1
            }}>
                <Box sx={{width:'394px'}}>
                    <label className="kinesica-number-label" htmlFor="nacimiento">
                        Fecha de nacimiento
                    </label>
                    <input className="input" id="nacimiento" type="date" />
                </Box>
                <Box sx={{width:'394px'}}>
                <InputLabel id="demo-simple-select-label">Edad</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Edad"
                onChange={handleChangeAge}
                >
                {edades.map(edad => (
                    <MenuItem key={edad} value={edad}>{edad}</MenuItem>
                ))}
                </Select>
                </Box>
                <Box sx={{width:'300px'}}>
                    <label className="kinesica-number-label" htmlFor="dni">
                        DNI
                    </label>
                    <input className="input" id="dni" type="number" />
                </Box>          
            </Container>
        </form> 
        </Container>
        </React.Fragment>
    );
}

export { AddClient }
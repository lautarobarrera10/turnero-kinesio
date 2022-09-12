import React from "react";
import './AgregarPaciente.css';

import { CustomDateInput } from '../../components/CustomDateInput';
import { CustomSelectInput } from '../../components/CustomSelectInput';

import { 
    Container, 
    Box, 
    TextField, 
    Switch, 
    FormControlLabel, 
    FormGroup,
    TextareaAutosize,
    Button
} from '@mui/material';

// Customs HOCs
import { useDate } from "./useDate";
import { useItem } from "./useItem";
import { useAntecedentesPersonales } from "./useAntecedentesPersonales";


const edades = [];
for (let index = 12; index < 100; index++) {
    edades.push(index) 
} 
const añosNacimiento = [];
for (let index = 1920; index < 2023; index++) {
    añosNacimiento.push(index) 
}

function AgregarPaciente() {
    // Custom HOC para fecha de hoy
    const {
    day: todayDay,
    onChangeDay: onChangeTodayDay,
    month: todayMonth,
    onChangeMonth: onChangeTodayMonth,
    year: todayYear,
    onChangeYear: onChangeTodayYear
    } = useDate();

    // Custom HOC para nombre del profesional
    const {
        item: profesionalName,
        onChangeItem: onChangeProfesionalName
    } = useItem('Campidoglio Nicolás');

    // Custom HOC para nombre del paciente
    const {
        item: pacienteName,
        onChangeItem: onChangePacienteName
    } = useItem();

    // Custom HOC para obra social del paciente
    const {
        item: pacienteObraSocial,
        onChangeItem: onChangePacienteObraSocial
    } = useItem();

    // Custom HOC para número de afiliado del paciente
    const {
        item: pacienteNumeroDeAfiliado,
        onChangeItem: onChangePacienteNumeroDeAfiliado
    } = useItem();

    // Custom HOC para domicilio del paciente
    const {
        item: pacienteDomicilio,
        onChangeItem: onChangePacienteDomicilio
    } = useItem();

    // Custom HOC para localidad del paciente
    const {
        item: pacienteLocalidad,
        onChangeItem: onChangePacienteLocalidad
    } = useItem();

    // Custom HOC para código postal del paciente
    const {
        item: pacienteCodigoPostal,
        onChangeItem: onChangePacienteCodigoPostal
    } = useItem();

    // Custom HOC para teléfono del paciente
    const {
        item: pacienteTelefono,
        onChangeItem: onChangePacienteTelefono
    } = useItem();

    // Custom HOC para DNI del paciente
    const {
        item: pacienteDNI,
        onChangeItem: onChangePacienteDNI
    } = useItem();

    // Custom HOC para edad del paciente
    const {
        item: pacienteEdad,
        onChangeItem: onChangePacienteEdad
    } = useItem();

    // Custom HOC para fecha de nacimiento del paciente
    const {
        day: pacienteNacimientoDia,
        onChangeDay: onChangePacienteNacimientoDia,
        month: pacienteNacimientoMes,
        onChangeMonth: onChangePacienteNacimientoMes,
        year: pacienteNacimientoAño,
        onChangeYear: onChangePacienteNacimientoAño
    } = useDate();

    // Custom HOC para antecedentes personales del paciente
    const {
        diabetes, 
        onChangeDiabetes,
        hipertension,
        onChangeHipertension,
        fumador,
        onChangeFumador,
        cardiaco,
        onChangeCardiaco,
        embarazo,
        onChangeEmbarazo,
        artrosis,
        onChangeArtrosis,
        artritis,
        onChangeArtritis,
        marcapasos,
        onChangeMarcapasos,
        usaProtesis,
        onChangeUsaProtesis,
        reemplazoCaderaDerecha,
        onChangeReemplazoCaderaDerecha,
        reemplazoCaderaIzquierda,
        onChangeReemplazoCaderaIzquierda
    } = useAntecedentesPersonales();

    // Custom HOC para antecedentes familiares del paciente
    const {
        item: pacienteAntecedentesFamiliares,
        onChangeItem: onChangePacienteAntecedentesFamiliares
    } = useItem();

    const agregarPaciente = () => {
        const pacienteNuevo = {
            'fecha': `${todayDay} de ${todayMonth} de ${todayYear}`,
            'profesionalName': profesionalName,
            'pacienteName': pacienteName,
            'pacienteObraSocial': pacienteObraSocial,
            'pacienteNumeroDeAfiliado': pacienteNumeroDeAfiliado,
            'pacienteDomicilio': pacienteDomicilio,
            'pacienteLocalidad': pacienteLocalidad,
            'pacienteCodigoPostal': pacienteCodigoPostal,
            'pacienteTelefono': pacienteTelefono,
            'pacienteDNI': pacienteDNI,
            'pacienteEdad': pacienteEdad,
            'pacienteFechaDeNacimiento': `${pacienteNacimientoDia} de ${pacienteNacimientoMes} de ${pacienteNacimientoAño}`,
            'pacienteAntecedentesPersonales': {
                'diabetes': diabetes,
                'hipertension': hipertension,
                'fumador': fumador,
                'cardiaco': cardiaco,
                'embarazo': embarazo,
                'artrosis': artrosis,
                'artritis': artritis,
                'marcapasos': marcapasos,
                'usaProtesis': usaProtesis,
                'reemplazoCaderaDerecha': reemplazoCaderaDerecha,
                'reemplazoCaderaIzquierda': reemplazoCaderaIzquierda
            },
            'pacienteAntecedentesFamiliares': pacienteAntecedentesFamiliares
        }
        console.log(pacienteNuevo)
    }

    // Fecha de hoy
    const fecha = new Date();
    const hoy = fecha.getDate();
    const mesActual = fecha.getMonth(); 
    const añoActual = fecha.getFullYear();

    return(
        <React.Fragment>
        <Container>
        <form>
            <h1 className="ficha-kinesica-title">Ficha Kinesica</h1>
            <hr id="ficha-kinesica-first-divider"/>
            {/* Contenedor de fecha y nombre del profesional*/}
            <Container sx={{
                display:'flex',
                alignItems:'flex-start',
                justifyContent:'center',
                flexWrap:'wrap',
                gap:5
            }}>
                <CustomDateInput 
                    day={hoy}
                    onChangeDay={onChangeTodayDay}
                    monthInNumber={mesActual}
                    onChangeMonth={onChangeTodayMonth}
                    year={añoActual}
                    onChangeYear={onChangeTodayYear}
                    añoInicial={2022} 
                    añoFinal={2032} 
                    id="today-date"
                />
                <CustomSelectInput 
                    item={profesionalName}
                    onChangeItem={onChangeProfesionalName}
                    label={'Nombre del profesional'}
                    options={['Campidoglio Nicolás']}
                    id={'profesional-name'}
                />
            </Container>
            <hr/>
            <h2 className="ficha-kinesica-title">Datos del paciente</h2>
            {/* Contenedor de datos del paciente */}
            <Container sx={{
                display:'flex',
                flexWrap:'wrap',
                justifyContent:'center',
                gap:5
            }}> 
                {/* Nombre del paciente */}
                <TextField 
                    value={pacienteName}
                    onChange={onChangePacienteName}
                    id="paciente-name" 
                    label="Nombre y apellido" 
                    variant="outlined" 
                    sx={{width:'320px'}} 
                    type="text" 
                    required={true}
                />
                {/* Obra social */}
                <CustomSelectInput 
                    item={pacienteObraSocial}
                    onChangeItem={onChangePacienteObraSocial}
                    label={'Obra social'}
                    options={['AMBAR', 'OSECAC', 'ATSA-OSPSA']}
                    id={'paciente-obra-social'}
                />
                {/* Número de afiliado */}
                <TextField 
                    value={pacienteNumeroDeAfiliado}
                    onChange={onChangePacienteNumeroDeAfiliado}
                    id="paciente-numero-afiliado" 
                    label="Número de afiliado" 
                    variant="outlined" 
                    sx={{width:'320px'}} 
                    type="number"
                />
                {/* Domicilio */}
                <TextField 
                    value={pacienteDomicilio}
                    onChange={onChangePacienteDomicilio}
                    id="paciente-domicilio" 
                    label="Domicilio" 
                    variant="outlined" 
                    sx={{width:'320px'}} 
                    type="text"
                    required={true}
                />
                {/* Localidad */}
                <CustomSelectInput 
                    item={pacienteLocalidad}
                    onChangeItem={onChangePacienteLocalidad}
                    label={'Localidad'}
                    options={['Cipolletti', 'Fernández Oro', 'Cinco Saltos']}
                    id={'paciente-localidad'}
                />
                {/* Código postal */}
                <TextField 
                    value={pacienteCodigoPostal}
                    onChange={onChangePacienteCodigoPostal}
                    id="paciente-codigo-postal" 
                    label="Código postal" 
                    variant="outlined" 
                    sx={{width:'320px'}} 
                    type="number"
                    required={true}
                />
                {/* Teléfono */}
                <TextField
                    value={pacienteTelefono}
                    onChange={onChangePacienteTelefono}
                    id="paciente-telefono" 
                    label="Teléfono" 
                    variant="outlined" 
                    sx={{width:'320px'}} 
                    type="number"
                    required={true}
                />
                {/* DNI */}
                <TextField 
                    value={pacienteDNI}
                    onChange={onChangePacienteDNI}
                    id="paciente-dni" 
                    label="DNI" 
                    variant="outlined" 
                    sx={{width:'320px'}} 
                    type="number"
                    required={true}
                />
                {/* Edad */}
                <CustomSelectInput 
                    item={pacienteEdad}
                    onChangeItem={onChangePacienteEdad}
                    label={'Edad'}
                    options={edades}
                    id={'paciente-edad'}
                />
                {/* Fecha de nacimiento */}
                <Box sx={{width:'320px'}}>
                    <h3 className="ficha-kinesica-title">Fecha de nacimiento</h3>
                    <CustomDateInput
                        day={pacienteNacimientoDia}
                        onChangeDay={onChangePacienteNacimientoDia}
                        month={pacienteNacimientoMes}
                        onChangeMonth={onChangePacienteNacimientoMes}
                        year={pacienteNacimientoAño}
                        onChangeYear={onChangePacienteNacimientoAño}
                        añoInicial={1922} 
                        añoFinal={2022} 
                        id="today-date"
                    />
                </Box>
                {/* Antecedentes personales */}
                <FormGroup sx={{width:'100%'}}>
                    <h3 className="ficha-kinesica-title">Antecedentes personales</h3>
                    <Box sx={{display:'flex', flexWrap:'wrap', justifyContent:'center', gap:1}}>
                        {/* Diabetes */}
                        <FormControlLabel 
                            sx={{width:'320px'}} 
                            control={<Switch />} 
                            label={'Diabetes'}
                            onChange={onChangeDiabetes}
                        />
                        {/* Hipertensión */}
                        <FormControlLabel 
                            sx={{width:'320px'}} 
                            control={<Switch />} 
                            label={'Hipertensión'}
                            value={hipertension}
                            onChange={onChangeHipertension}
                        />
                        {/* Fumador */}
                        <FormControlLabel 
                            sx={{width:'320px'}} 
                            control={<Switch />} 
                            label={'Fumador'}
                            value={fumador}
                            onChange={onChangeFumador}
                        />
                        {/* Cardíaco */}
                        <FormControlLabel 
                            sx={{width:'320px'}} 
                            control={<Switch />} 
                            label={'Cardíaco'}
                            value={cardiaco}
                            onChange={onChangeCardiaco}
                        />
                        {/* Embarazo */}
                        <FormControlLabel
                            sx={{width:'320px'}} 
                            control={<Switch />} 
                            label={'Embarazo'}
                            value={embarazo}
                            onChange={onChangeEmbarazo}
                        />
                        {/* Artrosis */}
                        <FormControlLabel 
                            sx={{width:'320px'}} 
                            control={<Switch />} 
                            label={'Artrosis'}
                            value={artrosis}
                            onChange={onChangeArtrosis}
                        />
                        {/* Artritis */}
                        <FormControlLabel
                            sx={{width:'320px'}} 
                            control={<Switch />} 
                            label={'Artritis'}
                            value={artritis}
                            onChange={onChangeArtritis}
                        />
                        {/* Marcapasos */}
                        <FormControlLabel 
                            sx={{width:'320px'}} 
                            control={<Switch />} 
                            label={'Marcapasos'}
                            value={marcapasos}
                            onChange={onChangeMarcapasos}
                        />
                        {/* Usa prótesis */}
                        <FormControlLabel 
                            sx={{width:'320px'}} 
                            control={<Switch />} 
                            label={'Usa prótesis'}
                            value={usaProtesis}
                            onChange={onChangeUsaProtesis}
                        />
                        {/* Reemplazo de cadera derecha */}
                        <FormControlLabel 
                            sx={{width:'320px'}} 
                            control={<Switch />} 
                            label={'Reemplazo de cadera derecha'}
                            value={reemplazoCaderaDerecha}
                            onChange={onChangeReemplazoCaderaDerecha}
                        />
                        {/* Reemplazo de cadera izquierda */}
                        <FormControlLabel 
                            sx={{width:'320px'}} 
                            control={<Switch />} 
                            label={'Reemplazo de cadera izquierda'}
                            value={reemplazoCaderaIzquierda}
                            onChange={onChangeReemplazoCaderaIzquierda}
                        />
                    </Box>
                </FormGroup>
                {/* Antecedentes familiares */}
                <Box sx={{width:'100%'}}>
                <h3 className="ficha-kinesica-title">Antecedentes familiares</h3>
                <TextareaAutosize
                    id="paciente-antecedentes-familiares"
                    aria-label="minimum height"
                    minRows={5}
                    placeholder="Antecedentes familiares"
                    style={{ padding:'8px', width:'100%', fontFamily:'Roboto', fontSize:'16px', textIndent:'12px'}}
                    value={pacienteAntecedentesFamiliares}
                    onChange={onChangePacienteAntecedentesFamiliares}
                />
                </Box>
                <Button type="button" onClick={agregarPaciente} sx={{mb:4, width:'200px'}} variant="contained">Registrar paciente</Button>

            </Container>
        </form> 
        </Container>
        </React.Fragment>
    );
}

export { AgregarPaciente }
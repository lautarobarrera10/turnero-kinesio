import React from 'react'

const useAntecedentesPersonales = () => {
    const [diabetes, setDiabetes] = React.useState(false);
    const [hipertension, setHipertension] = React.useState(false);
    const [fumador, setFumador] = React.useState(false);
    const [cardiaco, setCardiaco] = React.useState(false);
    const [embarazo, setEmbarazo] = React.useState(false);
    const [artrosis, setArtrosis] = React.useState(false);
    const [artritis, setArtritis] = React.useState(false);
    const [marcapasos, setMarcapasos] = React.useState(false);
    const [usaProtesis, setUsaProtesis] = React.useState(false);
    const [reemplazoCaderaDerecha, setReemplazoCaderaDerecha] = React.useState(false);
    const [reemplazoCaderaIzquierda, setReemplazoCaderaIzquierda] = React.useState(false);

    const onChangeDiabetes = () => {
        setDiabetes(!diabetes);
    }
    const onChangeHipertension = () => {
        setHipertension(!hipertension);
    }
    const onChangeFumador = () => {
        setFumador(!fumador);
    }
    const onChangeCardiaco = () => {
        setCardiaco(!cardiaco);
    }
    const onChangeEmbarazo = () => {
        setEmbarazo(!embarazo);
    }
    const onChangeArtrosis = () => {
        setArtrosis(!artrosis);
    }
    const onChangeArtritis = () => {
        setArtritis(!artritis);
    }
    const onChangeMarcapasos = () => {
        setMarcapasos(!marcapasos);
    }
    const onChangeUsaProtesis = () => {
        setUsaProtesis(!usaProtesis);
    }
    const onChangeReemplazoCaderaDerecha = () => {
        setReemplazoCaderaDerecha(!reemplazoCaderaDerecha);
    }
    const onChangeReemplazoCaderaIzquierda = () => {
        setReemplazoCaderaIzquierda(!reemplazoCaderaIzquierda);
    }

    return {
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
        marcapasos,
        onChangeMarcapasos,
        onChangeArtritis,
        usaProtesis,
        onChangeUsaProtesis,
        reemplazoCaderaDerecha,
        onChangeReemplazoCaderaDerecha,
        reemplazoCaderaIzquierda,
        onChangeReemplazoCaderaIzquierda
    }
}

export { useAntecedentesPersonales }
import React from 'react'

const useDate = () => {
    // Estados
    const [day, setDay] = React.useState(1);
    const [month, setMonth] = React.useState('Enero');
    const [year, setYear] = React.useState(2000);
    
    // Funciones actualizadoras de estado
    const onChangeDay = (event) => {
      setDay(event.target.value);
    };
    const onChangeMonth = (event) => {
      setMonth(event.target.value);
    };
    const onChangeYear = (event) => {
      setYear(event.target.value);
    };
  return {
    day,
    onChangeDay,
    month,
    onChangeMonth,
    year,
    onChangeYear
  }
}

export { useDate }
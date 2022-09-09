import React from "react";
import { Container, Stack, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { textTransform } from "@mui/system";

function Calendar() {
  const dias = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes'];
  const horarios= [
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00',
    '17:30',
    '18:00',
    '18:30',
    '19:00',
    '19:30',
    '20:00',
    '20:30',
    '21:00',
  ];

    return(
      <Container>
        <Container sx={{
          display:'flex',
          justifyContent:'center',
          flexWrap:'wrap'
        }}>
          {dias.map(dia => (
          <Box sx={{
            width: '220px',
            textAlign:'center',
            textTransform:'uppercase'
          }}>
            <h2>{dia}</h2>
            <Box>
              {horarios.map(horario => (
                <React.Fragment>
                <h3>{horario}</h3>
                <Box sx={{
                  width:'160px',
                  m:'0 auto',
                  px:2,
                  display:'flex', 
                  alignItems:'center',
                  justifyContent:'flex-end',
                  border:'1px solid black',
                  fontSize:'14px'
                }}>
                  <p>Agregar turno</p>
                  <AddIcon sx={{
                    pl:1
                  }}
                  />
                </Box>
                </React.Fragment>
              ))}
            </Box>
          </Box>
          ))}
        </Container>
      </Container>
    );
}

export { Calendar }
import React, { useEffect, useState } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import VerifiedIcon from '@mui/icons-material/Verified';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
export default function Estudios() {

    const [studios] = useState([
        {primary:"Licenciada en Informática",secondary:"Universidad Mayor de San Andrés (UMSA),2017"},
        {primary:"android for beginners",secondary:"GDG Google Developers in STUDY JAMS"},
        {primary:"Scrum Fundamental Certified (SFC)",secondary:"SCRUMStudy"},
        {primary:"JavaScript Algorithms and Data Structures",secondary:"FreeCodeCamp"},
        {primary:"HTML & CSS - Certification Course for Beginners",secondary:"Udemy"},
        {primary:"Curso de maquetación web de lo básico a lo avanzado",secondary:"Udemy"},
        {primary:"Universidad de Lógica de Programación - Aprende 7 Lenguajes!",secondary:"Udemy"},
        {primary:"Seis pasos para el bienestar laboral",secondary:"Udemy"},
        {primary:"Introducción a la metodología del ÉXITO",secondary:"UDEMY"},
        {primary:"Lenguaje Corporal Asertivo: Para líderes de éxito",secondary:"UDEMY"},
        {primary:"Oratoria y Comunicación Efectiva con PNL",secondary:"UDEMY"},
        {primary:"Git para desarrolladores",secondary:"UDEMY"},
        {primary:"Conceptos de la programación",secondary:"OpenBootcamp"},
    ]);
    const [aux,setAux]=useState([]);
    const [max]=useState(7);
    const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    if(value!==page){
        setAux(studios.slice((value-1)*max, value*max));
        setPage(value);
    }
  };
  useEffect(() => {
    /// state
    setAux(studios.slice((page-1)*max, page*max));
  }, []);
    return (
        
    
    
    <Stack spacing={1}   
    justifyContent="center"
    alignItems="center">

     
        <List sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}>
            
            {aux.map((row, index) => (
            
                <ListItem  key={index} style={{ height: 70  }}>
                    <ListItemIcon >
                        <VerifiedIcon />
                    </ListItemIcon>
                    <ListItemText 
                        primary={<Typography variant="h8">{row.primary}</Typography>}
                        secondary={row.secondary}
                    />
                    
                </ListItem>
            
            
            ))}

            {max-aux.length > 0 && (
            <ListItem style={{ height: 70 * (max-aux.length) }}>
              <ListItemText 
                        primary={""}
                        secondary={""}
                    />
            </ListItem>
          )}
        
        </List>
        
        
        <Pagination  count={Math.ceil(studios.length/max)}  page={page} onChange={handleChange} variant="outlined" color="primary" />
 
 
      
    </Stack>
    
  );
}
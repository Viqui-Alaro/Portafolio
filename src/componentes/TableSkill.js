import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5),
  }));

export default function TableSkill() {
    const [backend, ] = React.useState([
        { key: 0, label: 'NodeJS',img:'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg',url:'' },
        { key: 1, label: 'Express' ,img:'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg',url:''},
        { key: 2, label: 'Java' ,img:'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg',url:''},
        { key: 3, label: 'JavaScript' ,img:'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',url:''},
        { key: 4, label: 'Hibernate' ,img:'https://www.vectorlogo.zone/logos/hibernate/hibernate-icon.svg',url:''},
        { key: 5, label: 'JPA'  ,img:'https://camo.githubusercontent.com/4545b55c7771bbd175235c80b518dcbbf2f6ee0b984a51ad9363cba8cb70e67c/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f737072696e67696f2f737072696e67696f2d69636f6e2e737667',url:''},
      ]);
    const [frontend ] = React.useState([
        { key: 0, label: 'ReactJS',img:'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg',url:'' },
        { key: 1, label: 'jQuery' ,img:'https://www.vectorlogo.zone/logos/jquery/jquery-icon.svg',url:''},
        { key: 2, label: 'CSS3' ,img:'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg',url:''},
        { key: 3, label: 'HTML5' ,img:'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg',url:''},
        { key: 4, label: 'Boostrap'  ,img:'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg',url:''},
        { key: 5, label: 'Tailwind'  ,img:'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg',url:''},
        { key: 6, label: 'MUI'  ,img:'https://cdn.worldvectorlogo.com/logos/material-ui-1.svg',url:''},
      ]);
    const [database] = React.useState([
        { key: 0, label: 'Mysql',img:'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg',url:'' },
        { key: 1, label: 'Oracle' ,img:'https://raw.githubusercontent.com/devicons/devicon/master/icons/oracle/oracle-original.svg',url:''},
        { key: 2, label: 'PostgresSQL' ,img:'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg',url:''},
        { key: 3, label: 'MongoDB' ,img:'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg',url:''},
        { key: 4, label: 'SQLServer'  ,img:'https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg',url:''},
        { key: 5, label: 'SQLlite'  ,img:'https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg',url:''},
        { key: 6, label: 'FireBase'  ,img:'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg',url:''},
      ]);
      const handleClick = () => {
        console.info('You clicked the Chip.');
      };
  return (
    <div >
      <Stack direction="column" padding={2} >
        <Typography align="left" variant="h6" gutterBottom sx={{ mt: 1}}>
            Backend
        </Typography>
        <Paper
            variant="outlined"
            sx={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                listStyle: 'none',
                p: 0,
                m: 0,
            }}
            component="ul"
        >
            {backend.map((data) => {
                return (
                <ListItem key={data.key}>
                    <Chip
                    avatar={<Avatar alt="Natacha" src={data.img} />}
                    label={data.label}
                    variant="outlined"
                    onClick={handleClick}
                    />
                    
                </ListItem>
                );
            })}
        </Paper>


        <Typography align="left" variant="h6" gutterBottom sx={{ mt: 3}}>
            Frontend
        </Typography>
        <Paper
            variant="outlined"
            sx={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                listStyle: 'none',
                p: 0,
                m: 0,
            }}
            component="ul"
        >
            {frontend.map((data) => {
                return (
                <ListItem key={data.key}>
                    <Chip
                    avatar={<Avatar alt="Natacha" src={data.img} />}
                    label={data.label}
                    variant="outlined"
                    />
                </ListItem>
                );
            })}
        </Paper>


        <Typography align="left" variant="h6" gutterBottom sx={{ mt: 3}}>
            DataBase
        </Typography>
        <Paper
            variant="outlined"
            sx={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                listStyle: 'none',
                p: 0,
                m: 0,
            }}
            component="ul"
        >
            {database.map((data) => {
                return (
                <ListItem key={data.key}>
                    <Chip
                    avatar={<Avatar alt="Natacha" src={data.img} />}
                    label={data.label}
                    variant="outlined"
                    />
                </ListItem>
                );
            })}
        </Paper>
    </Stack>
    </div>
  );
}
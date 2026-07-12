import * as React from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import SchoolIcon from '@mui/icons-material/School';
import HandymanIcon from '@mui/icons-material/Handyman';
import Perfil from './Perfil';

import Estudios from './Estudios';
import TableSkill from './TableSkill';
const blue = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#80BFFF',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
  800: '#004C99',
  900: '#003A75',
};

const grey = {
  50: '#f6f8fa',
  100: '#eaeef2',
  200: '#d0d7de',
  300: '#afb8c1',
  400: '#8c959f',
  500: '#6e7781',
  600: '#57606a',
  700: '#424a53',
  800: '#32383f',
  900: '#24292f',
};

const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: white;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent;
  width: 65px;
  padding: 12px;
  margin: 6px 6px;
  border: none;
  border-radius: 7px;

  justify-content: center;

  &:hover {
    background-color: #448AFF;
    
  }

  &:focus {
    color: #fff;
    
    outline: 3px solid ${blue[400]};
  }

  &.${tabUnstyledClasses.selected} {
    background-color: #fff;
    width: 75px;
    color:  #3F51B5;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;

`;

const TabsList = styled(TabsListUnstyled)(
  ({ theme }) => `

  background-color: #3F51B5;
  

  margin-bottom: 16px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  box-shadow: 0px 4px 8px ${theme.palette.mode === 'dark' ? grey[900] : grey[200]};
  `,
);

export default function TablasPrueba() {
  return (
    <TabsUnstyled defaultValue={0}>
      <TabsList>
        <Tab ><AssignmentIndIcon /></Tab>
        <Tab><SchoolIcon/></Tab>
        <Tab><HandymanIcon /></Tab>
      </TabsList>
      <TabPanel value={0}><Perfil /></TabPanel>
      <TabPanel value={1}><Estudios /></TabPanel>
      <TabPanel value={2}><TableSkill /></TabPanel>
    </TabsUnstyled>
  );
}
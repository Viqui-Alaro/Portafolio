import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Perfil from "./Perfil";
import Estudios from "./Estudios";
import TableSkill from "./TableSkill";
import PhoneIcon from '@mui/icons-material/Phone';

import TablasPrueba from "./TablasPrueba";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 1 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      {/**¨pruebaaa */}
      <TablasPrueba/>
      {/* fin de prueba*/}
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="icon position tabs example"
        >
          <Tab  icon={<PhoneIcon />} label="perfil" {...a11yProps(0)} />
          <Tab label="estudios" {...a11yProps(1)} />
          <Tab label="skill" {...a11yProps(2)} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <Perfil />
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Estudios />
      </TabPanel>

      <TabPanel value={value} index={2}>
        <TableSkill />
      </TabPanel>
    </Box>
  );
}

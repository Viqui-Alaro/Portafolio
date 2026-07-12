import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CodeIcon from '@mui/icons-material/Code';

export default function DenseAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0}>
        <Toolbar variant="dense" sx={{ py: 0.5 }}>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 1 }}>
            <CodeIcon />
          </IconButton>
          <Box>
            <Typography variant="subtitle1" color="inherit" component="div" sx={{ fontWeight: 700, lineHeight: 1.1 }}>
              Abraham Villca
            </Typography>
            <Typography variant="caption" color="inherit" sx={{ opacity: 0.8 }}>
              Full Stack Developer
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

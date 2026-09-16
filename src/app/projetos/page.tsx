"use client";

import { AppBar, Button, Card, Grid2, Toolbar, Typography } from '@mui/material'
import { useState } from 'react';

export default function Home() {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Grid2 container size={12}>
      <AppBar position="static" style={{ backgroundColor: '#090f13' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Meus Projetos
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid2 container spacing={2} style={{ padding: '20px' }}>
        {
          [1, 2, 3, 4, 5, 6].map((item) => (
            <Card
              style={{
                width: '200px',
                backgroundColor: '#1e1e1e',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="h5">Projeto {item}</Typography>
            </Card>
          ))
        }
      </Grid2>
    </Grid2>
  )
}

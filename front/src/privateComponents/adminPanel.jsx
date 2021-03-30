import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Link } from "react-router-dom"
import adminMenuStyles from "../utils/adminStyles";


const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {
  const classes = adminMenuStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">

            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item xs={12}>
                  <Link to="/admin/uploadOrders" style={{ textDecoration: 'none', color: "inherit" }}>
                    <Button variant="contained"
                      color="primary">
                      Cargar Ordenes
                  </Button>
                  </Link>
                </Grid>
                <Grid item xs={12}>
                  <Link to="/admin/users" style={{ textDecoration: 'none', color: "inherit" }}>
                    <Button variant="contained"
                      color="primary">
                      Cadeteria
                  </Button>
                  </Link>
                </Grid>
                <Grid item xs={12}>
                  <Link to="/admin/categories" style={{ textDecoration: 'none', color: "inherit" }}>
                    <Button variant="contained"
                      color="primary">
                      Cadete
                  </Button>
                  </Link>
                </Grid>
                <Grid item xs={12}>
                  <Link to="/admin/orders" style={{ textDecoration: 'none', color: "inherit" }}>
                    <Button variant="contained"
                      color="primary">
                      Solicitudes
                  </Button>
                  </Link>
                </Grid>
                <Grid item xs={12}>
                  <Link to="/admin/orders" style={{ textDecoration: 'none', color: "inherit" }}>
                    <Button variant="contained"
                      color="primary">
                      Metricas
                  </Button>
                  </Link>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
    </React.Fragment>
  );
}
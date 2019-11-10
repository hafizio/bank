import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Card, CardContent, AppBar, Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  }),
);

const Index = () => {
  const classes = useStyles({});
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
      <AppBar position="static" style={{marginBottom: 30}}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            BANK
          </Typography>
        </Toolbar>
      </AppBar>
      <Card className={classes.card}>
        <CardContent>
          <React.Fragment>
            <Typography variant="h6" gutterBottom>
              Loan Calculator
          </Typography>
            <form action={process.env.LOAN_SERVICE_URL} method="POST">
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="carprice"
                    name="carprice"
                    label="Car Price (MYR)"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="downpayment"
                    name="downpayment"
                    label="Down Payment (MYR)"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="periodyear"
                    name="periodyear"
                    label="Loan Period (Years)"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="interest"
                    name="interest"
                    label="Interest Rate (% per annum)"
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Grid item xs={12} sm={12} style={{marginTop: 30}}>
                <Button type="submit" variant="contained" color="secondary" size="large">
                  Submit
                </Button>
              </Grid>
            </form>
          </React.Fragment>
        </CardContent>
      </Card>
      <style jsx global>{`
        body { 
          background: lightgray;
        }
      `}</style>
    </div>
  );
}

export default Index
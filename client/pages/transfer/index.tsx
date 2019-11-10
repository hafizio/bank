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
      <AppBar position="static">
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
              Balance Transfer
          </Typography>
            <form action={process.env.TRANSFER_SERVICE_URL} method="POST">
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    disabled
                    value={localStorage.accountId && localStorage.accountId}
                    id="accountTransferor"
                    name="accountTransferor"
                    label="Account ID"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    disabled
                    value={localStorage && localStorage.balance}
                    id="balanceTransferor"
                    name="balanceTransferor"
                    label="Balance Transferor (MYR)"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="accountTransferee"
                    name="accountTransferee"
                    label="Transferee Account ID"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="transferAmount"
                    name="transferAmount"
                    label="Transfer Amount (MYR)"
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Grid item xs={12} sm={12}>
                <Button type="submit" variant="contained" color="secondary" size="large">
                  Submit
                </Button>
              </Grid>
            </form>
          </React.Fragment>
        </CardContent>
      </Card>
    </div>
  );
}

export default Index
import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Card, CardContent, AppBar, Toolbar, IconButton, Snackbar } from '@material-ui/core';
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

async function postForm() {
  let formElement = document.querySelector("form");
  let formData = new FormData(formElement);

  try {
    const response = await fetch(process.env.TRANSFER_SERVICE_URL, {
      method: 'POST',
      body: formData
    });

    const result = await response.json();
    let message = document.querySelector('#message-id') as HTMLInputElement

    message.innerHTML = result.message

    let balance = result.balance_transferor
    let balanceField = document.querySelector('#balanceTransferor') as HTMLInputElement

    balanceField.value = balance.toFixed(2);
    localStorage.accountBalance = balance;
    console.log('Success:', JSON.stringify(result));
  } catch (error) {
    console.error('Error:', error);
  }
}

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
              Balance Transfer
          </Typography>
            <form>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    defaultValue={localStorage.accountId && localStorage.accountId}
                    id="accountTransferor"
                    name="accountTransferor"
                    label="Account ID"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    type="number"
                    defaultValue={localStorage && localStorage.accountBalance}
                    id="balanceTransferor"
                    name="balance_transferor"
                    label="Balance Transferor (MYR)"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="accountTransferee"
                    name="account_transferee"
                    label="Transferee Account ID"
                    defaultValue="3ef42f2d-d656-40b1-b686-d8257d050c46"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    type="number"
                    id="transferAmount"
                    name="transfer_amount"
                    label="Transfer Amount (MYR)"
                    defaultValue="200.50"
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Grid item xs={12} sm={12} style={{marginTop: 30}}>
                <Button variant="contained" color="secondary" size="large" onClick={postForm}>
                  Submit
                </Button>
              </Grid>
            </form>
          </React.Fragment>
        </CardContent>
      </Card>
      <Snackbar
        open
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">Transfer page is interacting with a web service at: {process.env.TRANSFER_SERVICE_URL}</span>}
      />
      <style jsx global>{`
        body { 
          background: lightgray;
        }
      `}</style>
    </div>
  );
}

export default Index
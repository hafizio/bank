import Link from 'next/link';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import { Card, CardContent } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      minWidth: 275,
    },
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

const Home = () => {
  const classes = useStyles({});

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{marginBottom: 30}} >
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            BANK
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid item xs={12} md={12} alignItems="center">
        <Grid container spacing={3} direction="row" alignItems="center">
          <Grid item md={3}>
            <Card className={classes.card}>
              <CardContent>
                  <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Check Your Balance
                  </Typography>
                  <Button>
                    <Link href="/balance" as={`/balance`}>Balance</Link>
                  </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={3}>
            <Card className={classes.card}>
              <CardContent>
                  <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Transfer Your Balance
                  </Typography>
                  <Button>
                    <Link href="/transfer" as={`/transfer`}>Transfer</Link>
                  </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={3}>
            <Card className={classes.card}>
              <CardContent>
                  <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Calculate Your Loan
                  </Typography>
                  <Button>
                    <Link href="/loan" as={`/loan`}>Loan</Link>
                  </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <style jsx global>{`
        body { 
          background: lightgray;
        }
      `}</style>
    </div>
  )
}

export default Home

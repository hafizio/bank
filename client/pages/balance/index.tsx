import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import { NextPage } from 'next';
import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    pos: {
        marginBottom: 12,
      }
  }),
);

type Props = {
    uuid: string
    currency: string
    amount: number
}

const Index: NextPage<Props> = ({ uuid, currency, amount }) => {
    const classes = useStyles({});
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <div className={classes.root}>
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
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Account Balance
                </Typography>
                    <Typography variant="h5" component="h2">
                        Account ID
                </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {uuid}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        Amount
                </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {currency} {amount}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

Index.getInitialProps = async () => {
    const res = await fetch(process.env.BALANCE_SERVICE_URL)
    const data: Props = await res.json()

    localStorage.accountId = data.uuid;
    localStorage.accountBalance = data.amount;

    return { ...data }
}

export default Index

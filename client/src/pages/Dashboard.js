import React, { Fragment } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


import Logo from '../assets/parcels-icon.png';

import Footer from './Footer';

import {
  Link
} from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  title: {
    color: 'white',
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  appBar: {
    backgroundColor: '#3f3d4b',
},
}));

export default function About() {
  const classes = useStyles();

  return (
    <Fragment>
      <AppBar position="static"  className={classes.appBar}>
        <Toolbar>
          <Link to='/'>
            <img src={Logo} style={{ maxHeight: '100%', height: '60px' }}  alt={""}/>
          </Link>
          <Link to='/'>
            <Typography className={classes.title} variant="h4" noWrap>
              DeLA
          </Typography>
          </Link>
          <div className={classes.grow} />
          
          <div>
            <a href="https://github.com/allilou/onchain-land-administration"><Button color="secondary">Github</Button></a>
            <Link to='/about'><Button color="secondary">About</Button></Link>
            <Link to='/'><Button color="secondary" variant="outlined">Map</Button></Link>
          </div>
         
        </Toolbar>
      </AppBar>

      <div className="landingContainer">
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <div className='opening-blurb'>
                <Typography variant='h3'> Dashboard </Typography>
                <hr />
                
              </div>
            </Grid>
            
          </Grid>
        </div>
      </div>

      <Footer />

    </Fragment>
  );
}

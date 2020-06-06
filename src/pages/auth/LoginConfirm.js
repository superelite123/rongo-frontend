import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import logo from 'assets/logo.PNG'
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#BCAE92',
        height:'100%'
    },
    paper: {
      marginTop: theme.spacing(20),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: 350,
    },
    logo: {
        width:250,
        height:50,
    },
}));
const LoginConfirm = () => {
    const classes = useStyles();
    return (
        <Container maxWidth="false" component="main" className={classes.root} >
            <div className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid align="center" item xs={12}>
                        <img src={logo} alt='logo' className={classes.logo} />
                    </Grid>
                    <Grid align="center" item xs={12}>
                        <Box component="span" display="block">hello@admin.com</Box>
                    </Grid>
                    <Grid align="center" item xs={12}>
                        <Box component="span" display="block">パスコードを入れてください</Box>
                    </Grid>
                    <Grid align="center" item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            style={{backgroundColor: 'white',borderRadius:0}}
                        />
                    </Grid>
                </Grid>
            </div>
        </Container>
    );
};

export default LoginConfirm;
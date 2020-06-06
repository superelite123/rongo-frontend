import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Alert from '@material-ui/lab/Alert';
//logo
import logo from 'assets/logo.PNG'
function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
}
function login()
{
    fetch("http://localhost:8000/api/products")
    .then(res => res.json())
    .then(
        (result) => {
            console.log(result)
        },
    )
    console.log('h')
}
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    paper: {
      marginTop: theme.spacing(12),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: 350,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      background: 'linear-gradient(45deg, #BCAE92 30%, #BCAE92 90%)',
      color: "white"
    },
    logo: {
        width:250,
        height:50,
    }
}));
const Login = () => {
    const classes = useStyles();
    const [state, setState] = useState({ visibleAlert: false});
    return (
        <Container maxWidth="false" component="main" className={classes.root} >
            <div className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid align="center" item xs={12}>
                    {state.visibleAlert ?  
                    <Alert variant="filled" severity="error">
                        メールアドレスまたはパスワードが違います
                    </Alert> : ''}
                    </Grid>
                    <Grid align="center" item xs={12}>
                        <img src={logo} alt='logo' className={classes.logo} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="email"
                            placeholder="メールアドレス"
                            name="email"
                            autoComplete="email"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="password"
                            placeholder="パスワード"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    className={classes.submit}
                    onClick={() => login()}
                >
                    ログインする
                </Button>
            </div>
        </Container>
    );
};

export default Login;
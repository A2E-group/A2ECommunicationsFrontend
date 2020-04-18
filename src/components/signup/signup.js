import React, { useState }from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Valdation from '../../validations'
import {useHistory} from "react-router-dom";
import './signup.css'
function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://www.linkedin.com/in/bala-krishna-uruturu-48269a117/">
                Developed by Balakrishna U
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
export default function SignUp() {
    const classes = useStyles();
    const history = useHistory();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [firstNameError, setFirstNameError] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    // console.log(firstName);
    const onSumbit = {
        onSubmitCall(cb){
            if(!firstName.length){
                setFirstNameError(true);
                return false;
            }else if(!lastName.length){
                setLastNameError(true);
                return false;
            }else if(!Valdation.validateEmail(email)){
                setEmailError(true);
                return false;
            }else{
                console.log("all values",firstName, lastName, email);
                cb();
            }
        } 
    }
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    {/* <LockOutlinedIcon /> */}
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
        </Typography>
                {/* <form className={classes.form} noValidate > */}
                <div>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                error={firstNameError}
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                                onChange = {(e,val)=> {
                                    console.log('firt name change',e.target.value,val);
                                    setFirstName(e.target.value);
                                    if(e.target.value){
                                        setFirstNameError(false);
                                    }
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                error={lastNameError}
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="lname"
                                onChange = {(e,val)=> {
                                    setLastName(e.target.value,val);
                                    if(e.target.value){
                                        setLastNameError(false);
                                    }
                                }}
                                
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                value={email}
                                fullWidth
                                id="email"
                                error={emailError}
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                onChange = {(e,val)=> {
                                    setEmail(e.target.value,val);
                                    if(e.target.value){
                                        setEmailError(false);
                                    }
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={() => {
                            onSumbit.onSubmitCall(()=> { history.push('/emailverifiction')})
                            }
                        }
                    >
                        Sign Up
          </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="/" variant="body2">
                                Already have an account? Sign in
              </Link>
                        </Grid>
                    </Grid>
                </div>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}
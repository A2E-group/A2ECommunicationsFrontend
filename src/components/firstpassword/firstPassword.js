import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useHistory} from "react-router-dom";
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
export default function FirstPassword() {
    const classes = useStyles();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setpasswordError] = useState(false); 
        let history = useHistory();
        // history.push("/firstpassword")
        const onSumbit = {
            onSubmitCall(cb){
                if(!password.length || password !== confirmPassword){
                    setpasswordError(true);
                    return false;
                }
                console.log("all values",password,confirmPassword );
                cb();
            } 
        }
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="fname"
                                name="emailVerification"
                                variant="outlined"
                                required
                                type="password"
                                fullWidth
                                error={passwordError}
                                id="verificationcode"
                                label="Enter password"
                                autoFocus
                                onChange = {(e,val)=> {
                                    console.log('firt name change',e.target.value,val);
                                    setPassword(e.target.value);
                                    if(e.target.value){
                                        setpasswordError(false);
                                    }
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="fname"
                                name="confirmPassword"
                                variant="outlined"
                                required
                                error={passwordError}
                                type="password"
                                fullWidth
                                id="verificationcode"
                                label="Confirm password"
                                onChange = {(e,val)=> {
                                    console.log('firt name change',e.target.value,val);
                                    setConfirmPassword(e.target.value);
                                    if(e.target.value){
                                        setpasswordError(false);
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
                            onSumbit.onSubmitCall(()=> { history.push('/home')})
                            }
                        }
                    >
                        Confirm
          </Button>
            </div>
        </Container>
    );
}
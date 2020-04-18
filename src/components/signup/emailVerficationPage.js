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
export default function EmailVerificationPage() {
    const classes = useStyles();
    let history = useHistory();
    const [verificationCode, setVerificationCode] = useState('');
    const onSumbit = {
            onSubmitCall(cb){
                console.log("all values",verificationCode);
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
                                name="firstName"
                                variant="outlined"
                                required
                                type="number"
                                fullWidth
                                id="verificationcode"
                                label="Enter verification code"
                                autoFocus
                                onChange = {(e,val)=> {
                                    console.log('firt name change',e.target.value,val);
                                    setVerificationCode(e.target.value);
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
                            onSumbit.onSubmitCall(()=> { history.push('/firstpassword')})
                            }
                        }
                    >
                        Submit
          </Button>
            </div>
        </Container>
    );
}
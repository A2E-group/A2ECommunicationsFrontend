import React, { Component }from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Valdation from '../../validations'
import { connect } from 'react-redux';
import { postSignUp } from "../../actions/SessionActions";
import './signup.css'
class SignUp extends Component {
    constructor(props) {
      super(props);
    this.state = {
        firstName: '',
        firstNameError: false,
        lastName:'',
        lastNameError: false,
        email:'',
        emailError:false,
        isVerificationSent: props.isVerificationSent,
        errorMsg:''
    }
    if(props.isVerificationSent){
        props.history.push("./emailverifiction")
    }
}

componentWillReceiveProps(nextProps){
    // console.log(nextProps);
    if(nextProps.isVerificationSent){
        nextProps.history.push("./emailverifiction")
    }
}
    onSubmitCall = (cb) => {
        let {firstName, lastName, email} = this.state;
        if(!firstName.length){
            this.setState({
                firstNameError: true
            })
            return false;
        }else if(!lastName.length){
            this.setState({
                lastNameError: true
            })
            return false;
        }else if(!Valdation.validateEmail(email)){
            this.setState({
                emailError: true
            })
            return false;
        }else if(this.props.isVerificationSent){
            // console.log("all values",firstName, lastName, email);
        } else {
            let user = {isProspect: true, email,firstName: firstName, lastName: lastName}
            let obj = {user: user}
            // console.log(obj, "in the component");
            this.props.postSignUp(obj);
        }
    } 
    onChange = (type, event, value) => {
        this.setState({
            [type]: event.target.value
        })
        // console.log(type, event, value);
    }
    render(){
    let {firstName, lastName, email, lastNameError, firstNameError, emailError} = this.state;
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className="paper">
                <Avatar className="avatar">
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
        </Typography>
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
                                onChange = {this.onChange.bind(this,"firstName")}
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
                                onChange = {this.onChange.bind(this,"lastName")}
                                
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                error={emailError}
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                onChange = {this.onChange.bind(this,"email")}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className="submit"
                        onClick={this.onSubmitCall}
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

}
const mapStateToProps = state => ({
    isVerificationSent: state.session.isVerificationSent || false,
    data: state.session.list
});
export default connect(mapStateToProps, {
    postSignUp
  })(SignUp);


  function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://www.linkedin.com/in/bala-krishna-uruturu-48269a117/">
                Developed by A2E
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
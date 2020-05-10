import React from 'react';
import './App.css';
import Routes from "./routes" 
import CustomizedSnackbars from "./components/snackbarcomponent/customSnackbar";
import { connect } from 'react-redux';
import { snackBarClose } from "./actions/SessionActions";
function App(props) {
  if(props.open){
    setTimeout(()=>{
      props.snackBarClose();
    }, 2000 )
  }
  return (
    <div className="App">
      <Routes/>
      <CustomizedSnackbars
      open={props.open}
      msg={props.msg}
      severity={props.severity}
      />
    </div>
  );
}
// snackBarClose
const mapStateToProps = state => ({
  msg: state.Snackbar.msg || "",
  open: state.Snackbar.open || false,
  severity:state.Snackbar.severity
});
// const mapDispatchToProps = dispatch => {
//     return{
//         onClickVerification: ()=> dispatch({type: "SIGNUP_CLICKED"})
//     }
// }
export default connect(mapStateToProps, { snackBarClose
})(App);

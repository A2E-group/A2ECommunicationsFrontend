// import Cookies from 'js-cookie';
// import { normalize } from 'normalizr';
import * as types from '../constants/ActionTypes';
import {
  SIGNUP_POST,
  EMAIL_VEFICATION_POST,
} from '../constants/ApiConstants';
import { callApi } from '../utils/ApiUtils';
const callerInfo = {
            "appName": "Collaboration",
           "appKey" : "12345"// use these temporary values till we implement proper authorization technique.
  }
  
export const postSignUp = (params, data) => async (dispatch) => {
    params["callerInfo"] = callerInfo;
    let obj1 = {method: 'POST', 
    body: JSON.stringify(params),
    headers: {
        'Content-Type': 'application/json'
      },
    };
    const { json } = await callApi(SIGNUP_POST,obj1);
    let isSuccess = json.a2EHeader.code === 200;
    if(isSuccess){
        let snackBarData  = {
            severity: "success",
            msg: json.a2EHeader.message,
            open: true
        }
        dispatch(signUpSuccess(json));
        dispatch(openSnackBar(snackBarData));
    }else{
        let data = {
            severity:"error",
            msg:json.a2EHeader.message,
            open: true
        }
        console.log(data);
        dispatch(openSnackBar(data));
    }
    // console.log(json);
    // dispatch(signUpSuccess(json));
}

const signUpSuccess = data => ({
    type: types.SIGNUP_SUCCESS,
    data,
  });

  export const snackBarClose  = (a,b) => (dispatch) => {
    dispatch(close({}));
  }
  const close = data => ({
    type: types.SNACKBAR_CLOSE,
  });

export const emailVerfication = (params, data) =>  async (dispatch) => {
    params["callerInfo"] = callerInfo;
    let obj1 = {method: 'POST', 
    body: JSON.stringify(params),
    headers: {
        'Content-Type': 'application/json'
      },
    };
    const { json } = await callApi(EMAIL_VEFICATION_POST,obj1);
    // dispatch(verificationSuccess(json));
    let isSuccess = json.a2EHeader.code === 200;
    if(isSuccess){
        let snackBarData  = {
            severity: "success",
            msg: json.a2EHeader.message,
            open: true
        }
        dispatch(verificationSuccess(json));
        dispatch(openSnackBar(snackBarData));
    }else{
        let data = {
            severity:"error",
            msg:json.a2EHeader.message,
            open: true
        }
        console.log(data);
        dispatch(openSnackBar(data));
    }
}
const verificationSuccess = data => ({
    type: types.VERIFY_SUCCESS,
    data
})
const openSnackBar = data => ({
    type: types.OPEN_SANCKBAR,
    data
     
})


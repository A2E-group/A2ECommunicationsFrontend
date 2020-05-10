import * as types from '../constants/ActionTypes';

const initialState = {
  msg: "",
  open: false,
  severity: ""
};

const Snackbar = (state = initialState, action) => {
  console.log(action, "action obj in snakckbat reducer");
  switch (action.type) {
    // case types.SIGNUP_SUCCESS || types.OPEN_SANCKBAR:
    // console.log(action.data,"data in reducer");
    // // let isVerificationSent = action.data.finalResp.subRespCode === 101  ? true : false;
    // return {
    //   ...state,
    //   msg: "verification code sent to you email address",
    //   open: true,
    //   severity: "success"
    // }
    case types.SNACKBAR_CLOSE:
    return  {
      ...state,
      msg: '',
      open: false,
      severity: ""
    };
    case types.OPEN_SANCKBAR:
    return {
      ...state,
      msg: action.data.msg,
      open: true,
      severity: action.data.severity
    }
    default:
      return state;
  }
};

export default Snackbar;
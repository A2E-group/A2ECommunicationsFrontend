import * as types from '../constants/ActionTypes';

const initialState = {
  isVerificationSent: false,
  id: null,
  likes: {},
  oauthToken: null,
  newStreamSongs: [],
  list:null,
  msg: "",
  open: false,
  severity: "",
  postEmail:'',
  isVerified: false
};
// console.log(action.data,"data in reducer");
// // let isVerificationSent = action.data.finalResp.subRespCode === 101  ? true : false;
// let postEmail = '';
const session = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGNUP_SUCCESS:
    return {
      ...state,
      isVerificationSent: true,
      list: action.data,
      msg: "verification code sent to you email address",
      open: true,
      severity: "success",
      postEmail: action.data.user.email
    }
    case types.VERIFY_SUCCESS:
    return{
      ...state,
      isVerified: true
    }

    default:
      return state;
  }
};

export default session;

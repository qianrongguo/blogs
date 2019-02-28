import {receive_blogs, request_blogs} from "./index";
import agent from "../agent";
export const LOGIN = 'LOGIN';


export const UPDATE_FIELD_AUTH = 'UPDATE_FIELD_AUTH';
export const REGISTER = 'REGISTER';

export const onChangeUsername = value => {
    return {type: UPDATE_FIELD_AUTH, key: 'username', value}
};

export const onChangePassword = value => {
    return {type: UPDATE_FIELD_AUTH, key: 'password', value}
};

export const onChangeRePassword = value => {
    return {type: UPDATE_FIELD_AUTH, key: 'repassword', value}
};


//创建一个数据
// export const register = (username,password) => {
export const RegisterSbmit = (data) => {
    fetch(`http://localhost:3000/signup`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data),
    }).then(response => response.json())
        .then(repsonse => console.log(repsonse, '___++++')).catch(e => console.log(e))

};


export const ReceiveToken = "receive_token";

export const register = data => {
    return {type: REGISTER, data}
};

// export const onSubmit = (username,password) => {
//     return {
//         type:LOGIN,
//         payload:agent.Auth.login(username,password)
//     }
// }


const saveToken = token => {
    return {
        type: ReceiveToken,
        token
    }
};

//
// export const fetchLogin = (data) => dispatch => {
//     fetch(`http://localhost:3000/login`, {
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         method: 'POST',
//         body: JSON.stringify(data),
//     }).then((repsonse) => {
//         console.log(repsonse,'{{{{{{{{{{{++++++');
//             dispatch(saveToken(repsonse));
//         }).catch(e => console.log(e))
// };


export const fetchLogin = (data) => {
    fetch(`http://localhost:3000/login`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data),
    }).then(response =>
        response.json()
    ).then(response=>console.log(response,'9999999999999')).catch(e => console.log(e))
};

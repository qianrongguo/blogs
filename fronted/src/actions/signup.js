import {receive_blogs, request_blogs} from "./index";
import agent from "../agent";
import jwt_decode from 'jwt-decode';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const ReceiveToken = "receive_token";
export const SET_CURRENT_USER = 'SET_CURRENT_USER';


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


export const register = data => {
    return {type: REGISTER, data}
};

//保存token
const saveToken = token => {
    return {
        type: ReceiveToken,
        token
    }
};


export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
};

//登出
export const logout = () => {
    return {
        type:LOGOUT
    }
};

//post数据，顺便将token放到signup.token
export const fetchLogin = (data) => dispatch => {
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

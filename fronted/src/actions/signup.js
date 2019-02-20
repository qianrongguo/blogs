export const UPDATE_FIELD_AUTH = 'UPDATE_FIELD_AUTH';
export const REGISTER = 'REGISTER';


export const onChangeUsername = value => {
    return {type: UPDATE_FIELD_AUTH, key: 'username', value}
}

export const onChangePassword = value => {
    return {type: UPDATE_FIELD_AUTH, key: 'password', value}
}

export const onChangeRePassword = value => {
    return {type: UPDATE_FIELD_AUTH, key: 'repassword', value}
}


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
        .then(repsonse => console.log(repsonse, '___++++')).catch(e=>console.log(e))

}
// return {type:REGISTER,RegisterSbmit}
// }

// headers: {
//     'Accept': 'application/json',
//         'Content-Type': 'application/json'
// },
// method: "POST",
//     body: JSON.stringify({a: 1, b: 2})


export const register = data => {
    return {type: REGISTER, data}
}



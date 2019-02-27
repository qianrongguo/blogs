import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);
const API_ROOT = 'http://localhost:3000';
const encode = encodeURIComponent;

const responseBody = res => res.body;

let token = null;
const tokenPlugin = req => {
    if (token) {
        req.set('authorization', `Token ${token}`);
    }
};

const requests = {
    post: (url, body) =>
        superagent.post(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody)
};

const Auth = {
    login: (username, password) =>
        requests.post('/login', { user: { username, password } })
};

export default {
    Auth,
    setToken: _token => { token = _token; }
}

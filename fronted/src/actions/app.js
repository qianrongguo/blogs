export const APP_LOAD = 'APP_LOAD';
export const REDIRECT = 'REDIRECT';


export const onLoad = (payload,token) => {
    return {
        type:APP_LOAD, payload,token,skipTracking: true
    }
}


export const onRedirect = () => {
    return {
        type:REDIRECT
    }
}

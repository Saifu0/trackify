import * as actionTypes from './AuthenticationTypes';
import axios from 'axios';

export const authStart = () => {
    return {
        type : actionTypes.AUTH_START
    }
}

export const authSuccess = ( token : any ) => {
    return {
        type : actionTypes.AUTH_SUCCESS,
        token : token
    }
}

export const authFail = ( error : any ) => {
    return {
        type : actionTypes.AUTH_FAIL,
        error : error
    }
}

export const logout = () => {
    sessionStorage.removeItem("token");
    // sessionStorage.removeItem("expirationDate");
    return {
        type : actionTypes.AUTH_LOGOUT
    }
} 

export const checkAuthTimeout = (expirationDate : any ) => {
    return (dispatch : any) => {
        setTimeout(() => {
            dispatch(logout());
        },expirationDate*1000);
    }
}

export const authLogin = (username : any, password : any) => {
    return (dispatch : any) => {
        dispatch(authStart());
        axios.post('rest-auth/login/',{
            username : username,
            password : password
        })
        .then(res => {
            const token = res.data.key;
            // const expirationDate = new Date(new Date().getTime() + 3600*1000);
            sessionStorage.setItem('token',token);
            // sessionStorage.setItem('expirationDate',expirationDate);
            dispatch(authSuccess(token));
            dispatch(checkAuthTimeout(3600));
        })
        .catch(err => {
            dispatch(authFail(err));
        });
    }
}

export const authSignup = (username : any, email : any, password1 : any, password2 : any) => {
    return (dispatch : any) => {
        dispatch(authStart());
        axios.post('rest-auth/registration/',{
            username : username,
            email : email,
            password1 : password1,
            password2 : password2
        })
        .then(res => {
            const token = res.data.key;
            // const expirationDate = new Date(new Date().getTime() + 3600*1000);
            sessionStorage.setItem('token',token);
            // sessionStorage.setItem('expirationDate',expirationDate);
            dispatch(authSuccess(token));
            dispatch(checkAuthTimeout(3600));
        })
        .catch(err => {
            dispatch(authFail(err));
        });
    }
}
import React from 'react';

export const BASE_URL = 'https://auth.nomoreparties.co';


const checkResponse = (res) => {
    console.log('res checkResponse', res);
    if (!res.ok) {
        return Promise.reject(`Error: ${res.status}`);
    }
    return res.json();
}

export const register = ({email, password}) => {

    console.log('email, password', email, password);

    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({password, email})
    })
        .then((res) => checkResponse(res))
        .then((res) => {
            return res;
        })
};

export const authorize = ({email, password}) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({password, email})
    })
        .then((res) => checkResponse(res))
        .then((res) => {
            console.log('res', res);
            return res;
        })
};

export const checkData = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
        .then((res) => checkResponse(res))
        .then((res) => {
            console.log('res', res);
            return res;
        })
}



/*
321321321123@yandex.ru 321321321123
_id: "606fd38b546906001995a774", email: "321321321123@yandex.ru"
*/

/*const checkResponse = (res) => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);*/

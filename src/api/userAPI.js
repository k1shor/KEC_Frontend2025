// const API = `http://localhost:5000/api/user`
import { API } from "../constants"

export const register = (username, email, password) => {
    let user = { username, email, password }
    return fetch(`${API}/user/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(response => { return response.json() })
        .catch(error => console.log(error))
}

export const verifyEmail = (token) => {
    return fetch(`${API}/user/verify/${token}`)
        .then(res => res.json())
        .catch(error => console.log(error))
}

export const login = (email, password) => {
    let user = { email, password }
    return fetch(`${API}/user/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(response => { return response.json() })
        .catch(error => console.log(error))
}

export const keepLoggedIn = data => {
    localStorage.setItem('auth', JSON.stringify(data))
}

export const isLoggedIn = () => {
    return localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) : false
}
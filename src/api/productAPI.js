// const API = `http://localhost:5000/api/product`
import { API } from "../constants"


export const getAllProducts = () => {
    return fetch(`${API}/product/getallproducts`)
        .then(res => res.json())
        .catch(error => console.log(error))
}

export const addProduct = (token, product) => {
    return fetch(`${API}/product/addproduct`, {
        method: "POST",
        headers: {
            authorization: `Bearer ${token}`
        },
        body: product
    })
        .then(res => res.json())
        .catch(error => console.log(error))
}

export const updateProduct = (token, id, product) => {
    return fetch(`${API}/product/updateproduct/${id}`, {
        method: "PUT",
        headers: {
            authorization: `Bearer ${token}`
        },
        body: product
    })
        .then(res => res.json())
        .catch(error => console.log(error))
}

export const getProductDetails = (id) => {
    return fetch(`${API}/product/getproductdetails/${id}`)
        .then(res => res.json())
        .catch(error => console.log(error))
}

export const deleteProduct = (id, token) => {
    return fetch(`${API}/product/deleteproduct/${id}`, {
        method: "DELETE",
        headers: {
            authorization: `Bearer ${token}`
        }
    })
        .then(res => res.json())
        .catch(error => console.log(error))
}


export const getFilteredProducts = (filter) => {
    return fetch(`${API}/product/getfilteredproducts`, {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(filter)
    })
        .then(res => res.json())
        .catch(error => console.log(error))
}

export const getRelatedProducts = (id) => {
    return fetch(`${API}/product/getrelatedproducts/${id}`)
        .then(res => res.json())
        .catch(error => console.log(error))
}
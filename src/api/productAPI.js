const API = `http://localhost:5000/api/product`


export const getAllProducts = () => {
    return fetch(`${API}/getallproducts`)
        .then(res => res.json())
        .catch(error => console.log(error))
}

export const addProduct = (token, product) => {
    return fetch(`${API}/addproduct`, {
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
    return fetch(`${API}/updateproduct/${id}`, {
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
    return fetch(`${API}/getproductdetails/${id}`)
        .then(res => res.json())
        .catch(error => console.log(error))
}

export const deleteProduct = (id, token) => {
    return fetch(`${API}/deleteproduct/${id}`, {
        method: "DELETE",
        headers: {
            authorization: `Bearer ${token}`
        }
    })
        .then(res => res.json())
        .catch(error => console.log(error))
}


export const getFilteredProducts = (filter) => {
    return fetch(`${API}/getfilteredproducts`, {
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
    return fetch(`${API}/getrelatedproducts/${id}`)
        .then(res => res.json())
        .catch(error => console.log(error))
}
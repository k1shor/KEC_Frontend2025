const API = `http://localhost:5000/api/category`


export const getAllCategories = () => {
    return fetch(`${API}/getallcategories`)
        .then(res => res.json())
        .catch(error => console.log(error))
}

export const addCategory = (token, category_name) => {
    let category = { category_name }
    return fetch(`${API}/addcategory`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`
        },
        body: JSON.stringify(category)
    })
        .then(res => res.json())
        .catch(error => console.log(error))
}

export const updateCategory = (token, id, category_name) => {
    let category = { category_name }
    return fetch(`${API}/updatecategory/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`
        },
        body: JSON.stringify(category)
    })
        .then(res => res.json())
        .catch(error => console.log(error))
}

export const getCategoryDetails = (id) => {
    return fetch(`${API}/getcategory/${id}`)
        .then(res => res.json())
        .catch(error => console.log(error))
}

export const deleteCategory = (id, token) => {
    return fetch(`${API}/deletecategory/${id}`, {
        method: "DELETE",
        headers: {
            authorization: `Bearer ${token}`
        }
    })
        .then(res => res.json())
        .catch(error => console.log(error))
}

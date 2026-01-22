import { API } from "../constants"

export const placeOrder = order => {
    return fetch(`${API}/order/placeorder`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(order)
    })
        .then(res => res.json())
        .catch(error => console.log(error))
}

export const getAllOrders = () => {
    return fetch(`${API}/order/getallorders`)
        .then(res => res.json())
        .catch(error => console.log(error))
}

export const updateOrder = (id, status) => {
    return fetch(`${API}/order/updateorder/${id}`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ status })
        }
    )
        .then(res => res.json())
        .catch(error => console.log(error))
}
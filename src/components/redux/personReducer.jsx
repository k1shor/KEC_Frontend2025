let initialData = {
    name: 'n/a',
    phone: 'n/a'
}

const personReducer = (state = initialData, action) => {
    switch (action.type) {
        case "UPDATE_NAME":
            return { ...state, name: action.payload }

        case "UPDATE_PHONE":
            return { ...state,  phone: action.payload }

        default:
            return state
    }
}

export default personReducer
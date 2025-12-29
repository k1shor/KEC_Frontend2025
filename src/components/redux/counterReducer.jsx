const counterReducer = (state = { count: 101 }, action) => {
    switch (action.type) {
        case "INCREASE":
            return { count: ++state.count }

        case "DECREASE":
            return { count: --state.count }

        case "RESET":
            return { count: 0 }

        default:
            return state
    }
}

export default counterReducer

// action - {type: "INCREASE"}
const INTITIAL_STATE = {
    transaction: [
        { id: 1, title: 'lunch', price: -150 },
    ],
    user: []
}


export default (state = INTITIAL_STATE, action) => {
    switch (action.type) {
        case "USERDATA":
            return ({
                ...state,
                user: action.data
            })
        case "USEROUT":
            return ({
                ...state,
                user: []
            })
    }
    return state;
}
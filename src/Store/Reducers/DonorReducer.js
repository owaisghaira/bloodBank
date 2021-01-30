const INTITIAL_STATE = {
    transaction: [
        // {
        //     name: 'owais',
        //     dateOfBirth: '18 oct 1990',
        //     bloodGroup: 'A',
        //     location: '40/15 11-f',
        //     phone: '03242630393',
        //     city: 'karachi'
        // },
    ],
    coordinate:''
}


export default (state = INTITIAL_STATE, action) => {
    switch (action.type) {
        case "ADDONOR":
            return ({
                ...state,
                transaction: [...state.transaction, action.data]
            })
        case 'DONORDATA':
            return ({
                ...state,
                transaction: action.data
            })
        case "USEROUT":
            return ({
                ...state,
                user: []
            })
        case 'CURRENTMAP':
            return ({
                ...state,
                coordinate: action.data
            })
    }
    return state;
}
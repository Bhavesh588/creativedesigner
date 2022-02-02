const initialState = {
    saveAuto: false,
    autoPre: false,
    codeSpace: false,
    darkmode: false
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SAVEAUTO':
            return {
                ...state,
                saveAuto: action.item
            }
        case 'AUTOPRE':
            return {
                ...state,
                autoPre: action.item
            }
        case 'CODESPACE':
            return {
                ...state,
                codeSpace: action.item
            }
        case 'DARKMODE':
            return {
                ...state,
                darkmode: action.item
            }
        default:
            return state
    }
}

export default rootReducer
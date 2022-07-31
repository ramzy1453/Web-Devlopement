import { theme } from "./theme";

const initialState = {

    user: null,
    theme: theme.pallete.light
}


export const setUser = user => ({ type: "set-user", payload: { user: user } })

export function reducer(state = initialState, action) {
    switch (action.type) {
        case 'set-user':
            return {...state, user: action.payload.user }
        case 'toggle-theme':
            return {...state, theme: state.theme === 'dark' ? 'light' : 'dark' }
        default:
            return state
    }
}
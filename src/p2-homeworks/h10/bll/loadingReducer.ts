import {stateType} from "./store";

export type loadingActionT = ReturnType<typeof loadingAC>

type initStateType = {
    loading: boolean
}

const initState = {
    loading: false
}

export const loadingReducer = (state: initStateType = initState, action: loadingActionT): initStateType => {
    switch (action.type) {
        case 'LOADING': {

            return {...state, loading: action.loading}

        }
        default:
            return state
    }
}

export const loadingAC = (loading: boolean) => {
    return {
        type: 'LOADING',
        loading
    } as const
}
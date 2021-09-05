import {initialPeopleType} from "../HW8";
import {log} from "util";

export type sortCreatorType = ReturnType<typeof sortAC>
export type checCreatorType = ReturnType<typeof checkAC>
export type checkAgeType = ReturnType<typeof checkAgeAC>

export type buttonSortType = checkAgeType | checCreatorType | sortCreatorType

export const homeWorkReducer = (state: initialPeopleType, action: buttonSortType): initialPeopleType => { // need to fix any
    switch (action.type) {
        case 'SORT-NAME': {
            let stateCope = [...state]
            stateCope = stateCope.sort((a, b) => {
                if (a.name < b.name) {
                    return -1
                } else {
                    return 1
                }
            })
            return stateCope
        }
        case 'SORT-NUMBERS': {
            {
                let stateCope = [...state]
                stateCope = stateCope.sort((a, b) => {
                    if (a.age < b.age) {
                        return -1
                    } else {
                        return 1
                    }
                })
                return stateCope
            }
            // need to fix

        }
        case 'CHECK-AGE': {
            {
                let statecopy = [...state]
                statecopy = statecopy.filter(f => f.age >= 18)
                return statecopy
            }
            // need to fix

        }
        default:
            return state
    }
}

export const sortAC = () => {
    return {
        type: 'SORT-NAME',
        payload: 'up'
    } as const
}

export const checkAC = () => {
    return {
        type: 'SORT-NUMBERS',
        payload: 'down'
    } as const
}

export const checkAgeAC = () => {
    return {
        type: 'CHECK-AGE',
        payload: 'age'
    } as const
}
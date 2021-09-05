import React from 'react'
import {homeWorkReducer} from '../homeWorkReducer'
import {initialPeopleType} from "../../HW8";

let initialState: initialPeopleType // need to fix any

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, {type: 'SORT-NAME', payload: 'up'})


     expect(newState[0].age).toBe(66)
})
test('sort name down', () => {
    const newState = homeWorkReducer(initialState, {type: 'SORT-NUMBERS', payload: 'down'})

    expect(newState[0].age).toBe(3)
})
test('check age 18', () => {
    const newState = homeWorkReducer(initialState, {type: 'CHECK-AGE', payload: 'age'})


})

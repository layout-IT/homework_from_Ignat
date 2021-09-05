import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './HW8.module.css'

// export type UserType =
export type UserType = {
    _id: number
    name: string
    age: number
}

export type initialPeopleType = Array<UserType>

const initialPeople: initialPeopleType = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<initialPeopleType>(initialPeople) // need to fix any

    // need to fix any
    const finalPeople = people.map((p: UserType) => (
        <div key={p._id} className={s.people}>
            {p.name},{p.age}
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: 'SORT-NAME', payload: 'up'}))
    const check = () => setPeople(homeWorkReducer(initialPeople, {type: 'SORT-NUMBERS', payload: 'down'}))
    const checkAge = () => setPeople(homeWorkReducer(initialPeople, {type: 'CHECK-AGE', payload: 'age'}))

    return (
        <div className={s.wrapper}>
            <hr/>
            <h2 className={s.title}>homeworks 8</h2>

            {/*should work (должно работать)*/}
            {finalPeople}
            <div className={s.but_Container}>
                <div><SuperButton onClick={sortUp} className={s.but}>sort by letters</SuperButton></div>
                <div><SuperButton onClick={check} className={s.but}>sort by numbers</SuperButton></div>
                <div><SuperButton onClick={checkAge} className={s.but}>check 18</SuperButton></div>
            </div>


            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8

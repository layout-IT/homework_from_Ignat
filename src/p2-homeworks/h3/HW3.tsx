import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import * as stream from "stream";
import {strict} from "assert";
import s from './Greeting.module.css'
import { v1 } from 'uuid';

// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<UserType[]>([]) // need to fix any


    const addUserCallback = (name: string) => { // need to fix any
        const user: UserType = {
            _id: v1(),
            name: name,
        }
        setUsers([user, ...users])
    }

    return (
        <div>
            <div className={s.homeWork}>
            homeworks 3
        </div>
            {/*should work (должно работать)*/}
            <GreetingContainer users={users}
                               addUserCallback={addUserCallback}/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    )
}

export default HW3

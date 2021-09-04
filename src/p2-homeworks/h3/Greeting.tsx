import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import {UserType} from "./HW3";
import styles from './Greeting.module.css';

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void  // need to fix any
    error: boolean // need to fix any
    totalUsers: number // need to fix any
    users: Array<UserType>
    addUserCallback: (name: string)=>void
}



// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers,users,addUserCallback} // деструктуризация пропсов
) => {
    const inputClass = s.error // need to fix with (?:)

    return (
        <div>
            <input value={name}  onChange={setNameCallback} className={error ? inputClass: s.inp}/>
            <button className={s.add} onClick={addUser}>add</button>
            <span className={s.Total__users}>{totalUsers}</span>
            <span className={s.message__error}>{error ? 'There should not be an empty line here': ''}</span>
        </div>
    )
}

export default Greeting

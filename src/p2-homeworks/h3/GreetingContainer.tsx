import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string)=>void
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState(false) // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any

        if (e.currentTarget.value !== ''){
            setName( e.currentTarget.value.trim())

            setError(false)

        }
    }


    const addUser =  () => {
        if(name !== ''){
            addUserCallback(name)
            setName('')
            alert('Hello  ' + name)

        }else {
            setError(true)
        }


    }


    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            users={users}
            addUserCallback={addUserCallback} />

    )
}

export default GreetingContainer

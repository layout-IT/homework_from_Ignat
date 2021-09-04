import React from 'react'
import s from './Message.module.css'

type messageDataType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: messageDataType) {
    return <div className={s.container}>

        <img className={s.logo} src={props.avatar} alt="logo"/>
        <div className={s.contant}>
            <div className={s.name}>
                {props.name}
            </div>
            <div className={s.item}>
                <div className={s.message}>
                    {props.message}
                </div>
                <div className={s.time}>
                    {props.time}
                </div>
            </div>
        </div>
    </div>

}

export default Message

import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'

type AffairsPropsType = { // need to fix any
    data: AffairType[]
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}/>
    ))

    const setAll = () => {
        props.setFilter('all')
    } // need to fix
    const setHigh = () => {
        props.setFilter('hight')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter("low")
    }

    return (
        <div>

            {mappedAffairs}

            <button className={s.botton__styles} onClick={setAll}>All</button>
            <button className={s.botton__styles} onClick={setHigh}>High</button>
            <button className={s.botton__styles} onClick={setMiddle}>Middle</button>
            <button className={s.botton__styles} onClick={setLow}>Low</button>
        </div>
    )
}

export default Affairs

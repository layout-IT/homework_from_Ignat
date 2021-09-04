import React from 'react'
import {NavLink} from 'react-router-dom';
import {PATH} from "./Routes";
import s from './HW5.module.css'

function Header() {
    // @ts-ignore
    return (
        <div className={s.items}>
           <NavLink to = {PATH.PRE_JUNIOR} className = {s.item} activeClassName = {s.active} > PRE_JUNIOR </NavLink>
           <NavLink to = {PATH.Junior_plus} className = {s.item} activeClassName = {s.active}> Junior_plus </NavLink>
           <NavLink to = {PATH.Junior} className = {s.item} activeClassName = {s.active}> Junior </NavLink>
            <button className={s.but}>hover</button>
        </div>
    )
}

export default Header

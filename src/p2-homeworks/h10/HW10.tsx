import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {loadingAC} from "./bll/loadingReducer";
import {stateType, store} from "./bll/store";
import s from './HW10.module.css'


function HW10() {
    let dispatch = useDispatch()
    let loading = useSelector<stateType, boolean>(state => state.loadingReducer.loading)
    // useSelector, useDispatch

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 2000)
        // dispatch
        // setTimeout

    };

    return (
        <div className={s.wrapper}>

            <div className={s.hw}>homework 10</div>


            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div className={s.image}>< img
                        src="https://www.pinclipart.com/picdir/big/235-2355092_we-are-family-clip-art.png"
                        alt="loading"/></div>
                ) : (
                    <div>
                        <SuperButton className={s.but} onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}


export default HW10

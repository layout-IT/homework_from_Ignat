import React from 'react'
import Routes from "./Routes";
import Header from "./Header";
import { HashRouter } from 'react-router-dom';
import s from './HW5.module.css'

function HW5() {
    return (
        <div>

            <HashRouter>

            <Header/>

            <Routes/>

            </HashRouter>

        </div>
    )
}

export default HW5

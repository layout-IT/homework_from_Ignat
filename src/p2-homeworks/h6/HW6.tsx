import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'
import s from './HW6.module.css'

function HW6() {
    let [value, setValue] = useState<string>('')

    const save = () => {
        saveState<string>('editable-span-value', value)
        // setValue('')
    }
    const restore = () => {
        setValue(restoreState('editable-span-value', value))
        // setValue()
    }

    return (
        <div className={s.wrapper}>
            <h2 className={s.text}>Homework 6</h2>
            <div>
                <SuperEditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined : '...enter text...'}}
                />
            </div>
            <SuperButton className={s.text_black} onClick={save}>save</SuperButton>
            <SuperButton className={s.text_black} onClick={restore}>restore</SuperButton>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperEditableSpan/>*/}
            <hr/>
        </div>
    )
}

export default HW6

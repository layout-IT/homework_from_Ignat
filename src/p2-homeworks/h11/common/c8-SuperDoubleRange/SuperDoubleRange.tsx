import React, {ChangeEvent} from 'react'


type SuperDoubleRangePropsType = {
   // onChangeRange: (value: [number, number]) => void
  //  value?: [number, number]
    onChangeRange?: (value: number) => void
    valueOne: number
    setValueTwo: any
    setValueOne: any
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange,valueOne,setValueTwo,setValueOne,  ...restProps
        // min, max, step, disable, ...
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        //  onChange && onChange(e) // сохраняем старую функциональность

        onChangeRange && onChangeRange(+e.currentTarget.value)
        setValueOne(+e.currentTarget.value)

    }

    return (
        <>

            <input type={"range"} onChange={onChangeCallback} value={valueOne} />

        </>
    )
}


export default SuperDoubleRange

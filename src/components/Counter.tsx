import React from 'react';
import s from './Counter.module.css'
import {Button} from "./Button/Button";

type PropsType = {
    counterValue: number
    maxValue: number
    startValue: number
    error: boolean
    inc: () => void
    reset: () => void
}

export function Counter(props: PropsType) {
    return (
        <div className={s.containerCounter}>
            <div className={s.counterInput}>
                <div>
                    <span className={props.counterValue >= props.maxValue ? s.error : ""}>{props.counterValue}</span></div>
            </div>
            <div className={s.counterButtons}>
                <Button
                    title = {"inc"}
                    disabled={props.counterValue >= props.maxValue}
                    onClickHandler={props.inc}
                />
                <Button
                    title = {"reset"}
                    disabled={props.counterValue <= props.startValue}
                    onClickHandler={props.reset}
                />
            </div>
        </div>
    )
}
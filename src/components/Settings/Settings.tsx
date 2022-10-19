import React, {ChangeEvent} from 'react';
import s from './Settings.module.css'
import {Button} from "../Button/Button";
import {Input} from "./Input/Input";

type PropsType = {
    counterValue: number
    maxValue: number
    startValue: number
    error: boolean
    setMaxValueHandler: (value: number) => void
    setStartValueHandler: (value: number) => void
    setSettingsToStorage: () => void
}

export function Settings(props: PropsType) {

    // const disableHandler = () => {
    //     return props.maxValue <= 0 || props.startValue < 0 || props.maxValue <= props.startValue;
    // }
    const inputClassName =  s.input + ' ' + (props.error ? s.errorInput : '')


        return (
        <div className={s.containerCounter}>
            <div className={s.counterInput}>
                <Input
                    className={inputClassName}
                    title={"max value:"}
                    value={props.maxValue}
                    setHandler={props.setMaxValueHandler}
                />
                <Input
                    className={inputClassName}
                    title={"start value:"}
                    value={props.startValue}
                    setHandler={props.setStartValueHandler}
                />
            </div>
            <div className={s.counterButtons}>
                <Button
                    title={"set"}
                    disabled={props.error}
                    onClickHandler={props.setSettingsToStorage}
                />
            </div>
        </div>
    )
}
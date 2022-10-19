import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import s from './App.module.css';
import {Settings} from './components/Settings/Settings';
import {Counter} from "./components/Counter";


function App() {
    // let initCounterValueString = localStorage.getItem('counterValue')
    // let initCounterValue = 0
    // initCounterValueString ? initCounterValue = JSON.parse(initCounterValueString) : initCounterValue = 0

    let [counterSettings, setCounterSettings] = useState(
        {
            startValue: 0,
            maxValue: 5
        }
    )

    let [counterValue, setCounterValue] = useState<number>(0)

    let [error, setError] = useState<boolean>(false)
    // useEffect(() => {
    //     // let counterValueString = localStorage.getItem('counterValue')
    //     // if (counterValueString) {
    //     //     let newCounterValue = JSON.parse(counterValueString)
    //         setCounterValue(counterSettings.startValue)
    //
    // }, [])

    // useEffect(() => {
    //     localStorage.setItem('counterValue', JSON.stringify(counterValue))
    // }, [counterValue])

    useEffect(() => {
        let newStartValueString = localStorage.getItem('startValue')
        let newMaxValueString = localStorage.getItem('maxValue')
        if (newStartValueString && newMaxValueString) {
            let newStartValue = JSON.parse(newStartValueString)
            let newMaxValue = JSON.parse(newMaxValueString)
            setCounterSettings({...counterSettings, startValue: newStartValue, maxValue: newMaxValue})
            setCounterValue(counterSettings.startValue)
        }
    }, [])

    const incHandler = () => {
        setCounterValue(counterValue + 1)
        // localStorage.setItem('counterValue', JSON.stringify(counterValue+1))
    }

    const resetHandler = () => {
        setCounterValue(counterSettings.startValue)
        // localStorage.clear()
    }

    const setStartValueHandler = (startValue: number) => {
        // localStorage.setItem('startValue', startValue)
        setCounterSettings({...counterSettings, startValue: startValue})
    }
    const setMaxValueHandler = (maxValue: number) => {
        // localStorage.setItem('startValue', startValue)
        setCounterSettings({...counterSettings, maxValue: maxValue})
    }

    const setSettingsToStorage = () => {
        localStorage.setItem('startValue', JSON.stringify(counterSettings.startValue))
        localStorage.setItem('maxValue', JSON.stringify(counterSettings.maxValue))
        setCounterValue(counterSettings.startValue)
    }

    // if (counterSettings.maxValue && counterSettings.startValue) {
    //     if (counterSettings.maxValue <= 0 || counterSettings.startValue < 0 || counterSettings.maxValue <= counterSettings.startValue) {
    //         setError(true)
    //     } else {
    //         setError(false)
    //     }
    // }

    return (
        <div className={s.App}>
            <Counter
                counterValue={counterValue}
                startValue={counterSettings.startValue}
                maxValue={counterSettings.maxValue}
                error={error}
                inc={incHandler}
                reset={resetHandler}
            />
            <Settings
                key={'startValue' || 'maxValue'}
                counterValue={counterValue}
                maxValue={counterSettings.maxValue}
                startValue={counterSettings.startValue}
                error={error}
                setMaxValueHandler={setMaxValueHandler}
                setStartValueHandler={setStartValueHandler}
                setSettingsToStorage={setSettingsToStorage}
            />
        </div>
    );
}

export default App;

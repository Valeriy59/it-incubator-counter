import React, {useState} from 'react';

let [counterValue, setCounterValue] = useState<number>(0)

const inc = () => {
    if (counterValue < 5) {
    setCounterValue(counterValue++)}
}

const reset = () => {
    setCounterValue(0)
}
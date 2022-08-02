import { useState } from 'react'

const useStep = (
    size: number,
    start?: number
) => {
    const [step, setStep] = useState(start || 0)

    const nextStep = () => {
        if (step < size - 1) {
            setStep(prevStep => prevStep + 1)
        }
    }

    const prevStep = () => {
        if (step > 0) {
            setStep(prevStep => prevStep - 1)
        }
    }

    return {
        step,
        setStep,
        nextStep,
        prevStep,
    }
}

export default useStep
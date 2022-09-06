import { useState, useCallback } from 'react'

const useStep = (size: number, start?: number) => {
    const [step, setStep] = useState(start || 0)

    const nextStep = useCallback(() => {
        if (step < size - 1) {
            setStep(prevStep => prevStep + 1)
        }
    }, [setStep])

    const prevStep = useCallback(() => {
        if (step > 0) {
            setStep(prevStep => prevStep - 1)
        }
    }, [setStep])

    return {
        step,
        setStep,
        nextStep,
        prevStep,
    }
}

export default useStep
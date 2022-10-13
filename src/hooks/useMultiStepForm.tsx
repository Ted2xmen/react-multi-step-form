import React, { ReactElement } from 'react'

const useMultiStepForm = (steps: ReactElement[] | string[]) => {

    const [currentStepIndex, setCurrentStepIndex] = React.useState(0)

    const next = () => {
        setCurrentStepIndex(i => {
            if (i >= steps.length - 1) return i
            return i + 1
        })

    }

    const back = () => {
        setCurrentStepIndex(i => {
            if (i <= 0) return i
            return i - 1
        })

    }


    const goTo = (index: number) => {
        setCurrentStepIndex(index)
    }


    return {
        currentStepIndex,
        step: steps[currentStepIndex],
        isFirstStep: currentStepIndex === 0,
        isLastStep: currentStepIndex === steps.length - 1,
        steps,
        goTo,
        back,
        next
    }

}

export default useMultiStepForm
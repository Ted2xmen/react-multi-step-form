import { FormEvent, useState } from 'react'
import './App.css'
import AdressForm from './components/AdressForm'
import UserForm from './components/UserForm'
import useMultiStepForm from './hooks/useMultiStepForm'


export type FormData = {
  name: string
  password: string
  country: string
  city: string

}

export type UserFormProps = FormData & {
  updateFields: (fields: Partial<FormData>) => void

}

const initialData = {
  name: '',
  password: '',
  country: '',
  city: ''
}

function App() {
  const [data, setData] = useState<FormData>(initialData)

  const updateFields = (fields: Partial<FormData>) => {
    setData(prev => {
      return { ...prev, ...fields }
    })

  }

  const { currentStepIndex, steps, goTo, step, back, next, isFirstStep, isLastStep } = useMultiStepForm([<UserForm {...data} updateFields={updateFields} />, <AdressForm updateFields={updateFields} {...data} />])

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (!isLastStep) return next()
    alert('Successfully submitted')
  }

  return (
    <div className="App">

      <form onSubmit={onSubmit}>
        <div>
          <h3> {currentStepIndex + 1} / {steps.length} </h3>
          <button type="button" onClick={() => goTo(steps.length - 1)}>Adress Form</button>
        </div>
        <div>
          {step}
        </div>
        <div>
          {!isFirstStep && <button type='button' onClick={() => back()}>Back</button>
          }
          <button type='submit'>
            {isLastStep ? 'Submit' : 'Next'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default App

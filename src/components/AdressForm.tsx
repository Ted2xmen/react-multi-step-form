import React from 'react'
import FormWrapper from './FormWrapper'
import { UserFormProps } from '../App'

const AdressForm = ({ city, country, updateFields }: UserFormProps) => {
    return (
        <FormWrapper title="Adress Form">
            <label>Adress Form</label>
            <input placeholder='Country' value={country} type="text" onChange={e => updateFields({ country: e.target.value })} />
            <label htmlFor="">City</label>
            <input required placeholder='City' value={city} type="password" onChange={e => updateFields({ city: e.target.value })} />
        </FormWrapper>
    )
}

export default AdressForm
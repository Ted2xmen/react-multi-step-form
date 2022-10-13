import React from 'react'
import FormWrapper from './FormWrapper'
import { UserFormProps } from '../App'

const UserForm = ({ name, password, updateFields }: UserFormProps) => {
    return (
        <FormWrapper title='User Form'>
            <label>User Form</label>
            <input placeholder='Name' value={name} type="text" onChange={e => updateFields({ name: e.target.value })} />
            <label htmlFor="">Password</label>
            <input required placeholder='Password' value={password} type="password" onChange={e => updateFields({ password: e.target.value })} />
        </FormWrapper>

    )
}

export default UserForm
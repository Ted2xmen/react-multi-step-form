import React from 'react'

type FormWrapperProps = {
    children: React.ReactNode,
    title: string
}

const FormWrapper = ({ children, title }: FormWrapperProps) => {
    return (
        <>
            <h1>{title}</h1>
            <div>{children}</div>

        </>)
}

export default FormWrapper
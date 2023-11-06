import React from "react"
import styles from "./FormControl.module.css"

const FormControl = ({children, meta}) => {
    const hasError = meta.touched && meta.error 
    return (
        <div className={`${styles.formControl} ${ hasError && styles.error}`}>
            {children}
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const TextArea = ({input, meta, ...props}) => {
    return (
        <FormControl  meta={meta}>
            <textarea {...input} {...props} />
        </FormControl>
    )
}

export const Input = ({input, meta, ...props}) => {
    return (
        <FormControl meta={meta}>
            <input {...input} {...props} />
        </FormControl>
    )
}
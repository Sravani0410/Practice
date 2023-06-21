import React, { forwardRef } from 'react';
import classes from "./Input.module.css";
const Input = forwardRef((props,ref) => {
  let inputclasses = `${classes.input_field} ${props.inputClassName||""}`;
  let labelClasses = `${classes.label} ${props.labelClassName ||""}`
  return (
    <div className={classes.form_control}>
        <label htmlFor={props.id} className={labelClasses}>{props.label}</label>
        <input ref={ref} type={props.type} className={inputclasses}  required={true} />
    </div>
  )
})

export default Input

import React from 'react';
import { useCallback } from 'react';
import {
  ErrorValues,
  FormValidation,
  InputValues
} from '../utils/types';

const FormValidator = (): FormValidation => {
  const [values, setValues] = React.useState<InputValues>({});
  const [errors, setErrors] = React.useState<ErrorValues>({});
  const [isValid, setIsValid] = React.useState<boolean>(false);

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    const name: string = evt.target.name;
    const value: string = evt.target.value;
    setValues({...values, [name]: value});
    setErrors({...errors, [name]: evt.target.validationMessage });
    setIsValid(evt.target.closest("form")!.checkValidity());
  };

  const resetForm = useCallback((
    newValues: InputValues = {},
    newErrors: ErrorValues = {},
    newIsValid: boolean = false
  ): void => {
    setValues(newValues);
    setErrors(newErrors);
    setIsValid(newIsValid);
  }, [setValues, setErrors, setIsValid]);

  return { values, handleChange, errors, isValid, resetForm };
};

export default FormValidator;

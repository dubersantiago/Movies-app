import { useEffect, useMemo, useState } from 'react';

export const useForm = ( initialForm = {},formValidations={} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const [ formValidation,setFormValidation ]=useState({});

    useEffect(()=>{
        createValidators();
    },[formState])

    const isFormValid = useMemo(()=>{

        for (const formvalue of Object.keys(formValidation)) {
            if(formValidation[formvalue]!==null) return false;
        }
        return true;        
    },[formValidation]);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const createValidators=()=>{
        const formChechvalues={};

        for (const formField of Object.keys(formValidations)) {

            const [fn,errormenssage]=formValidations[formField];

            formChechvalues[`${formField}Valid`]=fn( formState[formField]) ? null : errormenssage;
        }
        setFormValidation(formChechvalues);
    }


    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        ...formValidation,
        isFormValid
    }
}
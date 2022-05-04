import { useState } from "react"
//CUSTOMHOOK QUE SE ENCARGA de la información del formulario y del handleInputChange

// Estado inicial es un objeto vacío
export const useForm = ( initialState = {} ) => {

  const [values, setValues] = useState(initialState);

  const handleInputChange = ({ target }) => {

    setValues({
      ...values,
      [ target.name ]: target.value
    });
  }

  //Regresamos como arreglo
  return [values, handleInputChange];
}
